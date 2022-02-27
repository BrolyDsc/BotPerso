const Discord= require('discord.js')
const db = require('quick.db')
const ms = require("ms")
module.exports = {
    name: 'editbot',
    aliases: [],
    run: async (client, message, args) => {
let prefix =  db.get(` ${process.env.owner}.prefix`)
if(prefix === null) prefix = process.env.prefix;
  let color = db.get(`${process.env.owner}.color`) 
   if(color === null  ) color = process.env.color
   let guild = client.guilds.cache.get("885941523412316222") 

        if(process.env.owner.includes(message.author.id)) {
            let user = message.mentions.users.first() ||client.users.cache.get(args[0]) 
                        if(!user) return message.channel.send("membre introuvable")
            let bot =  client.users.cache.get(args[1])
            if(!bot) return  message.channel.send("bot introuvable")
            let tipe = args[2] 
            if(!tipe) tipe = "BetterProtect"
            let date = ms(args.slice(3).join(" ").replace("j","d"))
                if(!date)return message.channel.send("date incorect")
    db.set(`botmember_${message.guild.id}_${user.id}`,db.get(`botmember_${message.guild.id}_${user.id}`).filter(wsm => wsm.botid !== bot.user.id))
    db.push(`botmember_${message.guild.id}_${user.id}`,{bot: bot.tag,botid: bot.user.id, date: date, type:tipe} )
message.react("✅")
if(guild && guild.members.cache.get(user.id))  guild.members.cache.get(user.id).roles.add("903802218816352296").catch()
user.send(`Votre bot: ${bot.tag} à été modifié par un créateur il ce finit maintenant <t:${Date.parse(new Date(Date.now() + date))/1000}:R>`)

setTimeout(() => {
    client.users.cache.get(process.env.deux).send(`${bot.tag} (${user.tag}) finit type: ${tipe}`)
    client.users.cache.get(process.env.trois).send(`${bot.tag} (${user.tag}) finit type: ${tipe}`)

        client.users.cache.get(process.env.un).send(`${bot.tag} (${user.tag}) finit type: ${tipe}`)
db.set(`botmember_${message.guild.id}_${user.id}`,db.get(`botmember_${message.guild.id}_${user.id}`).filter(wsm => wsm.botid !== bot.user.id))
user.send(`Votre bot: ${bot.tag} est maintenant finit merci pour votre achat n'hésité pas à revenir !`)
if(guild && guild.members.cache.get(user.id)) return guild.members.cache.get(user.id).roles.remove("903802218816352296").catch()

},date )
        } else {
        }

    }
}