import {changeLang, compaire, generateCSV, generateSeoTable} from "./seo_compaire.js";

let urls = [
    'https://news.obozrevatel.com/abroad/soratnik-merkel-vyistupil-za-zapusk-severnogo-potoka-2.htm',
    'https://covid.obozrevatel.com/hronika-koronavirusa-na-23-sentyabrya-za-sutki-zaboleli-bolee-500-tyisyach-chelovek.htm',
    'https://incident.obozrevatel.com/crime/pokushenie-na-sergeya-shefira-eto-popyitka-politicheskogo-ubijstva-valerij-kur.htm',
    'https://soc.obozrevatel.com/v-reke-na-hmelnitchine-massovo-gibnet-ryiba-na-vode-zametili-pyatna-masla-i-zapah-ammiaka-foto.htm',
    'https://astro.obozrevatel.com/news/pyat-znakov-zodiaka-legko-dostigayut-uspeha-oni-imeyut-dengi-i-vliyanie.htm',
    'https://hub.obozrevatel.com/v-kieve-otkryili-kazino-shangri-la-i-anonsirovali-novuyu-lokatsiyu.htm',
    'https://www.obozrevatel.com/odesa/v-odesskoj-oblasti-pronessya-pyilevoj-dyavol-prirodnoe-yavlenie-popalo-na-video.htm',
    'https://healthnews.obozrevatel.com/pojdem-k-zdorovyu-kakie-problemyi-pomozhet-reshit-hodba.htm',
    'https://hot.obozrevatel.com/show/paparazzi/megan-foks-i-kortni-kardashyan-snyalis-toples-v-goryachej-fotosessii.htm',
]

let ukr_urls = []
for (let url of urls) {
    ukr_urls.push(await changeLang(url));

}

urls.push(...ukr_urls);
let table = await generateSeoTable(urls);
await generateCSV(table);
