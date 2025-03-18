let pvpQueue = {};

const handler = async (m, { conn, args, text, participants }) => {
    if (!text) return conn.reply(m.chat, "⚔️ Debes mencionar a alguien para desafiarlo a un PvP. Ejemplo: *.pvp @usuario*", m);
    
    let mentionedUser = m.mentionedJid[0];
    if (!mentionedUser) return conn.reply(m.chat, "⚠️ Debes mencionar a un usuario válido del grupo.", m);
    
    let challenger = m.sender;
    let groupId = m.chat;

    if (!pvpQueue[groupId]) {
        pvpQueue[groupId] = [];
    }
    
    if (pvpQueue[groupId].some(entry => entry.challenger === challenger || entry.opponent === challenger)) {
        return conn.reply(m.chat, "⏳ Ya tienes un PvP en curso. Espera a que termine antes de iniciar otro.", m);
    }
    
    pvpQueue[groupId].push({ challenger, opponent: mentionedUser });
    conn.reply(m.chat, `⚔️ *Desafío PvP* ⚔️\n@${challenger.split('@')[0]} está buscando un oponente para un PvP.\n\n@${mentionedUser.split('@')[0]}, ¿aceptas el desafío?`, m, { mentions: [challenger, mentionedUser] });
    
    setTimeout(() => {
        let index = pvpQueue[groupId].findIndex(entry => entry.challenger === challenger);
        if (index !== -1) {
            conn.sendMessage(m.chat, { text: `⌛ *Recordatorio PvP* ⌛\n@${challenger.split('@')[0]} sigue buscando un oponente. ¿Alguien se anima?`, mentions: [challenger] });
        }
    }, 600000); // 10 minutos
};

handler.command = /^(pvp)$/i;
export default handler;
