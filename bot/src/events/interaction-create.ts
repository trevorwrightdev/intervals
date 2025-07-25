import { Events, Collection } from 'discord.js'
import { Event } from '../events'

const event: Event = {
    name: Events.InteractionCreate,
    async execute(interaction: any) {
        if (!interaction.isChatInputCommand()) return

        const command = interaction.client.commands.get(interaction.commandName)

        if (!command) {
            console.error(
                `No command matching ${interaction.commandName} was found.`
            )
            return
        }

        const { cooldowns } = interaction.client

        if (!cooldowns.has(command.data.name)) {
            cooldowns.set(command.data.name, new Collection())
        }

        const now = Date.now()
        const timestamps = cooldowns.get(command.data.name)
        const defaultCooldownDuration = 3
        const cooldownInSeconds = command.cooldown ?? defaultCooldownDuration
        const cooldownAmount = cooldownInSeconds * 1_000

        if (timestamps.has(interaction.user.id)) {
            const expirationTime =
                timestamps.get(interaction.user.id) + cooldownAmount

            if (now < expirationTime) {
                return interaction.reply({
                    content: `Please wait, you are on a cooldown for \`/${command.data.name}\`. You can use it again in ${cooldownInSeconds} seconds.`,
                    ephemeral: true,
                })
            }
        }

        timestamps.set(interaction.user.id, now)
        setTimeout(() => timestamps.delete(interaction.user.id), cooldownAmount)

        try {
            await command.execute(interaction)
        } catch (error) {
            console.error(error)
            if (interaction.replied || interaction.deferred) {
                await interaction.followUp({
                    content: 'There was an error while executing this command!',
                    ephemeral: true,
                })
            } else {
                await interaction.reply({
                    content: 'There was an error while executing this command!',
                    ephemeral: true,
                })
            }
        }
    },
}

export default event
