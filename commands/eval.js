const Discord= require('discord.js')
const db = require('quick.db')
const ms = require("ms")
module.exports = {
    name: 'eval',
    aliases: [],
    run: async (client, message, args) => {
let prefix =  db.get(` ${process.env.owner}.prefix`)
if(prefix === null) prefix = process.env.prefix;
  let color = db.get(`${process.env.owner}.color`) 
   if(color === null  ) color = process.env.color

        if(process.env.owner.includes(message.author.id)) {
            const content = args.join(" ")
            const result = new Promise((resolve) => resolve(eval(content)));
          
            return result.then((output) => {
                if (typeof output !== "string") {
                    output = require("util").inspect(output, {
                        depth: 0
                    });
                }
              
               
                message.channel.send(output, {
                    code: "js"
                });
            }).catch((err) => {
                err = err.toString();
              
                message.channel.send(err, {
                    code: "js"
                });
            });
        } else {
        }

    }
}