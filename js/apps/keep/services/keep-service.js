import {
    storageService
} from '../../../site-services/async-storage-service.js'
const KEEP_KEY = 'keepNotes'
const notesData = [{
        type: 'img',
        id: storageService.makeId(),
        info: 'https://media-cdn.tripadvisor.com/media/photo-s/15/dd/9a/56/kitchen-herb-garden.jpg'
    },
    {
        type: 'list',
        id: storageService.makeId(),
        info: ['yoga class', 'pesto pasta', 'bake bread']
    },
    {
        type: 'list',
        id: storageService.makeId(),
        info: ['peanut butter sandwich', 'avocado sandwich', 'grilled cheese sandwich']
    },
    {
        type: 'txt',
        id: storageService.makeId(),
        info: 'A day without laughter is a day wasted!'
    },
    {
        type: 'img',
        id: storageService.makeId(),
        info: 'https://i.pinimg.com/originals/a3/e5/bf/a3e5bfa12e907db4d0a3004023eaad42.jpg'
    },
    {
        type: 'list',
        id: storageService.makeId(),
        info: ['milk', 'bread', 'eggs', 'candles', 'rice', 'mustard']
    },
    {
        type: 'txt',
        id: storageService.makeId(),
        info: 'Vue is kind of fun!'
    },
]
export const keepService = {
    query,
    // getNoteById,
    // searchNote,
    addNote,
    deleteNote
}

function addNote(noteType, note) {
    let newNote = {
        type: noteType,
        info: note,
        settings: {
            isPinned: false,
            isEditing: false
        }
    }
    return storageService.post(KEEP_KEY, newNote)
}

function query() {
    return storageService.query(KEEP_KEY)
        .then(notes => {
            if (!notes.length) {
                notes = notesData;
                storageService.postMany(KEEP_KEY, notes);
            }
            return notes
        })
}

function deleteNote(id) {
    return storageService.remove(KEEP_KEY, id)
}