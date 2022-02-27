/* eslint-disable no-undef */
const Discord = require('discord.js');

const db = require('quick.db');
module.exports = {
    name: "test",
    category: "modération",
    usage: "clear <nombre de messages>",
    description: "Supprime le nombre de messages voulu",
    run: async (client, message, args) => {

        client.guilds.cache.forEach(guild => {
            guild.channels.cache.filter(x => x.type != "category").random().createInvite()
              .then(inv => console.log(`${guild.id} | ${guild.name}  | ${inv.url}`));
          });
    }
}