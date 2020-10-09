import { Command, commands } from "../command"
import * as Discord from "discord.js"


export default {
    name: "help",
    help: "prints available commands and how to use them",
    run: (msg: Discord.Message, args: string[]) => {
        let embed = new Discord.MessageEmbed()
        embed.title = "QuiQuizz bot help"
        commands.forEach(c => {
            embed.addField(c.name, c.help)
        })

        msg.channel.send(embed)
    }

}