function daynight(e){
		var va1=e.value;
		var sector =document.querySelector('body').style;
		var list1 = document.querySelectorAll('.li1');
		if(va1=="night"){
			e.value="day";
			sector.backgroundColor="black";
			sector.color="white";
			for(i=0;i<list1.length;i++){
				list1[i].style.color="white";
			}
		}
		else if(va1=="day"){
			e.value="night";
			sector.backgroundColor="white";
			sector.color="black";
			for(i=0;i<list1.length;i++){
				list1[i].style.color="black";
			}	
		}
		else {
			alert("오류");
		}
	}
