import ytdl from 'ytdl-core';
import ffmpeg from 'fluent-ffmpeg';
import fs from 'fs';
import path from 'path';
import yts from 'yt-search';

const handler = async (m, { conn, text, usedPrefix: prefix }) => {
  if (!text) {
    return conn.reply(m.chat, '🚩 Ingresa el nombre o enlace de una música de YouTube', m);
  }

  // Determinar si se ingresó un enlace válido, sino se realiza una búsqueda
  let videoUrl = text;
  if (!ytdl.validateURL(text)) {
    const results = await yts(text);
    if (!results || !results.videos || results.videos.length === 0) {
      return conn.reply(m.chat, '🚩 No se encontró ningún video con ese término.', m);
    }
    videoUrl = results.videos[0].url;
  }

  try {
    // Obtener información del video para formar el nombre del archivo
    const info = await ytdl.getInfo(videoUrl);
    const rawTitle = info.videoDetails.title;
    const title = rawTitle.replace(/[^a-z0-9]/gi, '_').toLowerCase();

    // Directorio temporal para almacenar el audio convertido
    const tempDir = './temp';
    if (!fs.existsSync(tempDir)) fs.mkdirSync(tempDir);
    const outputPath = path.join(tempDir, `${Date.now()}_${title}.mp3`);

    // Descargar y convertir a MP3 utilizando ffmpeg
    await new Promise((resolve, reject) => {
      ffmpeg(ytdl(videoUrl, { quality: 'highestaudio' }))
        .audioBitrate(128)
        .toFormat('mp3')
        .on('end', () => {
          console.log('Conversión finalizada');
          resolve();
        })
        .on('error', (err) => {
          console.error('Error en la conversión:', err);
          reject(err);
        })
        .save(outputPath);
    });

    // Enviar el archivo de audio al chat
    await conn.sendMessage(
      m.chat,
      { audio: fs.readFileSync(outputPath), mimetype: 'audio/mpeg' },
      { quoted: m }
    );

    // Eliminar el archivo temporal
    fs.unlinkSync(outputPath);
  } catch (error) {
    console.error('Error en ytmp3:', error);
    return conn.reply(m.chat, '❌ Ocurrió un error al procesar tu solicitud.', m);
  }
};

handler.help = ['ytmp3 <nombre/enlace>'];
handler.tags = ['descarga', 'audio'];
handler.command = ['ytmp3'];
handler.register = true;

export default handler;
