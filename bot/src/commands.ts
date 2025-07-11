import { SlashCommandBuilder, SlashCommandOptionsOnlyBuilder } from 'discord.js'

export type Command = {
    data: SlashCommandBuilder | SlashCommandOptionsOnlyBuilder
    execute: Function
    cooldown?: number
}

export const commands: Command[] = []
