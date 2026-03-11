const AppModal = {

    name: 'AppModal',

    data: function(){
        return {
            bsModal: null,
            id: 'modal' + crypto.randomUUID(), 
        }
    },


    props: {        
        title : { type: String, default: 'Modal Title'},

    },

    emits: ['submit'],

    methods: {
        open() {
            this.bsModal.show();
        },
        close() {
            this.bsModal.hide();
        },

    },


    computed: {

    },

    template: `
        <teleport to="body">
            <div class="modal fade" ref="modal" tabindex="-1" role="dialog" :aria-labelledby="id + 'modalTitle'"
                aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <form @submit.prevent="$emit('submit')">
                        <div class="modal-content parchment-background border border-black rounded-0">
                            <div class="modal-header border border-black rounded-0">
                                <slot name="header">
                                    <h5 class="modal-title text-center" :id="id + 'modalTitle'">{{ title }}</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </slot>
                            </div>
                            <div class="modal-body border border-black">
                                <slot></slot>
                            </div>
                            <div class="modal-footer border border-black rounded-0">
                                <slot name="footer">
                                    <button type="button" class="btn submit-btn" data-bs-dismiss="modal">Close</button>
                                </slot>                                
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </teleport>

    `,
};

export default AppModal;
