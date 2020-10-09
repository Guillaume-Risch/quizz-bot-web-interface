import { Command, commands } from "../command"
import * as Discord from "discord.js"
import { GuildParameters } from "../../entity/GuildParameters"

export default {
    name: "delete_command",
    help: "set if the command sent needs to be deleted",
    run: (msg: Discord.Message, args: string[]) => {
        if (args.length < 2) {
            msg.reply("value required : *true* or *false*")
            return
        }
        let delete_command = false
        if (args[1] === "true") {
            delete_command = true
        } else if (args[1] === "false") {
            delete_command = false
        } else {
            msg.reply("incorrect value, the values are : *true* or *false*")
        }


        GuildParameters.find((err, res) => {

            let par
            if (res.length === 0) {
                par = new GuildParameters({ guild_id: msg.guild.id, delete_command })

            }
            else {
                par = res[0]
                par.delete_command = delete_command
            }
            par.save().then(() => {
                msg.channel.send(`value set to ${delete_command}`)
            }).catch((reason => {
                msg.channel.send(`an erro occured : ${reason}`)
            }))
        }, { guild_id: msg.guild.id })
    }

}