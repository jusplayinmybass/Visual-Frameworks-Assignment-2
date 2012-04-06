// Myron Carroll
// Assignment 2
// Visual Frameworks
// Section 1204

window.addEventListener("DOM ContentLoaded", function(){
	function $ (x){
		var theElement = document.getElementByID(x);
		return theElement;
	}
	
	function makeTitle(){
		var formTag = document.getElementsByTagNames("form"),
		titleGroup = $('select'),
		makeSelect = document.createElement('select');
		makeSelect.setAttribute("id", "titles");
		for(var i=0, j=titleGroup.length; i<j; i++){
			var makeOption = document.createElement('option');
			var optText = titleGroup[i];
			makeOption.setAttribute("value", optText);
			makeOption.innerHTML = optText; 
			makeTitle.appendChild(makeOption);
		}
		 titleGroup.appendChild();
	}
	function getSelectedRadio(){
		var radios  = document.form[0].group;
		for (var i=0; i< radios.length; i++){
			if (radios[i].checked){
				var groupValue = radios[i].value;
			};
		}; 
	 };
	 
	function toggleControls(n){
		switch(n){
			case "on":
				$('contactForm').style.display = "none";
				$('clear').style.display = "inline";
				$('displayData').style.display = 'none';
				$('addNew').style.display = 'inline';
				break;
			case "off":
				$('contactForm').style.display = "block";
				$('clear').style.display = "inline";
				$('displayData').style.display = 'inline';
				$('addNew').style.display = 'none';
				$('items').style.display = 'none';
				
				break;
			default:
				return false;
		};
	};
	function saveData () {
		var id = Math.floor(Math.random()*10000001);
		getSelectedRadio();
		var item {};
		item.title  = ["Title", $('titles').value],
		item.fname = ["First Name", $('fname').value],
		item.lname = ["Last Name", $('lname').value],
		item.email = ["Email", $('email').value],
		item.birthday = ["Birthday", $('date').value],
 		item.out = ["In a month, how often do you go see live music?", $('out').value],
		item.hear= ["How did you hear about Myron Bennell Carroll?", $('hear').value],
		item.group= ["", groupValue];     
		localStorage.setItem(id, JSON.stringify(item));
		alert("Contact Saved");
		
	};
	
	function getData(){
		toggleControls("on");
		var makeDiv = document.createElement('div');
		makeDiv.setAttribute("id","items");
		var makeList = document.createElement('ul');
		makeDiv.appendChild(makeList);
		document.body.appendChild(makeDiv);
		$('items').style.display = 'block';
		for(var i=0, len = localStorage.length; i<len; i++){
			var makeli = document.createElement('li');
			makeList.appendChild(makeli);
			var key = localStorage.key(i);
			var value = localStorage.getItem(key);
			var objectect = JSON.parse(value);
			var makeSublist = document.createElement('li');
			makeli.appendChild(makeSubList);
			for (var n in object){
				var makeSubli = document.createElement('li');
				makeSubList.appendChild(makeSubli);
				var optSubText = object[n][0]+" "+object[n][1];
				makeSubli.innerHTML = optSubText;
			};
		};
	};
	
	function clearLocal(){
		if(localStorage.length===0){
			alert("There is no Data to clear!");
		}else{
			localStorage.clear();
			alert("All contacts are deleted");
			window.location.reload();
			return false;
		};
	};
	var titleGroup = ["--Choose a Title--", "Ms.", "Mrs.", "Mr."],
		groupValue;
	makeTitle();
	
	var displayLink = $('view information');
	displayLink.addEventListener("click", getData);
	var clearLink = $('clear form');
	clearLink.addEventListener("click", clearLocal);
	var save = $ ('submit');
	save.addEventListener = $("click", saveData);


});