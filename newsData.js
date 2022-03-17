const app = Vue.createApp({
    data() {
        return {
            message: 'Hello Vue!',
            newsData: [],
            tempData: '',
        }
    },
    methods: {
        getNews() {
            axios.get('https://hex-escape-room.herokuapp.com/api/cors/news')
                .then((res) => {

                    this.newsData = res.data.data;

                    this.newsData.forEach((item) => {
                        item.publishedAt = moment(item.publishedAt).format('YYYY/MM/DD a h:mm:ss ');
                    }

                    );

                })
                .catch((error) => {
                    console.dir(error)
                })
        },
        getOneNews(id) {
            axios.get(`https://alicia-cors-anywhere.herokuapp.com/https://hex-escape-room.herokuapp.com/api/cors/news/${id}`)
                .then((res) => {
                    this.tempData = res.data.data;

                    this.tempData.publishedAt = moment(this.tempData.publishedAt).format('YYYY/MM/DD a h:mm:ss ');

                })
                .catch((error) => {
                    console.dir(error)
                })
        }
    },
    mounted() {
        this.getNews();


    },
});
app.mount('#app')