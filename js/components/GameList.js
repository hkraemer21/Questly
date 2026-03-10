import GameItem from "./GameItem.js";

const GameList = {

    components: {
        GameItem,
    },

    props: {        
        listOfItems: {type: Array, required: true},
        name: {type: String, required: true},

    },

    template: `
        <div>

            <h4 class="fw-bolder fst-italic fs-5 pt-4">{{ name }}</h4>
            <img src="/images/game-divider.png" alt="" class="game-divider">
            <ul class="ps-2 desktop">

                <game-item
                    v-for="(game, index) in listOfItems"
                    :key="game.name"
                    :game="game"
                    @select-game="$emit('select-game', game)"       
                ></game-item>

            </ul>

        </div>
    `,
};

export default GameList;