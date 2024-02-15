`use strict`;

function Country(title, capital, population, area) {
  this.title = title;
  this.capital = capital;
  this.population = `${population} millions`;
  this.area = `${area} km2`;
  this.showCountry = function () {
    return `title = ${title}, capital = ${capital}, population = ${population}, area = ${area}`;
  };
}

const Ukraine = new Country('Ukraine', 'Kyiv', '29', '603 628');

const Germany = new Country('Germany', 'Berlin', '83.2', '357 592');

function showCountryKeys(objectCountry) {
  for (let key in objectCountry) {
    if (typeof objectCountry[key] === 'string') {
      console.log(`${key}: ${objectCountry[key]}`);
    }
  }
}
showCountryKeys(Ukraine);
