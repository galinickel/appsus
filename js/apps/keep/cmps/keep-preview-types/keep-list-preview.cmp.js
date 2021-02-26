export default {
    props: ['note'],
    template: `<span>
    <ul style="list-style-type:circle">
        <li v-for="item in note.info" :key="item">               
                <!-- <i class="far" :class="{'fa-square':taskUndone,'fa-check-square':taskCompleted}" @click="toggleChecklist"></i >   -->
                <!-- <i v-if="!item.isCompleted" class="far fa-square" @click="toggleChecklist"></i>
                <i v-if="item.isCompleted" class="far fa-check-square" @click="toggleChecklist"></i> -->
            {{item}}
        </li>
    </ul>
</span>`,
    data() {
        return {

        }
    },
    methods: {
        // toggleChecklist() {
        //     console.log(this.note.item);
        //     this.item.isCompleted = !this.item.isCompleted
        // }
    }
}