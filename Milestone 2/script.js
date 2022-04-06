console.log('Milestone 2');

const app = new Vue ({
    el: '#app',
    data: {
        albums: [],
    },

    methods: {
        fetchData() {
            axios.get('./db.php').then (res => {
                console.log(res.data);

                this.albums = res.data;
                console.log(this.albums);
            });
        },

        getGenre (response, genre, array) { 

            for(let i = 0; i < response.length; i++){

                if(response[i].genre.toLowerCase() === genre){

                    array.push(response[i]);
                }
            }

            console.log(array);
        }
    },

    mounted() {
        this.fetchData();
        this.filteredAlbums();
    }
});