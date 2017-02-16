$(document).ready(function() {
	
	resetGame();

	$('#attackButton').click(function(event) {
    	// if(canFight){ fightAI(); }
    	// if(gameOver){ resetGame(); }
	});
});

function resetGame() {
	console.log("ok");
}



/*///////*/
/*BEGIN */
/*RE-USABLE JAVASCRIPT*/
console.todo = function( msg){
 	console.log( '%c %s %s %s ', 'color: yellow; background-color: black;', '--', msg, '--');
}

console.important = function( msg){
	console.log( '%c%s %s %s', 'color: white; font-weight: bold; background-color: brown', '! ', msg, ' !');
}

function shakeThings(el) {
    var thingToShake = document.getElementById(el);

    var elClasses = thingToShake.classList;
    if (elClasses.contains("shake")) { 
    	elClasses.remove("shake"); 
    }

	thingToShake.classList.add("shake");
	setTimeout(function(){ elClasses.remove("shake"); }, 500);
}
/*END */
/*RE-USABLE JAVASCRIPT*/
/*///////*/

