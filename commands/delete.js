const Discord= require('discord.js')
const db = require('quick.db')
const ms = require("ms")
module.exports = {
    name: 'deletebot',
    aliases: [],
    run: async (client, message, args) => {
let prefix =  db.get(` ${process.env.owner}.prefix`)
if(prefix === null) prefix = process.env.prefix;
  let color = db.get(`${process.env.owner}.color`) 
   if(color === null  ) color = process.env.color
 
        if(process.env.owner.includes(message.author.id)) {
            let user = message.mentions.users.first() ||client.users.cache.get(args[0]) 
let bot =  client.users.cache.get(args[1])
if(!bot) return message.react("❌")
if(!db.get(`botmember_${message.guild.id}_${user.id}`).filter(wsm => wsm.botid !== bot.id)) return message.react("❌")

  
db.set(`botmember_${message.guild.id}_${user.id}`,db.get(`botmember_${message.guild.id}_${user.id}`).filter(wsm => wsm.botid !== bot.id))
message.react("✅")

        } else {
        }

    }
} 