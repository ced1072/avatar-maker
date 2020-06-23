let noseAreaSelector = document.querySelectorAll("[id^='nose-']");

const classesToRemove = new RegExp(/skin|bg|border|hair|shirt|eyeball/, 'gi');

let classEraser = (element) => {
	if (element.className.match(classesToRemove)) {
		element.className = element.className.replace(classesToRemove, '');
	}
};

let classRemoverFunc = () => {
	for (let i = 0; i < noseAreaSelector.length; i++) {
		classEraser(noseAreaSelector[i]);
	}
};

let noseFunctions = {
	noseTypeI: () => {
		classRemoverFunc();
		noseAreaSelector[0].className += 'skin';
		noseAreaSelector[1].className += 'skin';
		noseAreaSelector[2].className += 'skin';
		noseAreaSelector[3].className += 'skin';
		noseAreaSelector[4].className += 'skin';
		noseAreaSelector[5].className += 'border';
		noseAreaSelector[6].className += 'skin';
		noseAreaSelector[7].className += 'skin';
		noseAreaSelector[8].className += 'skin';
		noseAreaSelector[9].className += 'border';
		noseAreaSelector[10].className += 'border';
		noseAreaSelector[11].className += 'skin';
	},
	noseTypeII: () => {
		//remove existing classes
		classRemoverFunc();
		noseAreaSelector[0].className += 'skin';
		noseAreaSelector[1].className += 'skin';
		noseAreaSelector[2].className += 'skin';
		noseAreaSelector[3].className += 'skin';
		noseAreaSelector[4].className += 'skin';
		noseAreaSelector[5].className += 'skin';
		noseAreaSelector[6].className += 'border';
		noseAreaSelector[7].className += 'skin';
		noseAreaSelector[8].className += 'skin';
		noseAreaSelector[9].className += 'border';
		noseAreaSelector[10].className += 'border';
		noseAreaSelector[11].className += 'skin';
	},
	noseTypeIII: () => {
		classRemoverFunc();
		noseAreaSelector[0].className += 'skin';
		noseAreaSelector[1].className += 'skin';
		noseAreaSelector[2].className += 'skin';
		noseAreaSelector[3].className += 'skin';
		noseAreaSelector[4].className += 'skin';
		noseAreaSelector[5].className += 'skin';
		noseAreaSelector[6].className += 'skin';
		noseAreaSelector[7].className += 'skin';
		noseAreaSelector[8].className += 'skin';
		noseAreaSelector[9].className += 'border';
		noseAreaSelector[10].className += 'border';
		noseAreaSelector[11].className += 'skin';
	},
	noseTypeIV: () => {
		classRemoverFunc();
		noseAreaSelector[0].className += 'skin';
		noseAreaSelector[1].className += 'skin';
		noseAreaSelector[2].className += 'skin';
		noseAreaSelector[3].className += 'skin';
		noseAreaSelector[4].className += 'skin';
		noseAreaSelector[5].className += 'border';
		noseAreaSelector[6].className += 'skin';
		noseAreaSelector[7].className += 'border';
		noseAreaSelector[8].className += 'skin';
		noseAreaSelector[9].className += 'border';
		noseAreaSelector[10].className += 'border';
		noseAreaSelector[11].className += 'skin';
	},
	noseTypeV: () => {
		classRemoverFunc();
		noseAreaSelector[0].className += 'skin';
		noseAreaSelector[1].className += 'skin';
		noseAreaSelector[2].className += 'skin';
		noseAreaSelector[3].className += 'skin';
		noseAreaSelector[4].className += 'border';
		noseAreaSelector[5].className += 'skin';
		noseAreaSelector[6].className += 'skin';
		noseAreaSelector[7].className += 'border';
		noseAreaSelector[8].className += 'border';
		noseAreaSelector[9].className += 'border';
		noseAreaSelector[10].className += 'border';
		noseAreaSelector[11].className += 'border';
	}
};

// event listeners
let noseTypeIBtn = document.getElementById('noseI');
noseTypeIBtn.addEventListener('click', noseFunctions.noseTypeI);

let noseTypeIIBtn = document.getElementById('noseII');
noseTypeIIBtn.addEventListener('click', noseFunctions.noseTypeII);

let noseTypeIIIBtn = document.getElementById('noseIII');
noseTypeIIIBtn.addEventListener('click', noseFunctions.noseTypeIII);

let noseTypeIVBtn = document.getElementById('noseIV');
noseTypeIVBtn.addEventListener('click', noseFunctions.noseTypeIV);

let noseTypeVBtn = document.getElementById('noseV');
noseTypeVBtn.addEventListener('click', noseFunctions.noseTypeV);
