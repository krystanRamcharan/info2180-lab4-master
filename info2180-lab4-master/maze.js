  
  
  
  window.onload = 
	  ///mouseOver;
	 allGlowRed; 
  
 
 
  
 

  		function mouseOver()  {
			
			document.getElementById("boundary1").onmouseover=function() {
			document.getElementById("boundary1").classList.add("youlose")};
			alert("Hello");
  			
			
		}
		
		
  		
	
		function allGlowRed() {
			var boundaries= document.getElementsByClassName("div#maze div.boundary");
		    for(var i =0; i <boundaries.length; i++){
			  boundaries[i].onmouseover = function() { boundaries[i].style.backgroundColor = "#ff8888"
		  }; 
		}
 
		}
		
		var loser = false;  // whether the user has hit a wall

window.onload = function() {
    $("start").onclick = startClick;
    $("end").onmouseover = overEnd;
    var boundaries = $$("div#maze div.boundary");
    for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].onmouseover = overBoundary;
    }
};

function overBoundary() {
    loser = true;
    var boundaries = $$("div#maze div.boundary");
    for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].addClassName("youlose");
    }
}

function startClick() {
    loser = false;
    var boundaries = $$("div#maze div.boundary");
    for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].removeClassName("youlose");
    }
}

function overEnd() {
    if(loser) {
        alert("Sorry, you lost. :[");
    } else {
        alert("You win! :]");
    }
}
     
  