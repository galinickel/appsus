import {
    storageService
} from '../../../site-services/async-storage-service.js'
const KEEP_KEY = 'keepNotes'
const notesData = [{
        id: "Do4mloy",
        info: "https://miro.medium.com/max/3000/1*JK9H1lnsMm9GAD_LAtaWAg.jpeg",
        isEditing: false,
        isPinned: true,
        type: "img",
    },
    {
        id: "dEW4jMa",
        info: `"When in doubt: it's not a bug, it's a feature!`,
        isEditing: false,
        isPinned: true,
        noteColor: "#f9cdd0",
        type: "txt",
    },
    {
        id: "QPY9YQQ",
        info: "https://sweetpeaskitchen.com/wp-content/uploads/2014/02/the-best-french-onion-soup-recipe-featured-img.jpg",
        isEditing: false,
        isPinned: false,
        type: "img",
    },
    {
        type: 'list',
        id: "jiDejLu",
        isPinned: true,
        isEditing: false,
        info: ['make test data', 'make a homepage', 'make an about page', 'finish note & email integration', 'polish up CSS', 'implement note editing']
    },
    {
        type: 'img',
        id: storageService.makeId(),
        isPinned: false,
        isEditing: false,
        info: 'https://i.pinimg.com/originals/a3/e5/bf/a3e5bfa12e907db4d0a3004023eaad42.jpg',
        noteColor: "#ffecd6"

    },
    {
        id: "LRLyFnY",
        info: "https://media0.giphy.com/media/xVRRDVP6lqtNQJrzN7/giphy.gif",
        isEditing: false,
        isPinned: false,
        noteColor: "#f7ff8a",
        type: "img",
    },
    {
        id: "OxI9q3K",
        info: "https://www.youtube.com/watch?v=idipMrfAZHk",
        isEditing: false,
        isPinned: false,
        type: "video",
    },
    {
        id: "mxrpcCa",
        info: "https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX18391254.jpg",
        isEditing: false,
        isPinned: false,
        type: "img"
    },
    {
        id: "mHcNws8",
        info: "https://www.youtube.com/watch?v=DtL_giO-EB8",
        isEditing: false,
        isPinned: true,
        noteColor: "#c7dce6",
        type: "video"
    },
    {
        id: "GfH23Z0",
        info: "https://media-cdn.tripadvisor.com/media/photo-s/15/dd/9a/56/kitchen-herb-garden.jpg",
        isEditing: false,
        isPinned: true,
        type: "img"
    },
    {
        id: "vuIya29",
        info: ["onion soup", " tomato soup", " carrot soup", " yam soup", " lentil soup"],
        isEditing: true,
        isPinned: false,
        type: "list"
    },
    {
        id: "locOq33",
        info: "https://i.pinimg.com/originals/a3/e5/bf/a3e5bfa12e907db4d0a3004023eaad42.jpg",
        isEditing: false,
        isPinned: false,
        noteColor: "#97b4a5",
        type: "img"
    },
    {
        id: "ncHlmAj",
        info: "Vue can be a lot of fun!",
        isEditing: false,
        isPinned: true,
        type: "txt"
    }

]
export const keepService = {
    query,
    changeNoteColor,
    addNote,
    deleteNote,
    pinNote,
    toggleNoteEdit,
    editNote,
    clearNoteEdit
}

function addNote(noteType, note) {
    let newNote = {
        type: noteType,
        info: note,
        isPinned: false,
        isEditing: false
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

function clearNoteEdit() {
    return storageService.query(KEEP_KEY).then(notes => {
        notes.forEach(note => {
            return note.isEditing = false
        });
        console.log(notes);
        return notes
    })
}

function editNote(noteId, noteType, noteInfo) {
    return storageService.get(KEEP_KEY, noteId).then(note => {
        note.info = noteInfo
        return storageService.put(KEEP_KEY, note)
    })
}