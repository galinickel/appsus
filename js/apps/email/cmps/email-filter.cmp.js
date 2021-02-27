export default {
    name: 'email-filter',
    template: `<section class="email-filter-sort"> 
            <input @input="setFilter" type="text" placeholder="search..." v-model="filterBy.byContent" >
            <select @change="setFilter" v-model="filterBy.byStatus">
                <option value="">All</option>
                <option value="read">Read</option>
                <option value="unread">Unread</option>
            </select>

            <select @change="setSort" v-model="sortBy">
                <option value="date">Date</option>
                <option value="name">Sender</option>
            </select>

        </section>`,
    data() {
        return {
            filterBy: {
                byContent: '',
                byStatus: ''
            },
            sortBy: 'date'
        }
    },
    methods: {
        setFilter() {
            this.$emit('filterSet', this.filterBy)
        },
        setSort() {
            this.$emit('sortSet', this.sortBy)
        }
    }
}