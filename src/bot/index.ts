import * as Discord from "discord.js"
import { readFileSync } from "fs"
import { Command, commands } from "./command"
import * as GuildParameters from "../entity/GuildParameters"
import mongoose from 'mongoose'
import { Resolver } from "dns"



mongoose.connect('mongodb://uquizzdb:5678@mongo/quizz', { useNewUrlParser: true, useUnifiedTopology: true });


const client = new Discord.Client()
export let prefix = "$"
let token = readFileSync("token").toString().trim()


function msgListener(msg: Discord.Message) {
    if (msg.content.startsWith(prefix) && !msg.author.bot) {
        let args = msg.content.replace(prefix, "").split(" ")

        commands.forEach(c => {
            if (c.name === args[0]) {
                c.run(msg, args)
            }
        })
      

        console.log(`${msg.author.tag} > ${msg.content}`)
    }
}






client.on("ready", () => {
    console.log(`Logged in as ${client.user?.tag}!`);

})
client.on('message', msgListener)


client.login(token)