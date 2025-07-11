require('dotenv').config()
import { Client, Collection, GatewayIntentBits } from 'discord.js'

interface ExtendedClient extends Client {
    commands?: Collection<unknown, unknown>
    cooldowns?: Collection<unknown, unknown>
}

const client: ExtendedClient = new Client({
    intents: [
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.MessageContent,
    ],
})

client.login(process.env.DISCORD_BOT_TOKEN)
