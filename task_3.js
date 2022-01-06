function reverse(obj){
  	let reverseObj = {};
  	for(let key in obj){
		if(typeof obj[key] === 'object') {
			reverseObj[key] = reverse(obj[key])
	    } else {
	        reverseObj[obj[key]] = key;
	    }    
  	}
  	return reverseObj;
}