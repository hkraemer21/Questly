import AchievementListItem from "./AchievementListItem.js";

const AchievementList = {

    components: {
        AchievementListItem,
    },

    props: {
        game: { type: Object, required: true },
        listOfItems: { type: Array, required: true },
        name: { type: String, required: true },

    },

    template: `
        <div>

            <div class="row p-3 pb-0">
                    <div class="col-4"></div>

                <div class="col-4 d-flex align-items-center justify-content-center">
                    <h3 class="fs-2">{{ name }}</h3>
                </div>
                <div class="col-4 d-flex align-items-center justify-content-end">
                    <button class="btn btn-sm btn-dark border border-black rounded-0"
                        data-bs-toggle="modal" data-bs-target="#addAchievementModal">Add New
                    </button>
                </div>
            </div>

            <ul class="ps-3w-100" v-if="game.achievements.length > 0">

                <achievement-list-item
                    v-for="(achievement, index) in listOfItems"
                    :key="achievement.name"
                    :achievement="achievement"
                    :game="game"
                    :list-of-items="listOfItems"
                    @delete-achievement="$emit('delete-achievement', $event)"
                    @favorite-achievement="$emit('favorite-achievement', $event)"
                    @pin-achievement="$emit('pin-achievement', $event)"
                    @edit-achievement="$emit('edit-achievement', $event)"
                ></achievement-list-item>

            </ul>           

        </div>
    `,
};

export default AchievementList;