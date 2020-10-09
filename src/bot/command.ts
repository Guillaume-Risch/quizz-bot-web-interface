import * as Discord from "discord.js"
import help from "./features/help"
import delete_command from "./features/delete_command"

export interface Command {
    name: string,
    help: string,
    run(msg: Discord.Message, args: string[]): any
}
export const commands: Array<Command> = [
    help


]