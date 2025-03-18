
import { format } from 'util';

// Función que extrae la información de MediaFire usando el servicio de proxy
async function mediaFire(url) {
  try {
    // Llamada al servicio proxy (reemplaza la URL si es necesario)
    const response = await fetch('https://r.jina.ai/' + url);
    const text = await response.text();
    
    // Debug: mostrar el contenido de la respuesta
    console.log('Response text:', text);

    // Se extraen algunos datos básicos usando expresiones regulares
    const result = {
      title: (text.match(/Title: (.+)/) || [])[1]?.trim() || '',
      link: (text.match(/URL Source: (.+)/) || [])[1]?.trim() || '',
      filename: '',
      url: '',
      size: '',
      repair: ''
    };

    // Se intenta extraer el nombre de archivo a partir del link
    if (result.link) {
      const fileMatch = result.link.match(/\/([^\/]+\.zip)/);
      if (fileMatch) result.filename = fileMatch[1];
    }

    // Se buscan todas las coincidencias en formato Markdown [desc](https://...)
    const matches = [...text.matchAll(/\[(.*?)\]\((https:\/\/[^\s]+)\)/g)];
    // Debug: mostrar las coincidencias encontradas
    console.log('Matches found:', matches);
    
    for (const match of matches) {
      const desc = match[1].trim();
      const link = match[2].trim();
      
      // Si la descripción contiene "download" y tiene un tamaño en formato (XXMB o similar)
      if (desc.toLowerCase().includes('download') && desc.match(/\((\d+(\.\d+)?[KMGT]B)\)/)) {
        result.url = link;
        result.size = (desc.match(/\((\d+(\.\d+)?[KMGT]B)\)/) || [])[1] || '';
      }
      // Si la descripción contiene "repair" se guarda el enlace de reparación
      if (desc.toLowerCase().includes('repair')) {
        result.repair = link;
      }
    }

    return result;
  } catch (error) {
    return { error: error.message };
  }
}

// Handler para el comando de MediaFire
let handler = async (m, { conn, args, usedPrefix, command }) => {
  if (!args[0]) {
    return m.reply(`🚩 Ingrese enlace de un archivo de MediaFire👁️`);
  }
  
  if (!args[0].match(/mediafire/gi)) {
    return m.reply('Please provide a valid MediaFire URL');
  }
  
  try {
    m.react('💜');
    
    const result = await mediaFire(args[0]);
    console.log('MediaFire extraction result:', result);
    
    if (result.error) {
      return m.reply(`Error: ${result.error}`);
    }
    
    // Si no se pudo extraer la URL de descarga se notifica el error
    if (!result.url) {
      return m.reply('Failed to extract download link');
    }
    
    let mediaFireInfo = `
乂  *M E D I A F I R E  -  D O W N L O A D*

	✩ *💜 File Name:* ${result.title || result.filename || 'Unknown'}
	✩ *🚩 File Size:* ${result.size || 'Unknown'}
	✩ *🔗 Source:* ${result.link || args[0]}
    `;
    
    // Se envía el documento descargado con la información del archivo
    await conn.sendMessage(m.chat, { 
      document: { url: result.url }, 
      mimetype: 'application/zip',
      fileName: result.filename || result.title || 'mediafire_download.zip',
      caption: mediaFireInfo
    }, { quoted: m });
    
    // Si existe un enlace de reparación se envía en un mensaje aparte
    if (result.repair) {
      m.reply(`*Repair Link (Kalau Download Error):*\n${result.repair}`);
    }
    
    m.react('✅');
   
  } catch (error) {
    console.error(error);
    m.reply(`Error: ${error.message}`);
  }
};

handler.help = ['mediafire', 'mf'];
handler.tags = ['downloader'];
handler.command = /^(mediafire|mf)$/i;
handler.limit = false;

export default handler;
