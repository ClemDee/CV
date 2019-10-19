
// change translation language
let changeTranslation = function (translation) {
    document.querySelector(".translation.current").classList.remove("current");
    document.querySelector(`.translation.${translation}`).classList.add("current");
    Vue.set(vueData, "DATA", DATA[translation]);
}

for (let translation in DATA) {
    let div = document.createElement("div");
    div.className = `translation ${translation}`;
    div.innerText = translation;
    div.onclick = () => changeTranslation(translation);
    document.querySelector(".translation-menu").appendChild(div);
}



// create vue objects
let vueData = {};
let autoVue = function (element) {
    element.removeAttribute("v-auto");
    new Vue({
        el: element,
        data: vueData,
    });
}

data = DATA.fr;
vueData.DATA = data;
document.querySelector(".translation.fr").classList.add("current");
Array.prototype.forEach.call(document.querySelectorAll("[v-auto]"), autoVue);


