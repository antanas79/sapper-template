import { derived } from 'svelte/store';
import { dictionary, locale, _} from 'svelte-i18n';
import fetch from 'node-fetch';

 
const MESSAGE_FILE_URL_TEMPLATE = '/lang/{locale}.json';
 
let cachedLocale;
 
function setupI18n({ withLocale: _locale } = { withLocale: 'lt' }) {
    const messsagesFileUrl = MESSAGE_FILE_URL_TEMPLATE.replace('{locale}', _locale);
 
    return fetch(messsagesFileUrl)
        .then(response => response.json())
        .then((messages) => {
            dictionary.set({ [_locale]: messages });
            console.log(_locale)
            cachedLocale = _locale;
 
            locale.set(_locale);
        });
}
 
export { _, locale, setupI18n };