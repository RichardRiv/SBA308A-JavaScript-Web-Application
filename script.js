import { URL } from './api.js';

const searchAnimeForm = document.querySelector('#searchAnimeForm');
const searchInput = searchAnimeForm.elements.searchInput;
const searchBtn = searchAnimeForm.elements.searchBtn;

const initialLoad = async () => {
	const response = await fetch(`${URL}/anime`);
	const result = await response.json();
	const data = result.data;

	console.log(data);
	const animeBox = document.querySelector('#animeBox');
	const frag = document.createDocumentFragment();
	data.forEach((anime) => {
		const divEl = document.createElement('div');
		divEl.style.width = '225px';
		divEl.style.display = 'flex';
		divEl.style.flexDirection = 'column';
		divEl.style.gap = '5px';

		const pEl = document.createElement('p');
		pEl.textContent = anime.title;
		pEl.style.width = '100%';
		pEl.style.overflow = 'hidden';
		pEl.style.textOverflow = 'ellipsis';
		pEl.style.display = '-webkit-box';
		pEl.style.webkitLineClamp = 2;
		pEl.style.webkitBoxOrient = 'vertical';

		const imgEl = document.createElement('img');
		imgEl.src = anime.images.jpg.image_url;
		imgEl.alt = anime.title;
		imgEl.style.width = '100%';
		imgEl.style.height = '320px';
		imgEl.style.objectFit = 'cover';
		imgEl.style.borderRadius = '5px';

		divEl.appendChild(imgEl);
		divEl.appendChild(pEl);
		frag.appendChild(divEl);
	});
	animeBox.appendChild(frag);
};
initialLoad();

const searchAnime = (e) => {
	e.preventDefault();
	console.log(searchInput.value);
};

searchAnimeForm.addEventListener('submit', searchAnime);
