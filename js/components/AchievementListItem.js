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
                        <div class="col-1 p-0">
                            <div class="h-100 d-flex align-items-center justify-content-center">
                                <input class="form-check-input checkbox" type="checkbox"
                                    v-model="achievement.complete"
                                    :checked="achievement.complete"
                                    :id="'achievementCheck' + achievement.name" value=""
                                    aria-label="...">
                            </div>
                        </div>
                        <div class="col-10">
                            <h4 class="fs-3">
                                {{ achievement.name }} <i class="btn-icon"
                                    :class="achievement.favorite ? 'bi bi-star-fill' : 'bi bi-star'"
                                    @click.prevent="$emit('favorite-achievement', achievement)"></i>
                            </h4>
                        </div>
                        <div class="col-1 p-0">
                            <div class="d-flex align-items-center justify-content-end">
                                <a @click.prevent="$emit('pin-achievement', achievement)"
                                    class="d-flex align-items-center justify-content-end">
                                    <img :src="achievement.pin ? '/images/waypoint-filled.png' : '/images/waypoint.png'"
                                        alt="" class="achieve-pin">
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-1"></div>

                        <div class="col-11 mb-2">
                            <div>{{ achievement.description }}</div>
                        </div>
                    </div>

                    <div class="row">

                        <div class="col-1"></div>

                        <div class="col-4">

                            <div class="row">
                                <div class="col-6 d-flex align-items-center justify-content-center">
                                    <span
                                        class="fs-2 mb-2 border border-0 border-bottom border-black me-2">{{
                                        achievement.increment }}
                                    </span>
                                    <p>time(s)</p>
                                </div>
                                <div class="col-3 d-flex align-items-center justify-content-center p-0">
                                    <button class="btn btn-sm btn-dark increment-btn"
                                        @click="achievement.increment++"><i
                                            class="bi bi-plus-lg"></i>
                                    </button>

                                </div>
                                <div class="col-3 d-flex align-items-center p-0">
                                    <button class="btn btn-sm increment-btn"
                                        @click="achievement.increment > 0 ? achievement.increment-- : 0"><i
                                            class="bi bi-dash-lg text-dark"></i>
                                    </button>
                                </div>
                            </div>

                        </div>

                        <div class="col-5"></div>

                        <div class="col-1 d-flex align-items-center justify-content-end">
                            <button type="button" class="edit-btn"
                                data-bs-toggle="modal"
                                data-bs-target="#editAchievementModal">
                                <img src="/images/quill.png" alt="" class="quill-img">
                            </button>
                        </div>

                        <div
                            class="col-1 d-flex align-items-center justify-content-end">
                            <a class=""
                                @click="$emit('delete-achievement', achievement )"><i
                                    class="fs-2 btn-icon bi bi-trash2-fill"></i>
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </li>
        

    `,
};

export default AchievementListItem;