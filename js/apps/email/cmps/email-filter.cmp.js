export default {
    name: 'email-filter',
    template: `<section>
        
        <div class="email-search">
            <input @input="setFilter" type="text" placeholder="search..." v-model="filterBy.byContent">
            <button @click="setStatus('read')">show read</button>
            <button @click="setStatus('unread')">show unread</button>
        </div>
    </section>`,
    data() {
        return {
            filterBy: {
                byContent: '',
                byStatus: null
            }
        }
    },
    methods: {
        setFilter() {
            this.$emit('filterSet', this.filterBy)
        },
        setStatus(readStatus) {
            this.filterBy.byStatus = readStatus;
            setFilter();
        }
    }
}