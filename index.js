


let app = new Vue({
    el: document.querySelector("#app"),
    data: {
        DATA: DATA,
        currentTranslation: Object.keys(DATA)[0],
    },
    computed: {
        data: function () {
            return this.DATA[this.currentTranslation];
        },
        skills: function () {
            let skills = [];
            for (let catKey in this.data.skills.data){
                for (let key in this.data.skills.data[catKey]) {
                    if (key === "name") continue;
                    skills.push(this.data.skills.data[catKey][key]);
                }
            }
            return skills;
        }
    },
    methods: {
        changeTranslation: function (translation) {
            this.currentTranslation = translation;
        },
    },
});




