let handler = async (m, { conn, usedPrefix, command }) => {

    try {
        m.reply('👑 ʀᴇɪɴɪᴄɪᴀɴᴅᴏ ᴇʟ ʙᴏᴛ....')
        setTimeout(() => {
            process.exit(0)
        }, 3000) 
    } catch (error) {
        console.log(error)
        conn.reply(m.chat, `${error}`, m)
    }
}

handler.help = ['restart']
handler.tags = ['owner']
handler.command = ['restart', 'reiniciar'] 
handler.rowner = true

export default handler