const Discord= require('discord.js')
const db = require('quick.db')
const ms = require("ms")
const {MessageButton} = require("discord-buttons")
module.exports = {
    name: 'mybot',
    aliases: [],
    run: async (client, message, args) => {
let prefix =  db.get(` ${process.env.owner}.prefix`)
if(prefix === null) prefix = process.env.prefix;
  let color = db.get(`${process.env.owner}.color`) 
   if(color === null  ) color = process.env.color
   const B4 = new MessageButton()
   .setStyle('url')
   .setLabel('Support')
 .setURL(process.env.support);
    let user = message.author || client.users.cache.get(args[0]) 
    if(!args[0]) {
 let dba =   db.get(`botmember_${message.guild.id}_${user.id}` )
 if(dba === null ) return message.channel.send("Vous n'avez aucun bot")
 const embed = new Discord.MessageEmbed()
 .setTitle(`Vos bot`)
 .setColor(color)
 .setDescription(dba.map((user) => `[${user.bot}](https://discord.com/api/oauth2/authorize?client_id=${user.botid}&permissions=8&scope=bot%20applications.commands) (${user.type}) ce finit <t:${Date.parse(new Date(Date.now() + user.date))/1000}:R> `))

        message.channel.send(embed, B4)
    
    } if(args[0]) {
      if(process.env.owner.includes(message.author.id)) {

        let dba =   db.get(`botmember_${message.guild.id}_${user.id}` )
 if(dba === null ) return message.channel.send("Vous n'avez aucun bot")
 const embed = new Discord.MessageEmbed()
 .setTitle(` bot de ${user.tag}`)
 .setColor(color)
 .setDescription(dba.map((user) => `[${user.bot}](https://discord.com/api/oauth2/authorize?client_id=${user.botid}&permissions=8&scope=bot%20applications.commands) (${user.type}) ce finit <t:${Date.parse(new Date(Date.now() + user.date))/1000}:R> `))

        message.channel.send(embed, B4)
      }
    }
    }
}