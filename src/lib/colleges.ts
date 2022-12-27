export const collegeToImage = {
	'Benjamin Franklin': 'https://i.imgur.com/5LGFYXT.png',
	Berkeley: 'https://i.imgur.com/lIwkjK4.png',
	Branford: 'https://i.imgur.com/Q7JeCCL.png',
	Davenport: 'https://i.imgur.com/IZWKoLd.png',
	'Ezra Stiles': 'https://i.imgur.com/s1VjYG4.png',
	'Grace Hopper': 'https://i.imgur.com/jKe7kLj.png',
	'Jonathan Edwards': 'https://i.imgur.com/FmywKDR.png',
	Morse: 'https://i.imgur.com/chwUE5a.png',
	'Pauli Murray': 'https://i.imgur.com/pMEXfFk.png',
	Pierson: 'https://i.imgur.com/e7DlOO9.png',
	Saybrook: 'https://i.imgur.com/mlgjdon.png',
	Silliman: 'https://i.imgur.com/8F8bntY.png',
	'Timothy Dwight': 'https://i.imgur.com/eiBFuvo.png',
	Trumbull: 'https://i.imgur.com/ykuMs9b.png'
	// "https://i.imgur.com/jzDlVug.png"
};

export type College = keyof typeof collegeToImage;

export const colleges = [
	'Benjamin Franklin',
	'Berkeley',
	'Branford',
	'Davenport',
	'Ezra Stiles',
	'Grace Hopper',
	'Jonathan Edwards',
	'Morse',
	'Pauli Murray',
	'Pierson',
	'Saybrook',
	'Silliman',
	'Timothy Dwight',
	'Trumbull'
] as const;
