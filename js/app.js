import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";



const app = createApp({
    // data: all the data for the app
    data: function () {
        return {
            newGame: {
                name: '',
                image: '',
                platform: '',
                pin: false,
                favorite: false,
                achievements: [],

            },

            newAchievement: {
                name: '',
                description: '',
                increment: 0,
                pin: false,
                favorite: false,
            },

            gameList: [
                {
                    name: 'Resident Evil 2 Remake', image: 're2remake.jpeg', platform: 'PC', pin: true, favorite: true, achievements: [
                        { name: 'Welcome to Raccoon City', description: 'Complete the game on any difficulty.', increment: 1, pin: false, favorite: false },
                        { name: 'Survivor', description: 'Complete the game on Normal or higher difficulty.', increment: 1, pin: false, favorite: false },
                        { name: 'Master of Unlocking', description: 'Unlock all the weapons and items in the game.', increment: 1, pin: false, favorite: false },
                    ]
                },
                {
                    name: 'God of War: Ragnarok', image: 'gowragnarok.jpg', platform: 'PS5', pin: false, favorite: true, achievements: [
                        { name: 'Ragnarok Unleashed', description: 'Complete the game on any difficulty.', increment: 1, pin: false, favorite: false },
                        { name: 'Valhalla Conqueror', description: 'Complete the game on Hard difficulty.', increment: 1, pin: false, favorite: false },
                        { name: 'Mythical Collector', description: 'Collect all the collectibles in the game.', increment: 1, pin: false, favorite: false },
                    ]
                },
                {
                    name: 'The Last of Us Part II', image: 'tloup2.jpg', platform: 'PS5', pin: false, favorite: false, achievements: [
                        { name: 'Survivor', description: 'Complete the game on any difficulty.', increment: 1, pin: false, favorite: false },
                        { name: 'Master of Stealth', description: 'Complete the game using only stealth tactics.', increment: 1, pin: false, favorite: false },
                        { name: 'Collector', description: 'Collect all the collectibles in the game.', increment: 1, pin: false, favorite: false },
                    ]
                },

            ],



        };
    },

    // methods: usually "events" triggered by v-on:
    methods: {
        addNewGame: function () {
            this.gameList.push(this.newGame);

            // reset the form
            this.newGame = {
                name: '',
                image: '',
                platform: '',
                pin: false,
                favorite: false,
                achievements: [],
            };
        },

        addNewAchievement: function (game) {
            game.achievements.push(this.newAchievement);

            // reset the form
            this.newAchievement = {
                name: '',
                description: '',
                increment: 0,
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
        if (localStorage.getItem('gameList')) {
            this.gameList = JSON.parse(localStorage.getItem('gameList'));
        }

    },

    // watch:   calls the function if the value changes
    // https://travishorn.com/add-localstorage-to-your-vue-app-in-2-lines-of-code-56eb2c9f371b
    watch: {
        gameList: {
            handler: function (newVal) {
                localStorage.setItem('gameList', JSON.stringify(newVal));
            },
            deep: true
        }
    },
});

export default app;