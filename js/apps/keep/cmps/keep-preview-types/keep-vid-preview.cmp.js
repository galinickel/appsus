export default {
    props: ['note'],
    template: `<span>
        <div>
    <iframe frameborder="5" :src="vidUrl"></iframe>
</div>
</span>`,
    data() {
        return {
            vidUrl: this.note.info
        }
    },
    created() {
        this.vidUrl='https://www.youtube.com/embed/'+this.youtubeParser(this.note.info)

    },
    methods: {
        youtubeParser(vidUrl) {
            let regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
            let match = vidUrl.match(regExp);
            return(match && match[7].length == 11) ? match[7] : false;
        }
    }
}