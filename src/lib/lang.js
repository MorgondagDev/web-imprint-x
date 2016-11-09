var ISO6391 = require('../../node_modules/iso-639-1/')

const supportedLang = [
    'en'
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
        play: "Play Now!",
        slogan: "A casual puzzle game containing 700 buttons to press and 100 levels to unlock!",
        maintext1: "A robotic virus is raging! Nano Bots called Wardens are enslaving people! You are one of the hacker clones, saving intellects by hacking into infected brains and defeating the mysterious Wardens; figuring out their correct button sequences.",
        maintext2: "There are 100 Wardens for you to defeat, containing a mixture of timing, memory and pattern recognition button-based puzzles."
    },
    sv: {
        play: "Spela Nu!",
        slogan: "Ett pusselspel som innehåller 700 knappar att trycka och 100 nivåer för att låsa upp!",
        maintext1:"En robot virus rasar! Nano Bots kallas Wardens är enslaving människor! Du är en av de hacker-kloner, spara intellekt genom att hacka in infekterade hjärnor och besegra mystiska Wardens; räkna ut deras rätt knapp sekvenser.",
        maintext2:"Det finns 100 Wardens för dig att besegra, som innehåller en blandning av timing, minne och mönsterigenkänning knapp baserade pussel."

    }
}
