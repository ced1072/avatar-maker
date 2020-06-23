let eyeAreaSelector = document.querySelectorAll("[id^='eye-']");

/* The functions eyeClassEraser and eyeClassRemoverFunc are the same as the functions declared in 
 the nose test File, for now we can repeat the functions to make it clear, but when we are reaching
 the end, or when we feel more comfortable we can make a file that contains all the repeated functions
 and make the code more dry*/

/*the variable classesToRemove comes from the avatartest1nose.js file. Because we are linking it together in the html file
we can actually use variables and functions declared in other js files, as long as the file that we are 
referencing is located first in order in the html file we can use its content*/
let eyeClassEraser = (element) => {
	if (element.className.match(classesToRemove)) {
		element.className = element.className.replace(classesToRemove, '');
	}
};

let eyeClassRemoverFunc = () => {
	for (let i = 0; i < eyeAreaSelector.length; i++) {
		classEraser(eyeAreaSelector[i]);
	}
};

//-------------------------------------------------------
let eyeFunctions = {
	eyeTypeI: () => {
		eyeClassRemoverFunc();
		eyeAreaSelector[0].className += 'border';
		eyeAreaSelector[1].className += 'border';
		eyeAreaSelector[2].className += 'border';
		eyeAreaSelector[3].className += 'border';
		eyeAreaSelector[4].className += 'border';
		eyeAreaSelector[5].className += 'border';
		eyeAreaSelector[6].className += 'skin';
		eyeAreaSelector[7].className += 'border';
		eyeAreaSelector[8].className += 'skin';
		eyeAreaSelector[9].className += 'skin';
		eyeAreaSelector[10].className += 'border';
		eyeAreaSelector[11].className += 'skin';
	},
	eyeTypeII: () => {
		eyeClassRemoverFunc();
		eyeAreaSelector[0].className += 'border';
		eyeAreaSelector[1].className += 'border';
		eyeAreaSelector[2].className += 'border';
		eyeAreaSelector[3].className += 'border';
		eyeAreaSelector[4].className += 'border';
		eyeAreaSelector[5].className += 'border';
		eyeAreaSelector[6].className += 'eyeball';
		eyeAreaSelector[7].className += 'border';
		eyeAreaSelector[8].className += 'eyeball';
		eyeAreaSelector[9].className += 'eyeball';
		eyeAreaSelector[10].className += 'border';
		eyeAreaSelector[11].className += 'eyeball';
	}
};

let eyeTypeIBtn = document.getElementById('eyeI');
eyeTypeIBtn.addEventListener('click', eyeFunctions.eyeTypeI);

let eyeTypeIIBtn = document.getElementById('eyeII');
eyeTypeIIBtn.addEventListener('click', eyeFunctions.eyeTypeII);
