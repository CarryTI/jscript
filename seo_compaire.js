import axios from "axios";
import {JSDOM} from "jsdom";
import fs from 'fs'
import {defaults, link, openGraph, twitter} from "./static/selectors.js";
import {get} from "jsdom/lib/jsdom/named-properties-tracker.js";

async function toStage(url){
    url = url.replace('https://', 'http://');
    url = url.replace('obozrevatel.com', 'oboz.news');

    return url;

}

export async function changeLang(url) {

    let document = await getDocument(url);

    if (url.includes('/ukr/'))
        return document.querySelector(link.alternateRu).getAttribute('href');
    else
        return document.querySelector(link.alternateUkr).getAttribute('href');
}

export async function compaire(url){
    let stageURL = await toStage(url);

    let document = await getDocument(url);
    let stageDocument = await getDocument(stageURL);

    let row = await generateSeoRow(document);
    let stageRow = await generateSeoRow(stageDocument);

    console.log(url);
    for (let i in row)
        if (row[i] !== stageRow[i] && await toStage(row[i]) !== stageRow[i]){
            console.log(`${row[i]} != ${stageRow[i]}`)
        }
    console.log('\n')
}

async function generateSeoRow(document) {

    let row = []

    for (let selector in defaults){
        let tag = document.querySelector(defaults[selector])
        if (selector === 'title') row.push(tag.textContent);
        else row.push(tag.getAttribute('content'));
    }

    for (let selector in openGraph){
        let tag = document.querySelector(openGraph[selector])
        row.push(tag.getAttribute('content'));
    }

    for (let selector in twitter){
        let tag = document.querySelector(twitter[selector])
        row.push(tag.getAttribute('content'));
    }

    for (let selector in link){
        let tag = document.querySelector(link[selector])
        row.push(tag.getAttribute('href'));
    }

    return row;

}

async function getDocument(url) {
    const response = await axios.get(url);
    const dom = new JSDOM(response.data);
    return dom.window.document;
}

export async function generateSeoTable(urls) {
    let table = []

    for (let url of urls) {
        let document = await getDocument(url);
        let row = await generateSeoRow(document);
        table.push(row);
    }

    return table
}

export async function generateCSV(table) {
    let file = fs.createWriteStream('table.csv');

    for (let row of table) {
        for (let item of row){
            item = item.replaceAll(',', '.');
            file.write(item + ',');
        }
            file.write('\n');
    }
}
