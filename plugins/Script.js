import { promises } from 'fs'
import { join } from 'path'

let handler = async (m, { conn, __dirname }) => {
  try {
    let { exp, limit, level } = global.db.data.users[m.sender]
    let name = await conn.getName(m.sender)
    let _uptime = process.uptime() * 1000
    let muptime = clockString(_uptime)

    let leerMas = '\u200e'.repeat(850)

    let menuText = `
┏━━━━━━━━━━⬣
┃ ✦ 𝐎𝐖𝐍𝐄𝐑𝐒 ✦
┗━━━━━━━━━━⬣
👑 *Comandos exclusivos para Moderadores*

╭━━⊷ *comandos medios* ⊶━━╮
┃ 💠 *#addllama* - Añadir coins a un usuario.
┃ 💠 *#userpremium* - Otorgar premium a un usuario.
┃ 💠 *#delprem* - Quitar premium a un usuario.
┃ 💠 *#addexp* - Añadir XP a un usuario.
┃ 💠 *#autoadmin* - Admin automático si el bot es admin.
┃ 💠 *#listban* - Ver lista de baneados.
┃ 💠 *#banuser* - Banear a un usuario.
┃ 💠 *#unbanuser* - Desbanear a un usuario.
┃ 💠 *#block* / *#unblock* - Bloquear o desbloquear usuario.
┃ 💠 *#listblock* - Ver usuarios bloqueados.
┃ 💠 *#removellama* - Quitar llamás a un usuario.
┃ 💠 *#removexp* - Quitar XP a un usuario.
┃ 💠 *#deletedatauser* - Restablecer datos de usuario.
┃ 💠 *#cleartmp* - Limpiar archivos temporales.
┃ 💠 *#dsowner* - Eliminar archivos innecesarios de sesión.
╰━━━━━━━━━━━━━╯

╭━⊷ *comandos avanzados* ⊶━╮
┃ 🔥 *#addowner* / *#delowner* - Agregar o eliminar owner.
┃ 🔥 *#codigo* - Crear código de canjeo.
┃ 🔥 *#backup* - Respaldo de la DB del bot.
┃ 🔥 *#bcgc* - Mensaje a todos los grupos.
┃ 🔥 *#cleanfiles* - Eliminar archivos temporales.
┃ 🔥 *#newgc* - Crear un grupo con el bot.
┃ 🔥 *#deletefile* - Eliminar archivos del bot.
┃ 🔥 *#get* - Ver estado de una página web.
┃ 🔥 *#plugin* - Extraer un plugin del bot.
┃ 🔥 *#grouplist* - Ver grupos donde está el bot.
┃ 🔥 *#join* - Unir al bot a un grupo.
┃ 🔥 *#leave* - Sacar al bot de un grupo.
┃ 🔥 *#prefix* - Ver o cambiar prefijo del bot.
┃ 🔥 *#resetprefix* - Restablecer prefijo del bot.
┃ 🔥 *#reiniciar* - Reiniciar el servidor del bot.
┃ 🔥 *#reunion* - Aviso de reunión a los owners.
┃ 🔥 *#savejs* / *#saveplugin* - Guardar archivos en el bot.
┃ 🔥 *#setbanner* - Cambiar imagen del menú.
┃ 🔥 *#setcatalogo* - Cambiar imagen del catálogo.
┃ 🔥 *#addcmd* / *#delcmd* - Guardar o eliminar comandos personalizados.
┃ 🔥 *#cmdlist* - Ver lista de comandos guardados.
┃ 🔥 *#setimage* - Cambiar foto de perfil del bot.
┃ 🔥 *#setmoneda* - Cambiar la moneda del bot.
┃ 🔥 *#setname* - Cambiar nombre del bot.
┃ 🔥 *#setbio* - Cambiar biografía del bot.
┃ 🔥 *#update* - Actualizar bot desde GitHub.
╰━━━━━━━━━━━━━╯

💾 *VenomX-Bot* ⚔️ - Administración y control avanzado.
`.trim()

    let pp = 'https://files.catbox.moe/ebr65k.jpg'
    await conn.sendFile(m.chat, pp, 'thumbnail.jpg', menuText, m)

  } catch (e) {
    conn.reply(m.chat, 'Lo sentimos, ocurrió un error mostrando el menú.', m)
    throw e
  }
}

handler.help = ['menuscript', 'dev']
handler.tags = ['main']
handler.command = ['menuscript', 'dev']
handler.register = true
export default handler

function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
