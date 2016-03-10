// * convert the string into an array (split out the quantity and the price);
function findCheap(bestDeal){

// var cheapestString = ["1 for R3, 2 for R7, 3 for R10, 5 for R14.50"];

	var myString = bestDeal.split(",");
	for(var i = 0; i < myString.length; i++){
	myString[i] = myString[i].trim()
}


return myString;

};
