var elems = $(".content");

if(elems.length){
	var keep = Math.floor(Math.random() * elems.length);
  if(keep === 0){
    $("#male-photos").hide();  
  }else{
    $("#female-photos").hide();
  }
	for (var i = 0; i < elems.length; i++){
		console.log(keep)
		if( i!= keep){
			$(elems[i]).hide();
		}
		
	}
}