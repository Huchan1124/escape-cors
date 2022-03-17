const app = Vue.createApp({
    data() {
        return {
            message: 'Hello Vue!',
            newsData: [],
        }
    },
    methods: {
        getNews() {
            axios.get('https://hex-escape-room.herokuapp.com/api/cors/news')
                .then((res) => {

                    this.newsData = res.data.data;

                    this.newsData.forEach((item) => {
                        item.publishedAt = (moment(item.publishedAt).format('YYYY/MM/DD a h:mm:ss '));
                    }

                    );



                    console.log(this.newsData)
                })
                .catch((error) => {
                    console.dir(error)
                })
        },
    },
    mounted() {
        this.getNews();


    },
});
app.mount('#app')