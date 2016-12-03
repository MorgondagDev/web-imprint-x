var ISO6391 = require('../../node_modules/iso-639-1/')

import en from '../lang/en.js'
import sv from '../lang/sv.js'
import ru from '../lang/ru.js'
import no from '../lang/no.js'
import pt from '../lang/pt.js'
import da from '../lang/da.js'
import es from '../lang/es.js'
import fr from '../lang/fr.js'
import it from '../lang/it.js'
import nl from '../lang/nl.js'
import zh from '../lang/zh.js'
import fi from '../lang/fi.js'
import uk from '../lang/uk.js'
import pl from '../lang/pl.js'
import de from '../lang/de.js'

let translations = {
    en: en.lang,
    sv: sv.lang,
    no: no.lang,
    ru: ru.lang,
    pt: pt.lang,
    da: da.lang,
    es: es.lang,
    fr: fr.lang,
    it: it.lang,
    nl: nl.lang,
    zh: zh.lang,
    fi: fi.lang,
    uk: uk.lang,
    pl: pl.lang,
    de: de.lang
}

const supportedLang = [
    'en',
    'sv',
    'no',
    'ru',
    'pt',
    'da',
    'es',
    'fr',
    'it',
    'nl',
    'zh',
    'fi',
    'uk',
    'pl',
    'de'
]

let currentLang = 'en'

const isSupported = (lang) => {
    return supportedLang.indexOf(lang) > -1;
}

function getParameterByName(name, url) {
    if (!url) {
      url = window.location.href;
    }
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}


exports.setup = () => {
    let hasSet = false;

    if(typeof window == 'undefined'){
        return;
    }

    let queryLang = getParameterByName('lang');

    if(typeof queryLang !== 'undefined'){
        if(isSupported(queryLang)){
            currentLang = queryLang;
            hasSet = true;
        }
    }

    if (!hasSet) {
        if(typeof window.localStorage == 'object'){
            let current = localStorage.getItem('preferedLang');
            if(current != null){
                if(typeof current == 'string'){
                    if(current.length > 0){
                        currentLang = current;
                        hasSet = true;
                        window.history.pushState('pizza', 'imprint-X', '/?lang='+currentLang)
                    }
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
                        window.history.pushState('pizza', 'imprint-X', '/?lang='+currentLang)
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
                window.history.pushState('pizza', 'imprint-X', '/?lang='+currentLang)
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
    window.history.pushState('pizza', 'imprint-X', '/?lang='+newLang)
}


exports.nativeLang = () =>{
    return ISO6391.getLanguages(supportedLang)
}


exports.t = (key) => {
	return translations[currentLang][key];
}

