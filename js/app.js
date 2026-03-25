import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";
import GameList from "./components/GameList.js";
import GameListMobile from "./components/GameListMobile.js";
import AchievementList from "./components/AchievementList.js";
import AddGameModal from "./components/AddGameModal.js";



const app = createApp({

    components: {
        GameList,
        GameListMobile,
        AchievementList,
        AddGameModal,
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
                    name: 'Resident Evil 2 Remake', image: 'https://bigrednerd.com/wp-content/uploads/2025/01/udfogvnmttclvmtwjj0njgwc2488844306262883277.jpeg', platform: 'PC', pin: true, complete: true, achievements: [
                        { name: 'Welcome to Raccoon City', description: 'Complete the game on any difficulty.', increment: 1, pin: false, favorite: true, complete: true },
                        { name: 'Survivor', description: 'Complete the game on Normal or higher difficulty.', increment: 1, pin: false, favorite: false, complete: false },
                        { name: 'Master of Unlocking', description: 'Unlock all the weapons and items in the game.', increment: 1, pin: false, favorite: false, complete: false },
                    ]
                },
                {
                    name: 'God of War: Ragnarok', image: 'https://djmmtgamechangerdoc.wordpress.com/wp-content/uploads/2022/10/god-of-war-ragnarok-cover.jpg?w=1920', platform: 'PS5', pin: false, complete: false, achievements: [
                        { name: 'Ragnarok Unleashed', description: 'Complete the game on any difficulty.', increment: 1, pin: false, favorite: false, complete: false },
                        { name: 'Valhalla Conqueror', description: 'Complete the game on Hard difficulty.', increment: 1, pin: false, favorite: false, complete: false },
                        { name: 'Mythical Collector', description: 'Collect all the collectibles in the game.', increment: 1, pin: false, favorite: true, complete: false },
                    ]
                },
                {
                    name: 'The Last of Us Part II', image: 'https://images.g2a.com/323x433/1x1x1/the-last-of-us-part-ii-remastered-p10000503120/7038c548cc6e48a49931a751', platform: 'PS5', pin: false, complete: false, achievements: [
                        { name: 'Survivor', description: 'Complete the game on any difficulty.', increment: 1, pin: false, favorite: false, complete: false },
                        { name: 'Master of Stealth', description: 'Complete the game using only stealth tactics.', increment: 1, pin: false, favorite: true, complete: false },
                        { name: 'Collector', description: 'Collect all the collectibles in the game.', increment: 1, pin: false, favorite: false, complete: false },
                    ]
                },


            ],

            isPinHovered: false,

            editingGame: null,
            editGameForm: {
                name: '',
                image: '',
                platform: '',
            },

            editingAchievement: null,
            editAchievementForm: {
                name: "",
                description: "",
                increment: 0,
                favorite: false,
            },



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

            this.closeModal('addAchievementModal');
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

        deleteGame: function (game) {
            const index = this.gameList.indexOf(game);
            if (index > -1) {
                this.gameList.splice(index, 1);
            }
            if (this.selectedGame === game) {
                this.selectedGame = null;
            }

        },

        deleteAchievement: function (achievement) {
            const index = this.selectedGame.achievements.indexOf(achievement);
            if (index > -1) {
                this.selectedGame.achievements.splice(index, 1);
            }
        },

        openEditGame: function (game) {
            this.editingGame = game;
            this.editGameForm = {
                name: game.name,
                image: game.image,
                platform: game.platform,
            };
        },

        saveEditedGame: function () {
            if (!this.editingGame) {
                return;
            }

            this.editingGame.name = this.editGameForm.name;
            this.editingGame.image = this.editGameForm.image;
            this.editingGame.platform = this.editGameForm.platform;

            this.closeModal('editGameModal');

            this.editingGame = null;
            this.editGameForm = {
                name: '',
                image: '',
                platform: '',
            };
        },

        openEditAchievement: function (achievement) {
            this.editingAchievement = achievement;
            this.editAchievementForm = {
                name: achievement.name,
                description: achievement.description,
                increment: achievement.increment,
                favorite: achievement.favorite,
            };
        },

        saveEditedAchievement: function () {
            if (!this.editingAchievement) {
                return;
            }

            this.editingAchievement.name = this.editAchievementForm.name;
            this.editingAchievement.description = this.editAchievementForm.description;
            this.editingAchievement.increment = Number(this.editAchievementForm.increment) || 0;
            this.editingAchievement.favorite = this.editAchievementForm.favorite;

            this.closeModal('editAchievementModal');

            this.editingAchievement = null;
            this.editAchievementForm = {
                name: "",
                description: "",
                increment: 0,
                favorite: false,
            };
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

        // sorting achievements with pinned at the top and completed at the bottom, while keeping the rest in their original order
        sortedAchievements: function () {
            if (this.selectedGame) {
                return this.selectedGame.achievements.slice().sort((a, b) => {
                    if (a.pin && !b.pin) {
                        return -1;
                    } else if (!a.pin && b.pin) {
                        return 1;
                    } else if (a.complete && !b.complete) {
                        return 1;
                    } else if (!a.complete && b.complete) {
                        return -1;
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