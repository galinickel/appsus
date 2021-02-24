import { storageService } from '../../../site-services/async-storage-service.js'
let KEEP_KEY = 'keepNotes'
export const keepService = {
    // query,
    // getNoteById,
    // searchNote,
    addNote,
    //deleteNote
}

function addNote(noteType, note) { 
    let newNote = {
        type: noteType,
        note: note,
        settings: {
            isPinned: false,
            isEditing: false
        }
    }
    console.log(newNote);
    storageService.post(KEEP_KEY, newNote)
}

