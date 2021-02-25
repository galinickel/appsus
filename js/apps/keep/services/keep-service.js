import {
    storageService
} from '../../../site-services/async-storage-service.js'
const KEEP_KEY = 'keepNotes'
const notesData = [{
        type: 'img',
        id: storageService.makeId(),
        isPinned: false,
        isEditing: false,
        info: 'https://media-cdn.tripadvisor.com/media/photo-s/15/dd/9a/56/kitchen-herb-garden.jpg'
    },
    {
        type: 'list',
        id: storageService.makeId(),
        isPinned: false,
        isEditing: false,
        info: ['yoga class', 'pesto pasta', 'bake bread']
    },
    {
        type: 'list',
        id: storageService.makeId(),
        isPinned: false,
        isEditing: false,
        info: ['peanut butter sandwich', 'avocado sandwich', 'grilled cheese sandwich']
    },
    {
        type: 'txt',
        id: storageService.makeId(),
        isPinned: false,
        isEditing: false,
        info: 'A day without laughter is a day wasted!'
    },
    {
        type: 'img',
        id: storageService.makeId(),
        isPinned: false,
        isEditing: false,
        info: 'https://i.pinimg.com/originals/a3/e5/bf/a3e5bfa12e907db4d0a3004023eaad42.jpg'
    },
    {
        type: 'list',
        id: storageService.makeId(),
        isPinned: false,
        isEditing: false,
        info: ['milk', 'bread', 'eggs', 'candles', 'rice', 'mustard']
    },
    {
        type: 'txt',
        id: storageService.makeId(),
        isPinned: false,
        isEditing: false,
        info: 'Vue is kind of fun!'
    },
]
export const keepService = {
    query,
    changeNoteColor,
    addNote,
    deleteNote,
    pinNote,
    toggleNoteEdit,
    editNote
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

function changeNoteColor(id, color) {
    storageService.get(KEEP_KEY, id).then(note => {
        note.noteColor = color
        return storageService.put(KEEP_KEY, note)
    })
}

function pinNote(id) {
    return storageService.get(KEEP_KEY, id).then(note => {
        note.isPinned = !note.isPinned
        return storageService.put(KEEP_KEY, note)
    })
}

function toggleNoteEdit(id) { 
    return storageService.get(KEEP_KEY, id).then(note => {
        note.isEditing = !note.isEditing
        return storageService.put(KEEP_KEY, note)
    })
}

function editNote(noteId,noteType,noteInfo) { 
    return storageService.get(KEEP_KEY, noteId).then(note => {
        note.info = noteInfo
        return storageService.put(KEEP_KEY, note)
    })
}