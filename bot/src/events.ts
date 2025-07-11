import ready from './events/ready'
import interactionCreate from './events/interaction-create'

export type Event = {
    name: string
    once?: boolean
    execute: Function
}

export const events: Event[] = [ready, interactionCreate]
