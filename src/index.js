import './css/styles.css';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';
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
        if (data.length > 10) { Notiflix.Notify.warning("Too many matches found. Please enter a more specific name."); }
        else if (data.length === 1) { countryCardRef.innerHTML = `${markupCard(data)}`; countryListRef.innerHTML = ''}
        else { countryListRef.innerHTML = `${markupArray(data)}`; countryCardRef.innerHTML = ''}
    } ).catch(err => Notiflix.Notify.failure("Oops, there is no country with that name"));
}


