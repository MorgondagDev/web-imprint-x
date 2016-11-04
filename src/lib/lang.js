var ISO6391 = require('../../node_modules/iso-639-1/')

const supportedLang = [
    'en',
    'sv'
]
let currentLang = 'en'

const isSupported = (lang) => {
    return supportedLang.indexOf(lang) > -1;
}

exports.setup = () => {
    let hasSet = false;

    if(typeof window == 'undefined'){
        return;
    }

    if(typeof window.localStorage == 'object'){
        let current = localStorage.getItem('preferedLang');
        if(current != null){
            if(typeof current == 'string'){
                if(current.length > 0){
                    currentLang = current;
                    hasSet = true;
                }
            }
        }
    }
    if (!hasSet) {
        if (typeof window.navigator.languages == 'object') {
            if (window.navigator.languages.length > 0) {
                for (var i = 0; i < window.navigator.languages.length; i++) {
                    if (isSupported(window.navigator.languages[i])) {
                        currentLang = window.navigator.languages[i];
                        hasSet = true;
                        break;
                    }
                }
            }
        }
    }
    if (!hasSet) {
        if (typeof window.navigator.language == 'string') {
            if (isSupported(window.navigator.language)) {
                currentLang = window.navigator.language;
            }
        }
    }
}

exports.currentLang = () => {
    return currentLang;
}

exports.supportedLang = () => {
    return supportedLang;
}

exports.changeLang = (newLang) => {
    currentLang = newLang
    localStorage.setItem('preferedLang', newLang);
}


exports.nativeLang = () =>{
    return ISO6391.getLanguages(supportedLang)
}


exports.t = (key) => {
	return translations[currentLang][key];
}

let translations = {
    en: {
        play: "Play Now!"
    },
    sv: {
        play: "Spela Nu!"
    }
}
