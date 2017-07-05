//JavaScript
var closing = 6;
var currentTime = (new Date().getHours());
var oneHour = (1000 * 60) + currentTime;
var firstRun = true;
function TimeKepper(currentTime){
	if(firstRun){
		firstRun = false;
		Server(currentTime);
	var PromptService = setInterval(function(){
	Server(currentTime);
}, oneHour);
	}

}

function Server(currentTime){
	
}
TimeKepper(currentTime);