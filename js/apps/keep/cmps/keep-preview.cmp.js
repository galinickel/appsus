export default {
    props: ['note'],
    template: `<div :class="note.id" class="keep-preview flex main-layout " @mouseover="editBar=true" @mouseleave="editBar=false">
        <i class="fas fa-thumbtack keep-preview-pin"></i>
        <p v-if="note.type==='txt'">{{note.note}}</p>
        <img v-if="note.type==='img'" :src="note.note">
        <iframe v-if="note.type==='video'" :src="note.note"> </iframe>
        <ul v-if="note.type==='list'">
            <li v-for="item in note.note">{{item}}</li>
        </ul>
        <div v-if="editBar" class="edit-bar-container"> 
        <ul  class="flex edit-bar">
        <li><i class="far fa-edit"></i></li>
        <li><i class="fas fa-palette"></i></li>
        <li><i class="fas fa-envelope-open-text"></i></li>
        <li><i class="far fa-trash-alt"></i></li>

        </ul>
        </div>
        </div>`,
data(){
    return { 
        editBar: false
    }
}

}
