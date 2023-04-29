import './css/styles.css';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { fetchCountries } from './fetchCountries';
import { markupArray, markupCard } from './marckupCountries';

const DEBOUNCE_DELAY = 300;
const inputRef = document.querySelector('#search-box');
const countryListRef = document.querySelector('.country-list');
const countryCardRef = document.querySelector('.country-info');

inputRef.addEventListener('input', debounce(onInputChange, DEBOUNCE_DELAY));

function onInputChange(e
) {
    let searchQuery = e.target.value.trim();
    if (searchQuery === '') {
        countryListRef.innerHTML = '';
        countryCardRef.innerHTML = '';
        return
    }
    fetchCountries(searchQuery).then(data => {
        if (data.length > 10) { Notify.info("Too many matches found. Please enter a more specific name."); clearAll(); return}
        if (data.length === 1) { makeCard() ; return }
       makeList()
    }).catch(err => {
        clearAll;
        Notify.failure("Oops, there is no country with that name")
    });
}
function clearAll() {
    countryListRef.innerHTML = '';
    countryCardRef.innerHTML = '';

 }
function makeCard() { 
    countryListRef.innerHTML = ''; countryCardRef.innerHTML = `${markupCard(data)}`
}
function makeList() { countryCardRef.innerHTML = '';
        countryListRef.innerHTML = `${markupArray(data)}`;}