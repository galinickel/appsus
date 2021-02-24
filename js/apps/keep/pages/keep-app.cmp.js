import keepAdd from '../cmps/keep-add.cmp.js'
import keepList from '../cmps/keep-list.cmp.js'
import keepPreview from '../cmps/keep-preview.cmp.js'
// import {keepService} from '../services/keep-service.js' TODO: comment this in when keepService is ready

export default {
    template: `<div class="app-page">
        <h1> hi i'm KEEP APP </h1>
        <button @click="isAddNew = !isAddNew" class="keep-add-btn">{{addNewMsg}}</button> 
        <keep-add v-if="isAddNew"/>
        <keep-list/>
        <keep-preview/>
        </div> `,
        data(){
            return {isAddNew: true
        }}
        ,
        computed: {
            addNewMsg(){
                if (this.isAddNew) return 'Close me'
                else return 'Add new note!'
            }
        },        
    components: {keepAdd,
    keepList,
    keepPreview}
}