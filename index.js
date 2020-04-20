


let app = new Vue({
    el: document.querySelector("#app"),
    data: {
        DATA: DATA,
        currentTranslation: "fr",
    },
    computed: {
        data: function () {
            return this.DATA[this.currentTranslation];
        }
    },
    methods: {
        changeTranslation: function (translation) {
            this.currentTranslation = translation;
        }
    },
});


