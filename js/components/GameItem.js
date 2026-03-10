const GameItem = {

    data: function(){
        return {}
    },


    props: {        
        game: {type: Object, required: true},

    },

    methods: {

    },


    computed: {

    },

    template: `

        <li class="mt-3 text-break">
            <a id="selectedGame" class="text-decoration-none text-black"
                @click="$emit('select-game', game)">{{ game.name }}
                <hr>
            </a>
        </li>

    `,
};

export default GameItem;