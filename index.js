// variable
const Discord = require('discord.js')
const client = new Discord.Client({ fetchAllMembers: true,partials: ['MESSAGE', 'CHANNEL', 'REACTION', 'GUILD_PRESENCES','GUILD_MEMBERS','GUILD_MESSAGES', 'GUILD_VOICE_STATES'] })
const disbut = require('discord-buttons'); 
disbut(client);
require('dotenv').config()
const db = require('quick.db')
const fs = require('fs');
const ms = require('ms');

client.commands = new Discord.Collection()
client.aliases = new Discord.Collection()
client.snipes = new Map()
client.on("disconnect", () => client.logger.warn("Bot is disconnecting..."))
client.on("reconnecting", () => client.logger.log("Bot reconnecting...", "log"))


let color = db.get(`${process.env.owner}.color`) 
if(color === null  ) color = process.env.color
const guildInvites = new Map();

// login
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'))
for (const file of commandFiles) {
    const commands = require(`./commands/${file}`)
    client.commands.set(commands.name, commands)

   console.log(`> commande charger ${commands.name}`)
}
client.on('ready', () => {
  console.log(`- Conecter ${client.user.username}`)


  


})
// guild message

let prefix = process.env.prefix;
//handler
client.on('guildCreate', async guild => {
//guild.leave()
})

client.on('message', async message => {
  //  if(!message.guild) return;
    //if(message.author.bot) return;
 //if(message.channel.id === message.guild.channels.cache.get("897299656894218240").id) {
//message.react("<:Nice:899346910274535495>")
 //}



    if (message.content.match(new RegExp(`^<@!?${client.user.id}>( |)$`))) {
   return message.channel.send(`Mon prefix sur ce serveur est : \`${prefix}\``)
    
  } 
    if (!message.content.startsWith(prefix)) return;

    let messageArray = message.content.split(" ");
    const args1 = message.content.slice(prefix.length).split(/ +/);
    const commandName = args1.shift().toLowerCase();
    let args = messageArray.slice(1);
    let command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));


 
  if (command) command.run(client, message, args);


})
client.on('guildMemberAdd', async member => {
//member.guild.channels.cache.get("897299661335965696").send(`${member.user}`).then((m) => {setTimeout(() => {m.delete() }, 1000)})

})
client.login(process.env.token)