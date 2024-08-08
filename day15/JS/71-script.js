// Harici ülke listesi datasını alarak bir select içinde ülkeleri gösteriniz.

import {countries} from "../../day14/data/countries.js";

console.log(countries[227].name.common); // Turkey

const setOptions = ()=>{

    let options = `<option>${countries[227].name.common}</option>`;
    for(let country of countries){
        // console.log(country.name.common);
        options += `<option value="${country.ccn3}">${country.name.common}</option>`;
    }

    selectCountries.innerHTML = options;
}

setOptions();

// getCountry function

const getCountry = (code)=>{

    let filteredCountry = countries.filter((country)=>country.ccn3 == code);

    /*
    console.log(filteredCountry[0].capital.join(" - ")); // Oranjestad
    console.log(Object.keys(filteredCountry[0].currencies).join(" - ")); // AWG
    console.log(Object.values(filteredCountry[0].languages).join(" - ")); // Dutch - Papiamento
    console.log(filteredCountry[0].area); // 180
    console.log(filteredCountry[0].latlng); //  [12.5, -69.96666666]
    */

    return filteredCountry[0];
}

getCountry(533);

// fillTable function

const fillTable = (country)=>{

    let capitalCity = country.capital.join(" - ");
    let currency = Object.keys(country.currencies).join(" - ");
    let language = Object.values(country.languages).join(" - ");
    let area = country.area;
    let mapLink = `<a href="http://maps.google.com/?q=${country.latlng}" target="_blank">Go To Map</a>`;

    document.querySelector("#tableCountries tr:nth-child(1) td").innerHTML = capitalCity;
    document.querySelector("#tableCountries tr:nth-child(2) td").innerHTML = currency;
    document.querySelector("#tableCountries tr:nth-child(3) td").innerHTML = language;
    document.querySelector("#tableCountries tr:nth-child(4) td").innerHTML = area;
    document.querySelector("#tableCountries tr:nth-child(5) td").innerHTML = mapLink;

}

fillTable(getCountry(792));

// Seçilen ülke değrine göre tabloyu doldurma

selectCountries.onchange = (event)=>{
    let countryCode = event.target.value;
    let country = getCountry(countryCode);
    fillTable(country);
}









