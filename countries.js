const countryData = ()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data =>displayCountry(data))

}

const displayCountry = countries=>{
    const countriesContainer = document.getElementById('country-container');
    countries.forEach(country=>{
        console.log(country)
    const countrydiv = document.createElement('div');
    countrydiv.classList.add('countrylist');
    
      countrydiv.innerHTML=  `<h1>Country: ${country.name.common}</h1>
      <h3>Capital: ${country.capital ? country.capital[0]:'no capital'}</h3>
      <button onClick="displayCountryDetails('${country.cca2}')">See Country Flag</button>`;

        countriesContainer.appendChild(countrydiv);
    })
    
   
}

const displayCountryDetails = chode =>{
    const url = `https://restcountries.com/v3.1/alpha/${chode}`
    console.log(url)
    fetch(url)
    .then(res=>res.json())
    .then(data=> showcountryflag(data[0]))
}

const showcountryflag = country =>{
    const detailcontainer = document.getElementById('country-flag')
    detailcontainer.innerHTML = `
    <h3>Name:${country.name.common} </h3>
    <img src="${country.flags.png}">
    `
}

countryData();