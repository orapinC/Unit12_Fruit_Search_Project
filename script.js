const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

//match user's input with fruits[] & return results[]
function search(str) {
	let results = [];
	return fruit.filter(function(value,index,results) {
		if ((value.toLowerCase()).includes(str.toLowerCase())){
			return results;
		}
	});
}

// handle user input in search bar
function searchHandler(e) {
	e.preventDefault();
	const strInput = e.target.value;
	//match user's input(strInput) with data in an existing database
	const results = search(strInput);
	//display list of matched string as suggestion
	showSuggestions(results,strInput);
	// propagate search box & clear suggestions list
	useSuggestion(results);
}

//display matched-string as limited list of suggestions of 5 or less
function showSuggestions(results, inputVal) {
//clear previous suggestions
suggestions.innerText = '';
//create drop down menu with the limited items of 20 or less
results.forEach((result) =>{
	const list = document.createElement('li');
	list.innerText = result;
	suggestions.appendChild(list);
});
}

// propagate box with the selected option & clear suggestion list
function useSuggestion(e) {
	input.value = e.target.innerText;
	suggestions.innerText = '';
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);