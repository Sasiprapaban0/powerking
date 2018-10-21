import { CREATE_USER } from 'Actons'
let nextId = 1

export function createUser (value) {
    return {
        type: CREATE_USER,
        user: {
            id: nextId++,
            value
        }
    }
}