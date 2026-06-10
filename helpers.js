const populateResults = (data) => {
	const animeBox = document.querySelector('#animeBox');
	const frag = document.createDocumentFragment();

	data.forEach((anime) => {
		const divEl = document.createElement('div');
		divEl.classList.add('card');

		const imgEl = document.createElement('img');
		imgEl.src = anime.images.jpg.image_url;
		imgEl.alt = anime.title_english;
		imgEl.classList.add('card-img');

		const pEl = document.createElement('p');
		pEl.textContent = anime.title;
		pEl.classList.add('card-title');

		divEl.appendChild(imgEl);
		divEl.appendChild(pEl);
		frag.appendChild(divEl);
	});

	animeBox.appendChild(frag);
};

export { populateResults };
