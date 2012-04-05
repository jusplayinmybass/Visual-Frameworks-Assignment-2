window.addEventListener("DOM ContentLoaded", function(){
	function $ (x){
		var theElement = document.getElementByID(x);
		return theElement;
	}
	
	function makeTitle(){
		var formTag = document.getElementsByTagNames("form"),
		selectLi = $('select'),
		makeSelect = document.createElement('select');
		makeSelect.setAttribute("id", "titles");
		for(var i=0, j=titleGroup.length; i<j; i++){
			var makeOption = document.createElement('option');
			var optText = titleGroup[i];
			makeOption.setAttribute("value", optText);
			makeOption.innerHTML = optText; 
			makeTitle.appendChild(makeOption)
		}
		 selectLi.appendChild();
	};
	var titleGroup = ["--Choose a Title--", "Ms.", "Mrs.", "Mr."];
	makeTitle();
	
	var displayLink = $('view information');
	displayLink.addEventListener("click", getData);
	var clearLink = $('clear form');
	clearLink.addEventListener("click", clearLocal);
	var save = $ ('submit');
	save.addEventListener = $("click", saveData);


});