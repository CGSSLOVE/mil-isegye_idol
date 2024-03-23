function daynight(e){
		var va1=e.value;
		var sector =document.querySelector('body').style;
		
		if(va1=="night"){
			e.value="day";
			sector.backgroundColor="black";
			sector.color="white";
		}
		else if(va1=="day"){
			e.value="night";
			sector.backgroundColor="white";
			sector.color="black";	
		}
		else {
			alert("오류");
		}
	}
