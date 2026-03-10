import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";
import GameList from "./components/GameList.js";
import GameListMobile from "./components/GameListMobile.js";



const app = createApp({

    components: {
        GameList,
        GameListMobile,
    },

    data: function () {
        return {
            newGame: {
                name: '',
                image: '',
                platform: '',
                pin: false,
                complete: false,
                achievements: [],
            },

            selectedGame: null,

            newAchievement: {
                name: '',
                description: '',
                increment: 0,
                pin: false,
                favorite: false,
                complete: false,
            },

            gameList: [
                {
                    name: 'Resident Evil 2 Remake', image: 'https://placehold.co/300x400', platform: 'PC', pin: true, complete: true, achievements: [
                        { name: 'Welcome to Raccoon City', description: 'Complete the game on any difficulty.', increment: 1, pin: false, favorite: true, complete: true },
                        { name: 'Survivor', description: 'Complete the game on Normal or higher difficulty.', increment: 1, pin: false, favorite: false, complete: false },
                        { name: 'Master of Unlocking', description: 'Unlock all the weapons and items in the game.', increment: 1, pin: false, favorite: false, complete: false },
                    ]
                },
                {
                    name: 'God of War: Ragnarok', image: 'https://placehold.co/300x400', platform: 'PS5', pin: false, complete: false, achievements: [
                        { name: 'Ragnarok Unleashed', description: 'Complete the game on any difficulty.', increment: 1, pin: false, favorite: false, complete: false },
                        { name: 'Valhalla Conqueror', description: 'Complete the game on Hard difficulty.', increment: 1, pin: false, favorite: false, complete: false },
                        { name: 'Mythical Collector', description: 'Collect all the collectibles in the game.', increment: 1, pin: false, favorite: true, complete: false },
                    ]
                },
                {
                    name: 'The Last of Us Part II', image: 'https://placehold.co/300x400', platform: 'PS5', pin: false, complete: false, achievements: [
                        { name: 'Survivor', description: 'Complete the game on any difficulty.', increment: 1, pin: false, favorite: false, complete: false },
                        { name: 'Master of Stealth', description: 'Complete the game using only stealth tactics.', increment: 1, pin: false, favorite: true, complete: false },
                        { name: 'Collector', description: 'Collect all the collectibles in the game.', increment: 1, pin: false, favorite: false, complete: false },
                    ]
                },
                

            ],

            isPinHovered: false,




        };
    },


    methods: {
        closeModal: function (modalId) {
            const modalElement = document.getElementById(modalId);
            if (!modalElement || !window.bootstrap) {
                return;
            }

            const modal = window.bootstrap.Modal.getOrCreateInstance(modalElement);
            modal.hide();
        },

        selectGame: function (game) {
            this.selectedGame = game;
        },

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

            this.closeModal('addGameModal');
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
                complete: false,
            };
        },

        pinGame: function (game) {
            game.pin = !game.pin;
        },

        pinAchievement: function (achievement) {
            achievement.pin = !achievement.pin;
        },

        favoriteAchievement: function (achievement) {
            achievement.favorite = !achievement.favorite;
        },


    },


    computed: {
        favoritedGames: function () {
            return this.gameList.filter(game => game.favorite);
        },

        pinnedGames: function () {
            return this.gameList.filter(game => game.pin);
        },

        favoritedAchievements: function () {
            if (this.selectedGame) {
                return this.selectedGame.achievements.filter(achievement => achievement.favorite);
            }
            return [];
        },

        pinnedAchievementsFirst: function () {
            if (this.selectedGame) {
                return this.selectedGame.achievements.slice().sort((a, b) => {
                    if (a.pin && !b.pin) {
                        return -1;
                    } else if (!a.pin && b.pin) {
                        return 1;
                    } else {
                        return 0;
                    }
                });
            }
        },
        
        allFavoritedAchievements: function () {
            let favorited = [];
            this.gameList.forEach(game => {
                favorited = favorited.concat(game.achievements.filter(achievement => achievement.favorite));
            });
            return favorited;
        },

    },


    mounted: function () {
        if (localStorage.getItem('gameList')) {
            this.gameList = JSON.parse(localStorage.getItem('gameList'));
        }

    },


    watch: {
        gameList: {
            handler: function (newVal, oldVal) {
                localStorage.setItem('gameList', JSON.stringify(newVal));
            },
            deep: true
        }
    },
});

export default app;