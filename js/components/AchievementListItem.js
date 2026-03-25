const AchievementListItem = {

    data: function(){
        return {}
    },


    props: {
        game: {type: Object, required: true},        
        listOfItems: {type: Array, required: true},
        achievement: {type: Object, required: true},

    },

    methods: {

    },


    computed: {

    },

    template: `

        <li class="m-2 border border-0 border-black">
            <hr>

            <div class="row">

                <div class="col-12">
                    <div class="row mb-2 me-0">
                        <div class="col-1 p-0 position-relative">
                            <div class="h-100 position-absolute top-0 start-50 translate-middle-x">
                                <input class="form-check-input checkbox" type="checkbox"
                                    v-model="achievement.complete"
                                    :checked="achievement.complete"
                                    :id="'achievementCheck' + achievement.name" value=""
                                    aria-label="...">
                            </div>
                        </div>
                        <div class="col-10">
                            <h4 class="fs-2 body fw-bold text-break">{{ achievement.name }} <i
                                @click.prevent="$emit('delete-achievement', achievement)"
                                class="btn-icon bi bi-trash2-fill"></i>
                            </h4>
                        </div>
                        <div class="col-1 p-0">
                            <div class="d-flex align-items-center justify-content-center">
                                <a @click.prevent="$emit('pin-achievement', achievement)"
                                    class="">
                                    <img :src="achievement.pin ? '/images/waypoint-filled.png' : '/images/waypoint.png'"
                                        alt="" class="achieve-pin">
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-1"></div>

                        <div class="col-11 mb-2">
                            <p class="fs-5 body">{{ achievement.description }}</p>
                        </div>
                    </div>

                    <div class="row">

                        <div class="col-1"></div>

                        <div class="col-4">

                            <div class="row">
                                <div class="col-6 d-flex align-items-center justify-content-start">
                                    <span
                                        class="fs-5 mb-2 border border-0 border-bottom border-black me-2">{{
                                        achievement.increment }}
                                    </span>
                                    <p>time(s)</p>
                                </div>
                            </div>

                        </div>

                        <div class="col-6"></div>

                        <div class="col-1 p-0 d-flex align-items-center justify-content-start">
                            <button type="button" class="edit-btn"
                                @click="$emit('edit-achievement', achievement)"
                                data-bs-toggle="modal"
                                data-bs-target="#editAchievementModal">
                                <img src="/images/quill.png" alt="" class="achieve-quill">
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </li>
        

    `,
};

export default AchievementListItem;