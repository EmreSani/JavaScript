// Harici ülke listesi datasını alarak bir select içinde ülkeleri gösteriniz.

import {countries} from "../data/countries.js";

console.log(countries[227].name.common); // Turkey

const setOptions = ()=>{

    let options = `<option>${countries[227].name.common}</option>`;
    for(let country of countries){
        console.log(country.name.common);
        options += `<option>${country.name.common}</option>`;
    }

    selectCountries.innerHTML = options;
}

setOptions();

