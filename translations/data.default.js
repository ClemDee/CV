
// DATA object is a proxy
// each time we add a new translation (e.g: DATA.en = {...})
// it automatically merge it with the default data
// so that we don't have to re-write constant data in each translation file
let DATA = new Proxy({}, {
    // recursive function to merge the translation and the default one together
    _importTranslation (data, defaultData) {
        for (let key in data) {
            if (typeof data[key] === "object" && typeof defaultData[key] === "object") {
                data[key] = this._importTranslation(data[key], defaultData[key]);
            }
        }
        return Object.assign(data instanceof Array ? [] : {}, defaultData, data);
    },

    set (DATA, translation, data) {
        // if there is no default, also set data as default
        if (!DATA.default) {
            // we set default value not enumerable
            // because we don't want the user to be able to set the default translation
            // so we don't want to access this property with DATA.keys
            return Reflect.set(DATA, translation, data) &&
            Reflect.defineProperty(DATA, "default", {
                enumerable: false,
                value: data,
            });
        }
        // else merge data with default
        return Reflect.set(DATA, translation, this._importTranslation(data, DATA.default));
    },
});



DATA.default = {

    title: undefined,

    coordinates: {
        name: "Clément Desableau",
        age: undefined,
        nationnality: undefined,
        address: "31 Boulevard d'Andilly",
        city: "95230 Soisy-sous-Montmorency",
        country: undefined,
        email: "clement.desableau@gmail.com",
        phone: "07 80 09 54 70",
        linkedin: "Clément Desableau",
        github: "ClemDee",
    },

    objective: {
        title: undefined,
        content: undefined,
    },

    hobbies: {
        title: undefined,
        content: undefined,
    },

    languages: {
        title: undefined,
        data: [
            /*{
                name: undefined,
                level: undefined,
            },*/
        ],
    },

    education: {
        title: undefined,
        data: [
            /*{
                title: undefined,
                date: undefined,
                location: undefined,
                description: undefined,
            },*/
        ],
    },

    experience: {
        title: undefined,
        data: [
            /*{
                title: undefined,
                date: undefined,
                location: undefined,
                description: undefined,
            },*/
        ],
    },


    skills: {
        title: undefined,
        data: {
            "front": {
                name: "Front-end",
                "html": {name: "HTML 5", level: 95},
                "css": {name: "CSS 3", level: 95},
                "javascript": {name: "Javascript", level: 95},
                "responsiveDesign": {name: "Responsive design", level: 90},
            },
            frameworks: {
                name: "Frameworks / Libraries",
                "jquery": {name: "JQuery", level: 80},
                "bootstrap": {name: "Bootstrap", level: 70},
                "vuejs": {name: "Vue.js", level: 70},
            },
            "back": {
                name: "Back-end",
                "nodejs": {name: "Node.js", level: 75},
                "php": {name: "PHP", level: 75},
                "jee": {name: "JEE", level: 65},
            },
            "sgbd": {
                name: "SGBD",
                "mysql": {name: "MySql", level: 75},
                "oracleSql": {name: "Oracle SQL", level: 70},
            },
            "lowLevel": {
                name: "Low-level Programming",
                "c": {name: "C", level: 80},
            },
            "oop": {
                name: "Object Oriented Programming",
                "cpp": {name: "C++", level: 85},
                "csharp": {name: "C#", level: 65},
                "java": {name: "Java", level: 75},
                "python": {name: "Python", level: 80},
            },
            "functionalProgramming": {
                name: "Functionnal Programming",
                "ocaml": {name: "Ocaml", level: 70},
            },
            "other": {
                name: "Other skills",
                "shell": {name: "POSIX Shell", level: 70},
            },
        },

        os: {
            title: undefined,
            data: [
                "Windows 10",
                "GNU/Linux (Ubuntu)"
            ],
        },

        softwares: {
            title: undefined,
            data: [
                "Microsoft Office",
                "Libre Office",
                "VIM",
                "Git",
                "Eclipse",
                "StarUML"
            ],
        },
    },


};