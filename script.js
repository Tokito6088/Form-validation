const input = document.querySelector('input');
const eye = document.querySelector('#eye');
const listitem = document.querySelectorAll('ul li');

const stage = [
	{ regex: /.{8,}/, index: 0 },
	{ regex: /[0-9]/, index: 1 },
	{ regex: /[a-z]/, index: 2 },
	{ regex: /[^A-Za-z0-9]/, index: 3 },
	{ regex: /[A-Z]/, index: 4 },
];
input.addEventListener('keyup', (e) => {
	stage.forEach((item) => {
		const invalid = item.regex.test(e.target.value);
		const list = listitem[item.index];
		if (invalid) {
			list.firstElementChild.className = 'fa-solid fa-check';
			list.classList.add('valid');
		} else {
			list.firstElementChild.className = 'fa-solid fa-circle';
			list.classList.remove('valid');
		}
	});
});

eye.addEventListener('click', () => {
	input.type = input.type === 'password' ? 'text' : 'password';
	eye.className = `fa-solid fa-eye${input.type === 'password' ? '' : '-slash'}`;
});
