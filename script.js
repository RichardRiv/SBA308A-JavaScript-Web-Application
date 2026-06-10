import { URL } from './api.js';
import { populateResults } from './helpers.js';

const searchAnimeForm = document.querySelector('#searchAnimeForm');
const searchInput = searchAnimeForm.elements.searchInput;
const searchBtn = searchAnimeForm.elements.searchBtn;

const initialLoad = async () => {
	const response = await fetch(`${URL}/anime`);
	const result = await response.json();
	const data = result.data;

	// console.log(data);
	populateResults(data);
};
initialLoad();

const searchAnime = async (e) => {
	e.preventDefault();

	if (!searchInput.value) return;
	const searchVal = encodeURI(searchInput.value);

	const response = await fetch(`${URL}/anime?q=${searchVal}&limit=24`);
	const result = await response.json();
	const data = result.data;

	console.log(data);
	populateResults(data);
};

searchAnimeForm.addEventListener('submit', searchAnime);
