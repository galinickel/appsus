import { storageService } from '../../../site-services/async-storage-service.js'
const KEEP_KEY = 'keepNotes'
const notesData = []
export const keepService = {
    query,
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

function query() {
    return storageService.query(KEEP_KEY)
        .then(notes => {
            if (!notes.length) {
                notes = notesData;
                storageService.postMany(KEEP_KEY, notes);
            }
            return notes })
}
