import AppModal from './AppModal.js';

const AddGameModal = {

    name: 'AddGameModal',
    components: {
        AppModal,
    },

    data() {
        return {
            newGame: this.createNewGame(),
        }
    },

    props: {

    },

    emits: ['add'],

    methods: {

        addNewGame() {
            // emit object for parent
            this.$emit('add', this.newGame);

            // clear the form
            this.newGame = this.createNewGame();

            // close the modal
            this.$refs.modal.close();
        },

        createNewGame() {
            return {
                name: '',
                platform: '',
                image: '',
                pin: false,
                favorite: false,
                achievements: [],
            };
        },

        openModal() {
            this.$refs.modal.open();
        }

    },

    template: `

        <div>
            <button class="btn fw-bolder fst-italic fs-4 border border-2 border-black rounded-0 w-75 p-2 ps-2 pe-2"
                @click="$refs.modal.open()" title="Add Game">Add Game
            </button>
            <app-modal title="Add Game" ref="modal" @submit="addNewGame()">
                <template #header>
                    <h5 class="modal-title text-center" id="modalTitle">Add Game</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                            aria-label="Close"></button>
                </template>

                <div class="mb-3">
                    <label for="title" class="form-label">Title</label>
                    <input id="title" type="text" class="form-control" v-model="newGame.name" required>
                </div>
                <div class="mb-3">
                    <label for="category" class="form-label">Platform</label>
                    <select id="category" class="form-select" v-model="newGame.platform" required>
                        <option value="" disabled>Choose one</option>
                        <option value="Steam">Steam</option>
                        <option value="Xbox">Xbox</option>
                        <option value="PlayStation">PlayStation</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div class="mb-3">
                    <label for="image" class="form-label">Image Link</label>
                    <input id="image" type="text" class="form-control" v-model="newGame.image"
                        placeholder="https://placehold.co/300x400" required>
                </div>

                <template #footer>
                    <button type="submit" class="btn submit-btn">Add</button>
                    <button type="button" class="btn text-decoration-underline fw-bold" data-bs-dismiss="modal">Nevermind</button>
                </template>

            </app-modal>
        </div>


    `






};

export default AddGameModal;