export function markupArray(array) {
    return stingsArray = array.map(e => 
    {
        return `<li class="listEl"><img height="25" src=${e.flags.svg}> <p class="listText">${e.name.official}</p></li>`
    }).join('')
}

export function markupCard(e) {
        return ` <div class="cardEl"><img height="50" src=${e[0].flags.svg}><p class="cardText">${e[0].name.official}</p><p class="cardText">capital: ${e[0].capital}</p><p class="cardText">languages: ${e[0].languages}</p><p class="cardText">population: ${e[0].population}</p></div> `
}