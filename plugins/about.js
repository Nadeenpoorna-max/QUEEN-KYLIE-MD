const config = require('../config')

const {cmd , commands} = require('../command')



cmd({

    pattern: "about",

    desc: "To get the bot informations.",

    react: "ℹ️",

    category: "main",

    filename: __filename

},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {

try{



let about = ` *👋 Hello ${pushname}*
                    ${senderNumber} 
              
 𝐈 𝐀𝐌 𝐐𝐔𝐄𝐄𝐍-𝐊𝐘𝐋𝐈𝐄-𝐌𝐃 𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 𝐁𝐎𝐓
 
𝐂𝐑𝐄𝐀𝐓𝐄𝐃 𝐁𝐘 𝐒𝐀𝐇𝐀𝐒 𝐓𝐄𝐂𝐇 (𝐒𝐀𝐇𝐀𝐒 𝐍𝐄𝐓𝐇𝐒𝐀𝐑𝐀)..
           
*ɢɪᴛʜᴜʙ :*    
             
*ʏᴏᴜᴛᴜʙᴇ :* https://www.youtube.com/@Sahas_Tech
      
*ᴡʜᴀᴛꜱᴀᴘᴘ ᴄʜᴀɴɴᴇʟ :* https://whatsapp.com/channel/0029VaiTjMlK5cDLek3bB533

*©Qᴜᴇᴇɴ ᴋʏʟɪᴇ-ᴍᴅ ʙʏ ꜱᴀʜᴀꜱ ᴛᴇᴄʜッ*`

return await conn.sendMessage(from,{image: {url: config.ALIVE_IMG},caption:about},{quoted: mek})

}catch(e){

console.log(e)

reply(`${e}`)

}

})




