import {createApp} from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";



const app = createApp({
    // data: all the data for the app
    data: function() {
        return {
            newGame: {
                name: '',
                image: '',
                platform: '',
                pin: false,
                favorite: false,

            },

            gameList: [
                {name: 'Resident Evil 2 Remake', image: '/images/re2remake.jpeg', platform: 'PC', pin: true, favorite: true},
                {name: 'God of War: Ragnarok', image: '/images/gowragnarok.jpg', platform: 'PS5', pin: false, favorite: true},
                {name: 'The Last of Us Part II', image: '/images/tloup2.jpg', platform: 'PS5', pin: false, favorite: false},

            ],



        };
    },

    // methods: usually "events" triggered by v-on:
    methods: {
        addNewGame: function() {
            this.gameList.push(this.newGame);

            // reset the form
            this.newGame = {
                name: '',
                image: '',
                platform: '',
                pin: false,
                favorite: false,
            };
        }


    },

    // computed: values that are updated and cached if dependencies change
    computed: {

    },

    //mounted:  called after the instance has been mounted,
    mounted: function () {

    },

    // watch:   calls the function if the value changes
    // https://travishorn.com/add-localstorage-to-your-vue-app-in-2-lines-of-code-56eb2c9f371b
    watch: {

    },
});

export default app;