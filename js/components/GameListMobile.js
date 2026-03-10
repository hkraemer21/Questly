import GameItem from "./GameItem.js";

const GameList = {

    components: {
        GameItem,
    },

    props: {        
        listOfItems: {type: Array, required: true},
        name: {type: String, required: true},
        id : {type: String, required: true},

    },

    template: `
        <div>

            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button"
                        data-bs-toggle="collapse" :data-bs-target="'#' + id"
                        aria-expanded="true" :aria-controls="id">
                        {{ name }}
                    </button>
                </h2>
                <div :id="id" class="accordion-collapse collapse"
                    data-bs-parent="#mobileGameList">
                    <div class="accordion-body">
                        <ul class="ps-2">

                            <game-item
                                v-for="(game, index) in listOfItems"
                                :key="game.name"
                                :game="game"
                                @select-game="$emit('select-game', game)"              
                            ></game-item>

                        </ul>
                    </div>
                </div>
            </div>

        </div>
    `,
};

export default GameList;