const pictureList = [
	["Widefield of Orion", "Canon450D - ISO800 - 135mm", "NV5wozuDC9", "widefield" ,"250lights - 50darks - 50flats - 50biases @ 30\" ISO800 135mm", "SkyWatcher HEQ5 pro - Canon450D - Sigma 70/300mm"],
	["The Andromeda Galaxy", "Canon450D - ISO800 - 420mm", "RdyCC3YmTw", "galaxy"],
	["The Pleiades", "Canon450D - ISO800 - 420mm", "vZUmrtr17O", "cluster"],
	["Lorem Ipsum", "Canon450D - ISO800 - 420mm", "none", "none"],
	["Lorem Ipsum", "Canon450D - ISO800 - 420mm", "none", "none"],
];

function populateContent(filter) {
	for (let i=0; i<pictureList.length; i++) {
		if(pictureList[i][3] == filter || filter == "all"){
			const container = document.getElementById('content');
		
			const e1 = document.createElement('a');
				e1.setAttribute("onClick", "createPopup("+i+")");
				container.appendChild(e1);
				
			const e2 = document.createElement('div');
				e2.setAttribute("class", "picture");
				e1.appendChild(e2);
				
			const e3 = document.createElement('span');
				e3.innerHTML = pictureList[i][0]+"<br><small>"+pictureList[i][1]+"</small>";
				e2.appendChild(e3);
				
			const e4 = document.createElement('img');
				e4.setAttribute("src", "./img/thumb/"+pictureList[i][2]+".png");
				e2.appendChild(e4);											
		}
	}
}

function createPopup(id) {
	closePopup();
	
	
	const e = document.createElement('section');
		e.setAttribute("id", "blocker");
		e.setAttribute("onclick", "closePopup()");
		document.body.appendChild(e);
	
	const e1 = document.createElement('section');
		e1.setAttribute("id", "popup");
		document.body.appendChild(e1);
		
	const e2 = document.createElement('div');
		e2.setAttribute("id", "popup-image");
		e2.setAttribute("style", "background-image: url('./img/thumb/"+pictureList[id][2]+".png')");
		e1.appendChild(e2);
		
	const e3 = document.createElement('div');
		e3.setAttribute("class", "title");
		e3.innerHTML = pictureList[id][0];
		e1.appendChild(e3);
		
	const e4 = document.createElement('span');
		e4.innerHTML = "<u>Frames:</u> "+pictureList[id][4]+"<br><u>Gear:</u> "+pictureList[id][5];
		e1.appendChild(e4);
	
	const e5 = document.createElement('a');
		e5.setAttribute("href", "./img/"+pictureList[id][2]+".png");
		e5.setAttribute("target", "_blank");
		e5.innerHTML = "&raquo; Fullsize image &laquo;";
		e1.appendChild(e5);
}

function closePopup() {
	if(document.getElementById("popup")){
		document.getElementById("popup").remove();
		document.getElementById("blocker").remove();
	} else {
		console.log("no need destroy");
	}
}

populateContent('all');