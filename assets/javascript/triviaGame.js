var gameOver = false;
var gameStarted = false;
var canStart = false;
var timerInterval;
var time = 0;
var startTime = 5;

var categories = ["Television", "Science", "Art", "Geography", "Music",
				"Movie", "World", "History", "Computer", "Food",
				"Literature", "Money", "Political", "Space", "Animal"];

var television_arr = {
	questionsAnswered:0, 
	myName:"Television", 
	question1:"How many fingers do the Simpsons cartoon characters have?", 
	question2:"On the hit show Seinfeld what was Kramer's first name?", 
	question3:"In what city does SpongeBob SquarePants live?",
	question4:"Rod Serling created what famous science fiction television show?",
	question5:"Which Teenage Mutant Ninja Turtle always wears red bandanas?",
	q1_status:"new", q1_answer:"Four", q1_fake:"a1_f", q1_fake2:"a1_f2", 
	q2_status:"new", q2_answer:"Cosmo", q2_fake:"a2_f", q2_fake2:"a1_f2",
	q3_status:"new", q3_answer:"Bikini Bottom", q3_fake:"a3_f", q3_fake2:"a1_f2", 
	q4_status:"new", q4_answer:"The Twilight Zone", q4_fake:"a4_f", q4_fake2:"a1_f2", 
	q5_status:"new", q5_answer:"Raphael", q5_fake:"a5_f", q5_fake2:"a1_f2" 
};

var science_arr = {
	questionsAnswered:0, 
	myName:"Science", 
	question1:"What is the melting point of ice in Fahrenheit?", 
	question2:"How many planets in our solar system have moons?", 
	question3:"Which planet is farthest from the sun?",
	question4:"What is the largest internal organ of the human body?",
	question5:"Who came up with the three laws of motion?",
	q1_status:"new", q1_answer:"32°F", q1_fake:"a1_f", q1_fake2:"a1_f2", 
	q2_status:"new", q2_answer:"Six", q2_fake:"a2_f", q2_fake2:"a1_f2",
	q3_status:"new", q3_answer:"Neptune", q3_fake:"a3_f", q3_fake2:"a1_f2", 
	q4_status:"new", q4_answer:"Liver", q4_fake:"a4_f", q4_fake2:"a1_f2", 
	q5_status:"new", q5_answer:"Sir Isaac Newton", q5_fake:"a5_f", q5_fake2:"a1_f2"
};

var art_arr = {
	questionsAnswered:0, 
	myName:"Art", 
	question1:"Who painted a late 15th-century mural known as the Last Supper?", 
	question2:"Which artist created the sculpture 'The Thinker'?", 
	question3:"What color do you get when you mix yellow and blue?",
	question4:"The art of paper folding is known as what?",
	question5:"Which painter started the impressionist movement?",
	q1_status:"new", q1_answer:"Leonardo da Vinci", q1_fake:"a1_f", q1_fake2:"a1_f2", 
	q2_status:"new", q2_answer:"Auguste Rodin", q2_fake:"a2_f", q2_fake2:"a1_f2",
	q3_status:"new", q3_answer:"Green", q3_fake:"a3_f", q3_fake2:"a1_f2", 
	q4_status:"new", q4_answer:"Origami", q4_fake:"a4_f", q4_fake2:"a1_f2", 
	q5_status:"new", q5_answer:"Claude Monet", q5_fake:"a5_f", q5_fake2:"a1_f2" 
};

var geography_arr = {
	questionsAnswered:0, 
	myName:"Geography", 
	question1:"In what city would you find the La Brea Tar Pits?", 
	question2:"What city is the capital of China?", 
	question3:"What city is the capital of Canada?",
	question4:"Long Island is a part of which US state?",
	question5:"What is the capital of Iceland?",
	q1_status:"new", q1_answer:"Los Angeles", q1_fake:"a1_f", q1_fake2:"a1_f2", 
	q2_status:"new", q2_answer:"Beijing", q2_fake:"a2_f", q2_fake2:"a1_f2",
	q3_status:"new", q3_answer:"Ottawa", q3_fake:"a3_f", q3_fake2:"a1_f2", 
	q4_status:"new", q4_answer:"New York", q4_fake:"a4_f", q4_fake2:"a1_f2", 
	q5_status:"new", q5_answer:"Reykjavik", q5_fake:"a5_f", q5_fake2:"a1_f2" 
};

var music_arr = {
	questionsAnswered:0, 
	myName:"Music", 
	question1:"What was the U.S. highest selling album of the 1980s?", 
	question2:"What was the name of Taylor Swift's first album?", 
	question3:"In what city was Ludwig van Beethoven born?",
	question4:"How many keys are on most baby grand pianos?",
	question5:"Where was the very first Hard Rock Cafe opened?",
	q1_status:"new", q1_answer:"Thriller by Michael Jackson", q1_fake:"a1_f", q1_fake2:"a1_f2", 
	q2_status:"new", q2_answer:"Taylor Swift", q2_fake:"a2_f", q2_fake2:"a1_f2",
	q3_status:"new", q3_answer:"Bonn", q3_fake:"a3_f", q3_fake2:"a1_f2", 
	q4_status:"new", q4_answer:"88", q4_fake:"a4_f", q4_fake2:"a1_f2", 
	q5_status:"new", q5_answer:"London", q5_fake:"a5_f", q5_fake2:"a1_f2" 
};

var movie_arr = {
	questionsAnswered:0, 
	myName:"Movie", 
	question1:"What is the name of Mickey Mouse´s dog?", 
	question2:"BB-8 is a robot from what film franchise?", 
	question3:"Who was the female lead in the movie 'Titanic'?",
	question4:"In what year was the first Harry Potter movie released?",
	question5:"Superman is a fictional superhero from what fictional planet?",
	q1_status:"new", q1_answer:"Pluto", q1_fake:"a1_f", q1_fake2:"a1_f2", 
	q2_status:"new", q2_answer:"Star Wars", q2_fake:"a2_f", q2_fake2:"a1_f2",
	q3_status:"new", q3_answer:"Kate Winslet", q3_fake:"a3_f", q3_fake2:"a1_f2", 
	q4_status:"new", q4_answer:"2001", q4_fake:"a4_f", q4_fake2:"a1_f2", 
	q5_status:"new", q5_answer:"Krypton", q5_fake:"a5_f", q5_fake2:"a1_f2" 
};

var world_arr = {
	questionsAnswered:0, 
	myName:"World", 
	question1:"What is the tallest building in the world?", 
	question2:"In which sport does the bowler deliver the ball to the batsman?", 
	question3:"Lemurs, a type of primate, are native to what island nation?",
	question4:"What is the official language of the Canadian province Quebec?",
	question5:"The martial art of kung fu originated in which country?",
	q1_status:"new", q1_answer:"The Burj Khalifa", q1_fake:"a1_f", q1_fake2:"a1_f2", 
	q2_status:"new", q2_answer:"Cricket", q2_fake:"a2_f", q2_fake2:"a1_f2",
	q3_status:"new", q3_answer:"Madagascar", q3_fake:"a3_f", q3_fake2:"a1_f2", 
	q4_status:"new", q4_answer:"French", q4_fake:"a4_f", q4_fake2:"a1_f2", 
	q5_status:"new", q5_answer:"China", q5_fake:"a5_f", q5_fake2:"a1_f2"
};

var history_arr = {
	questionsAnswered:0,
	myName:"History",  
	question1:"Napoleon suffered defeat at Waterloo in what year?", 
	question2:"Brazil was once a colony of which European country?", 
	question3:"What is the most popular board game of all time?",
	question4:"Which Patriot leader organized the Boston Tea Party in 1773?",
	question5:"What was the Roman name for the goddess Hecate?",
	q1_status:"new", q1_answer:"1815", q1_fake:"a1_f", q1_fake2:"a1_f2", 
	q2_status:"new", q2_answer:"Portugal", q2_fake:"a2_f", q2_fake2:"a1_f2",
	q3_status:"new", q3_answer:"Chess", q3_fake:"a3_f", q3_fake2:"a1_f2", 
	q4_status:"new", q4_answer:"Samuel Adams", q4_fake:"a4_f", q4_fake2:"a1_f2", 
	q5_status:"new", q5_answer:"Trivia", q5_fake:"a5_f", q5_fake2:"a1_f2"
};

var computer_arr = {
	questionsAnswered:0, 
	myName:"Computer", 
	question1:"In what year was the first Apple computer released?", 
	question2:"In a website browser address bar what does 'www' stand for?", 
	question3:"What year was Facebook founded?",
	question4:"In what year was the iPhone first released?",
	question5:"1,024 Gigabytes is equal to one what?",
	q1_status:"new", q1_answer:"1976", q1_fake:"a1_f", q1_fake2:"a1_f2", 
	q2_status:"new", q2_answer:"World Wide Web", q2_fake:"a2_f", q2_fake2:"a1_f2",
	q3_status:"new", q3_answer:"2004", q3_fake:"a3_f", q3_fake2:"a1_f2", 
	q4_status:"new", q4_answer:"2007", q4_fake:"a4_f", q4_fake2:"a1_f2", 
	q5_status:"new", q5_answer:"Terabyte", q5_fake:"a5_f", q5_fake2:"a1_f2"
};

var food_arr = {
	questionsAnswered:0, 
	myName:"Food", 
	question1:"What do the letters of the popular fast food chain KFC stand for?", 
	question2:"Pho is a popular noodle soup from what country?", 
	question3:"Red Vines is a popular brand of what type of candy?",
	question4:"Magarine is sold as a replacement for what?",
	question5:"A tandoor is a type of what?",
	q1_status:"new", q1_answer:"Kentucky Fried Chicken", q1_fake:"a1_f", q1_fake2:"a1_f2", 
	q2_status:"new", q2_answer:"Vietnam", q2_fake:"a2_f", q2_fake2:"a1_f2",
	q3_status:"new", q3_answer:"Red licorice", q3_fake:"a3_f", q3_fake2:"a1_f2", 
	q4_status:"new", q4_answer:"Butter", q4_fake:"a4_f", q4_fake2:"a1_f2", 
	q5_status:"new", q5_answer:"Oven", q5_fake:"a5_f", q5_fake2:"a1_f2" 
};

var literature_arr = {
	questionsAnswered:0, 
	myName:"Literature", 
	question1:"What musical instrument did Sherlock Holmes play?", 
	question2:"Who won the Nobel Prize for Literature in 2016?", 
	question3:"Manga are a type of comics from what country?",
	question4:"Who wrote the 1936 novel 'Gone with the Wind'?",
	question5:"Who wrote the fairy tale 'The Ugly Duckling'?",
	q1_status:"new", q1_answer:"Violin", q1_fake:"a1_f", q1_fake2:"a1_f2", 
	q2_status:"new", q2_answer:"Bob Dylan", q2_fake:"a2_f", q2_fake2:"a1_f2",
	q3_status:"new", q3_answer:"Japan", q3_fake:"a3_f", q3_fake2:"a1_f2", 
	q4_status:"new", q4_answer:"Margaret Mitchell", q4_fake:"a4_f", q4_fake2:"a1_f2", 
	q5_status:"new", q5_answer:"Hans Christian Andersen", q5_fake:"a5_f", q5_fake2:"a1_f2"
};

var money_arr = {
	questionsAnswered:0, 
	myName:"Money", 
	question1:"What is the Spanish word for money?", 
	question2:"What is the official currency of the country Ecuador?", 
	question3:"Which President is on the U.S. $1,000 dollar bill?",
	question4:"What building is found on the back of a U.S. 100 dollar bill?",
	question5:"What year was the last $2 bill printed in the U.S. ?",
	q1_status:"new", q1_answer:"Dinero", q1_fake:"a1_f", q1_fake2:"a1_f2", 
	q2_status:"new", q2_answer:"U.S. Dollar", q2_fake:"a2_f", q2_fake2:"a1_f2",
	q3_status:"new", q3_answer:"Grover Cleveland", q3_fake:"a3_f", q3_fake2:"a1_f2", 
	q4_status:"new", q4_answer:"Independence Hall", q4_fake:"a4_f", q4_fake2:"a1_f2", 
	q5_status:"new", q5_answer:"2003", q5_fake:"a5_f", q5_fake2:"a1_f2"
};

var policital_arr = {
	questionsAnswered:0, 
	myName:"Political", 
	question1:"How many US Supreme Court justices are there?", 
	question2:"Which US president was known as 'The Great Communicator'?", 
	question3:"Who is the current supreme leader of North Korea?",
	question4:"What building is found on the back of a U.S. 100 dollar bill?",
	question5:"What animal is the symbol of the U.S. democratic party?",
	q1_status:"new", q1_answer:"9", q1_fake:"a1_f", q1_fake2:"a1_f2", 
	q2_status:"new", q2_answer:"Ronald Regan", q2_fake:"a2_f", q2_fake2:"a1_f2",
	q3_status:"new", q3_answer:"Kim Jong Un", q3_fake:"a3_f", q3_fake2:"a1_f2", 
	q4_status:"new", q4_answer:"Donkey", q4_fake:"a4_f", q4_fake2:"a1_f2", 
	q5_status:"new", q5_answer:"2008", q5_fake:"a5_f", q5_fake2:"a1_f2" 
};


var space_arr = {
	questionsAnswered:0, 
	myName:"Space", 
	question1:"Which planet is farthest from the sun?", 
	question2:"What planet in our solar system has the most gravity?", 
	question3:"What is the smallest planet in our solar system?",
	question4:"Our solar system is located in what galaxy?",
	question5:"Who was the first human to travel into space?",
	q1_status:"new", q1_answer:"Neptune", q1_fake:"a1_f", q1_fake2:"a1_f2", 
	q2_status:"new", q2_answer:"Jupiter", q2_fake:"a2_f", q2_fake2:"a1_f2",
	q3_status:"new", q3_answer:"Mercury", q3_fake:"a3_f", q3_fake2:"a1_f2", 
	q4_status:"new", q4_answer:"The Milky Way Galaxy", q4_fake:"a4_f", q4_fake2:"a1_f2", 
	q5_status:"new", q5_answer:"Yuri Gagarin", q5_fake:"a5_f", q5_fake2:"a1_f2" 
};

var animal_arr = {
	questionsAnswered:0, 
	myName:"Animal", 
	question1:"What is a group of lions called?", 
	question2:"How many hearts does an octopus have?", 
	question3:"Which bird is often associated with delivering babies?",
	question4:"Polar bears feed mainly on what animal?",
	question5:"What is a group of rhinoceros called?",
	q1_status:"new", q1_answer:"A pride", q1_fake:"a1_f", q1_fake2:"a1_f2", 
	q2_status:"new", q2_answer:"Three", q2_fake:"a2_f", q2_fake2:"a1_f2",
	q3_status:"new", q3_answer:"Stork", q3_fake:"a3_f", q3_fake2:"a1_f2", 
	q4_status:"new", q4_answer:"Seals", q4_fake:"a4_f", q4_fake2:"a1_f2", 
	q5_status:"new", q5_answer:"A 'crash' ", q5_fake:"a5_f", q5_fake2:"a1_f2"
};



$(document).ready(function() {
	
	gameFunctions("resetGame");

	//using this ON call to avoid...
	//...having to rebind the click buttons...
	//...every time they appear
	$(document).on('click', '.category-btn', function() {
		if(canStart){ gameFunctions("start"); }
		categoryAI("show_"+ $(this).html() );
	});

	$("#howTo button").click(function(event) {
		$("#howTo").toggleClass("howTo_hide").toggleClass("howTo_show");
		if(!gameOver && !gameStarted){
			gameFunctions("getReadyToStart");
		}
	});

});

function gameFunctions(whatToDo) {

	if(whatToDo == "resetGame"){
		gameFunctions("clearAllRows");
		categoryAI("generateNew");
		
		gameOver = false;
		gameStarted = false;

		//show and setup timer
		time = startTime;
		var t = $("#timer");
		t.text( timeConverter( time ) );

		$(".category-btn").each(function( index ) {
		  $( this ).removeClass("category-done");
		});

		var allCategories = [television_arr, science_arr, art_arr, 
							geography_arr ,music_arr ,movie_arr, 
							world_arr, history_arr, computer_arr, 
							food_arr, literature_arr, money_arr, 
							policital_arr, space_arr, animal_arr ];

		for (var i = 0; i < allCategories.length; i++) {
			allCategories[i].questionsAnswered = 0;
			allCategories[i].q1_status = "new";
			allCategories[i].q2_status = "new";
			allCategories[i].q3_status = "new";
			allCategories[i].q4_status = "new";
			allCategories[i].q5_status = "new";
		}	

		setTimeout(function() {
			canStart = true;
		}, 1000);
		
	}

	if(whatToDo == "clearAllRows"){
		$("#row-1").html("");
		$("#row-2").html("");
		$("#row-3").html("");
	}

	if(whatToDo == "getReadyToStart"){
		//show and setup timer
		time = startTime;
		var t = $("#timer");
		t.text( timeConverter( time ) );

       	snailAI("p1", "reset");
       	snailAI("p2", "reset");
       	snailAI("p3", "reset");

       	canStart = true;
	}

	if(whatToDo == "start"){
		canStart = false;
		if(!timerInterval){
       		timerInterval = setInterval(function(){
       		 gameFunctions("count")
       		}, 1000);
      	}
	}

	if(whatToDo == "count"){
		if(time != 0){
    		time = time-1;
    		var currentTime = timeConverter( time );
    		$("#timer").html(currentTime);
    	}else{

    		clearInterval(timerInterval);
    		timerInterval = "";

    		console.important("GAME OVER");
    		gameFunctions("clearAllRows");
    		gameOver = true;

    		
    		//place restart button in row 1
    		var $restartGame = $("<button>");

			$restartGame.html("<div>GAME OVER</div>");
			$restartGame.attr("id","restart-btn");

			setTimeout(function() {
				$restartGame.html("<div>GAME OVER<br>Restart Game?</div>");
				$restartGame.click(function(event) {
					gameFunctions("resetGame");
				});
			}, 2000);

			
			$("#row-1").append($restartGame);

			//place stats in row 2
    	}
	}
}

function categoryAI(whatToDo_andMore) {
	console.todo("Category AI: " + whatToDo_andMore);

	var whatToDo = whatToDo_andMore.split("_");
	if(whatToDo[0] == "generateNew"){
		//display the categories in random order
		// using the shuffle function
		// var newCategories = shuffle(categories);
		var newCategories = categories;

		for (var i = 0; i < 5; i++) {
			var $categoryBtn = $("<button>", {"class": "category-btn"});
			$categoryBtn.html(newCategories[i]);
			var qa1 = returnCategoryArray(newCategories[i]).questionsAnswered ;
			if(qa1 == 5){ $categoryBtn.addClass("category-done"); }
			// $categoryBtn.attr("data-content", qa1 +"/5");
			$("#row-1").append($categoryBtn);
			shakeThings($categoryBtn, true);

			var $categoryBtn2 = $("<button>", {"class": "category-btn"});
			$categoryBtn2.text(newCategories[i+5]);
			var qa2 = returnCategoryArray(newCategories[i+5]).questionsAnswered ;		
			if(qa2 == 5){ $categoryBtn2.addClass("category-done"); }
			// $categoryBtn2.attr("data-content", qa2 +"/5");
			$("#row-2").append($categoryBtn2);
			shakeThings($categoryBtn2, true);

			var $categoryBtn3 = $("<button>", {"class": "category-btn"});
			$categoryBtn3.text(newCategories[i+10]);
			var qa3 = returnCategoryArray(newCategories[i+10]).questionsAnswered ;		
			if(qa3 == 5){ $categoryBtn3.addClass("category-done"); }
			// $categoryBtn3.attr("data-content", qa3 +"/5");
			$("#row-3").append($categoryBtn3);
			shakeThings($categoryBtn3, true);
		}
	}
	if(whatToDo[0] == "show"){
		//change the sub-display text
		//make it display the category name...
		//...and the amount of questions answered
		var arr_grab = returnCategoryArray(whatToDo[1]);
		if(arr_grab.questionsAnswered !=5){
			var qA = " : "+ arr_grab.questionsAnswered + "/5 questions answered";
			$("#sub-display").html( "Category: " + whatToDo[1].toUpperCase() + qA);
			// $("#sub-display").prepend( exitCategoryButton("small") );
			gameFunctions("clearAllRows");

			//create some questions(3) from array of the picked category
			questionAI("create_questions_"+whatToDo[1]);
		}
	}
}

var questionCallCount = 0;
function questionAI(whatToDo_andMore) {
	console.todo("Question AI: " + whatToDo_andMore);
	var whatToDo = whatToDo_andMore.split("_");

	if(whatToDo[0] == "create"){

		if(whatToDo[1] == "questions" || whatToDo[1] == "question"){
			//check to see if the question has been answered...
			//...and then show un-aswered questions first
			//if not, push its number into the choice array
			var qArray = [];
			var myArray = returnCategoryArray(whatToDo[2]);
			if(myArray.q1_status == "new"){ qArray.push(1); }
			if(myArray.q2_status == "new"){ qArray.push(2); }
			if(myArray.q3_status == "new"){ qArray.push(3); }
			if(myArray.q4_status == "new"){ qArray.push(4); }
			if(myArray.q5_status == "new"){ qArray.push(5); }
			qArray = shuffle(qArray);

			if(whatToDo[1] == "questions"){
				//spawn three questions
				questionSpawner(whatToDo[2],qArray[0],"row-1");
				questionSpawner(whatToDo[2],qArray[1],"row-2");
				questionSpawner(whatToDo[2],qArray[2],"row-3");
			}

			if(whatToDo[1] == "question"){
				if(qArray.length > 0){
					console.log(whatToDo[2]+"-"+qArray[0]+"-"+whatToDo[3])
					questionSpawner(whatToDo[2],qArray[0],whatToDo[3]);
				}else{
		
					questionCallCount+=1;
					if(questionCallCount == 3){

						//no questions left in this category...
						var completedCategoryText = "All "+ whatToDo[2] + " questions answered!";
						console.todo("Question AI: "+ completedCategoryText);
						
						//...reset question count
						questionCallCount = 0;

						//...spawn 'exit to category' button
              			$("#"+whatToDo[3]).append(exitCategoryButton("large"));
					}
				}
			}

		}

	}

	if(whatToDo_andMore == "close_openQuestions"){
		questionCallCount = 0;
		//set the open questions's status back to new
		//get the open question
		var myInfo = $("#row-1").children(".question-holder").children(".q-a").children(".question");
		if(myInfo.length > 0){
			var q = myInfo.attr("data-content").split("_")[0];
			var qNum = myInfo.attr("data-content").split("_")[1];
		 	if(qNum == 1){  returnCategoryArray(q).q1_status = "new"; }
			if(qNum == 2){  returnCategoryArray(q).q2_status = "new"; }
			if(qNum == 3){  returnCategoryArray(q).q3_status = "new"; }
		 	if(qNum == 4){  returnCategoryArray(q).q4_status = "new"; }
		 	if(qNum == 5){  returnCategoryArray(q).q5_status = "new"; }
		}
		var myInfo2 = $("#row-2").children(".question-holder").children(".q-a").children(".question");
		if(myInfo2.length > 0){
			var q = myInfo.attr("data-content").split("_")[0];
			var qNum = myInfo.attr("data-content").split("_")[1];
		 	if(qNum == 1){  returnCategoryArray(q).q1_status = "new"; }
			if(qNum == 2){  returnCategoryArray(q).q2_status = "new"; }
			if(qNum == 3){  returnCategoryArray(q).q3_status = "new"; }
		 	if(qNum == 4){  returnCategoryArray(q).q4_status = "new"; }
		 	if(qNum == 5){  returnCategoryArray(q).q5_status = "new"; }
		}

		var myInfo3 = $("#row-3").children(".question-holder").children(".q-a").children(".question");
		if(myInfo3.length > 0){
			var q = myInfo.attr("data-content").split("_")[0];
			var qNum = myInfo.attr("data-content").split("_")[1];
		 	if(qNum == 1){  returnCategoryArray(q).q1_status = "new"; }
			if(qNum == 2){  returnCategoryArray(q).q2_status = "new"; }
			if(qNum == 3){  returnCategoryArray(q).q3_status = "new"; }
		 	if(qNum == 4){  returnCategoryArray(q).q4_status = "new"; }
		 	if(qNum == 5){  returnCategoryArray(q).q5_status = "new"; }
		}
	}
}

function questionSpawner(category, questionNumber, rowParent) {
	var myArray = returnCategoryArray(category);

	var myQuestion = "error";
	var myAnswers =[];
	if(questionNumber == 1){
		myArray.q1_status = "open";
		myQuestion = myArray.question1;
		myAnswers.push(myArray.q1_answer, myArray.q1_fake, myArray.q1_fake2);
	}
	if(questionNumber == 2){ 
		myArray.q2_status = "open";
		myQuestion = myArray.question2; 
		myAnswers.push(myArray.q2_answer, myArray.q2_fake, myArray.q2_fake2);
	}
	if(questionNumber == 3){ 
		myArray.q3_status = "open";
		myQuestion = myArray.question3;
		myAnswers.push(myArray.q3_answer, myArray.q3_fake, myArray.q3_fake2); 
	}
	if(questionNumber == 4){ 
		myArray.q4_status = "open";
		myQuestion = myArray.question4;
		myAnswers.push(myArray.q4_answer, myArray.q4_fake, myArray.q4_fake2); 
	}
	if(questionNumber == 5){ 
		myArray.q5_status = "open";
		myQuestion = myArray.question5; 
		myAnswers.push(myArray.q5_answer, myArray.q5_fake, myArray.q5_fake2);
	}
	if(myQuestion == "error"){ console.important("ERROR spawning question"); }

	//shuffle the answers!
	myAnswers = shuffle(myAnswers);

	//grouping & id'ing the radio buttons!
	var rGroup, r1,r2,r3;
	if(rowParent == "row-1"){ rGroup="group1"; r1=1; r2=2; r3=3; }
	if(rowParent == "row-2"){ rGroup="group2"; r1=4; r2=5; r3=6; }
	if(rowParent == "row-3"){ rGroup="group3"; r1=7; r2=8; r3=9; }

	//spawn the question div!
	var $qH = $("<div>", {"class": "question-holder"});
				
		//question-answer holder
		var $qa = $("<div>", {"class": "q-a"});
		$qH.append($qa);

			//question goes here
			var $q = $("<div>", {"class": "question"});
			$q.text(myQuestion);
			$qa.append($q);

			//set the data content, so the submit knows what you question it is!
			$q.attr("data-content", category +"_"+questionNumber);

			//answers holder
			var $aH = $("<div>", {"class": "answers-holder"});
			$qa.append($aH);

				//three answers go in the answer holder

				//answer 1
				var $a1_sub = $("<div>", {"class": "answer"});
				$aH.append($a1_sub);
					var $in_sub = $("<input>", {"class": ""});
					$in_sub.attr('type', "radio").attr('name', rGroup).attr('id', "radio-"+r1);
					$a1_sub.append($in_sub);

					var $l_sub = $("<label>", {"class": ""});
					$l_sub.attr('for', "radio-"+r1);
					$a1_sub.append($l_sub);

						//answer1-text goes in here!
						var $sp_sub = $("<span>", {"class": "radio"});
						$sp_sub.text(myAnswers[0]);
						$l_sub.append($sp_sub);

				//answer 2
				var $a2_sub = $("<div>", {"class": "answer"});
				$aH.append($a2_sub);
					var $in2_sub = $("<input>", {"class": ""});
					$in2_sub.attr('type', "radio").attr('name', rGroup).attr('id', "radio-"+r2);
					$a2_sub.append($in2_sub);

					var $l2_sub = $("<label>", {"class": ""});
					$l2_sub.attr('for', "radio-"+r2);
					$a2_sub.append($l2_sub);

						//answer1-text goes in here!
						var $sp2_sub = $("<span>", {"class": "radio"});
						$sp2_sub.text(myAnswers[1]);
						$l2_sub.append($sp2_sub);

				//answer 3
				var $a3_sub = $("<div>", {"class": "answer"});
				$aH.append($a3_sub);
					var $in3_sub = $("<input>", {"class": ""});
					$in3_sub.attr('type', "radio").attr('name', rGroup).attr('id', "radio-"+r3);
					$a3_sub.append($in3_sub);

					var $l3_sub = $("<label>", {"class": ""});
					$l3_sub.attr('for', "radio-"+r3);
					$a3_sub.append($l3_sub);

						//answer1-text goes in here!
						var $sp3_sub = $("<span>", {"class": "radio"});
						$sp3_sub.text(myAnswers[2]);
						$l3_sub.append($sp3_sub);

		//submit answer button here
		var $sB = $("<button>", {"class": "submit-answer-btn"});
		$qH.append($sB);
		//tell submit button what to do here..
		//...which is check if the question is asnwered...
		//... and if not .... check if the selected answer is right
		$sB.click(function(event) {
			var myInfo = $(this).parent().children(".q-a").children(".question").attr("data-content");

			var myCategory = myInfo.split("_")[0];
			myCategory = returnCategoryArray(myCategory);

			var myQ_num = myInfo.split("_")[1];

			//change question status to answered...
			//...to avoid re-submitting questions
			var myStatus;
			if(myQ_num == 1){ myStatus = myCategory.q1_status; }
			if(myQ_num == 2){ myStatus = myCategory.q2_status; }
			if(myQ_num == 3){ myStatus = myCategory.q3_status; }
			if(myQ_num == 4){ myStatus = myCategory.q4_status; }
			if(myQ_num == 5){ myStatus = myCategory.q5_status; }

			if(myStatus == "open"){

				// if(myCategory == "open")
				if(myQ_num == 1){myCategory.q1_status = "answered";}
				if(myQ_num == 2){myCategory.q2_status = "answered";}
				if(myQ_num == 3){myCategory.q3_status = "answered";}
				if(myQ_num == 4){myCategory.q4_status = "answered";}
				if(myQ_num == 5){myCategory.q5_status = "answered";}

				//get current answer
				var myAnswer = "none";
				var choiceA = $(this).parent().children(".q-a").children(".answers-holder").children(".answer:eq(0)").children().prop("checked");
				var choiceB = $(this).parent().children(".q-a").children(".answers-holder").children(".answer:eq(1)").children().prop("checked");
				var choiceC = $(this).parent().children(".q-a").children(".answers-holder").children(".answer:eq(2)").children().prop("checked");
				if(choiceA){ myAnswer = $(this).parent().children(".q-a").children(".answers-holder").children(".answer:eq(0)").children().text(); }
				if(choiceB){ myAnswer = $(this).parent().children(".q-a").children(".answers-holder").children(".answer:eq(1)").children().text(); }
				if(choiceC){ myAnswer = $(this).parent().children(".q-a").children(".answers-holder").children(".answer:eq(2)").children().text(); }

				//get REAL answer
				var myRealAnswer = "whoops, answer grab erorr.";
				if(myQ_num == 1){ myRealAnswer = myCategory.q1_answer; }
				if(myQ_num == 2){ myRealAnswer = myCategory.q2_answer; }
				if(myQ_num == 3){ myRealAnswer = myCategory.q3_answer; }
				if(myQ_num == 4){ myRealAnswer = myCategory.q4_answer; }
				if(myQ_num == 5){ myRealAnswer = myCategory.q5_answer; }

				//check current VS correct answer
				var answerIS = "answer error";
				var ifCorrect = "";
				if(myAnswer == myRealAnswer){ 
					answerIS = "CORRECT";
					ifCorrect = "<br>Time+2 seconds!</br>";
					time +=2;

				}else{ answerIS = "WRONG"; }

				console.log(answerIS+ " answer!");
				//log the answer into the category
				myCategory.questionsAnswered +=1;

				//update visual displauy of questions answered
				var qA = " : "+ myCategory.questionsAnswered + "/5 questions answered";
				$("#sub-display").html( "Category: " + myInfo.split("_")[0].toUpperCase() + qA);
				// $("#sub-display").prepend( exitCategoryButton("small") );


				//remove current question insides..
				//..change it to right-answer div
				var parent = $(this).parent();
				parent.html("<div>"+answerIS+ifCorrect+"</div>").attr("class", answerIS+"-ANSWER fade");

				setTimeout(function() {
					var myRow = parent.parent().attr("id") ;

					//remove current  question
					parent.children().parent().remove();

					//try and spawn a new question
					questionAI("create_question_"+ (myInfo.split("_")[0]) +"_"+ myRow );
				}, 1001);

			}


		});

			//submit text
			var $sBT = $("<div>", {"class": "submit-text"});
			$sBT.html("submit<br>answer?");
			$sB.append($sBT);

			//submit-sub-text
			var $sBT_sub = $("<div>", {"class": "submit-sub-text hide"});
			$sB.append($sBT_sub);

	$("#" +rowParent ).append($qH);
}




function returnCategoryArray(which) {
	var returnArray = [];
	if(which == "Television"){ returnArray = television_arr; }
	if(which == "Science"){ returnArray = science_arr; }
	if(which == "Art"){ returnArray = art_arr; }
	if(which == "Geography"){ returnArray = geography_arr; }
	if(which == "Music"){ returnArray = music_arr; }

	if(which == "Movie"){ returnArray = movie_arr; }
	if(which == "World"){ returnArray = world_arr; }
	if(which == "History"){ returnArray = history_arr; }
	if(which == "Computer"){ returnArray = computer_arr; }
	if(which == "Food"){ returnArray = food_arr; }

	if(which == "Literature"){ returnArray = literature_arr; }
	if(which == "Money"){ returnArray = money_arr; }
	if(which == "Political"){ returnArray = policital_arr; }
	if(which == "Space"){ returnArray = space_arr; }
	if(which == "Animal"){ returnArray = animal_arr; }

	return returnArray;
}


function exitCategoryButton(which) {
	var $newBackButton = $("<button>");

	if(which == "small"){
		$newBackButton.text("X");
		$newBackButton.attr("id","exit-category-btn-s");
		$newBackButton.click(function(event) {
			questionAI("close_openQuestions");

			gameFunctions("clearAllRows");
			categoryAI("generateNew");

			$("#sub-display").html("Click a Category below to continue");
		});
	}

	if(which == "large"){
		$newBackButton.html("<div>Category Completed, click to pick a new category.</div>");
		$newBackButton.attr("id","exit-category-btn-l");
		$newBackButton.click(function(event) {
			gameFunctions("clearAllRows");
			categoryAI("generateNew");
		});
	}
	return $newBackButton;
}


function snailAI(whichSnail, whatToDo) {
	var position;
	if(whichSnail == "p1"){
		if(whatToDo == "reset"){ position = 0; }
		if(whatToDo == "forward"){ 
			// position = $("#snail-player").css( "margin-left") + 1;
		}
		$("#snail-player").css( "margin-left", position + "%" );
		$("#snail-player-trail").css( "width", (position-(position * 0.1)) + "%" );
	}
	if(whichSnail == "p2"){
		if(whatToDo == "reset"){ position = 0; }
		$("#snail-2").css( "margin-left", position + "%" );
		$("#snail-2-trail").css( "width", (position-(position * 0.1)) + "%" );
	}
	if(whichSnail == "p3"){
		if(whatToDo == "reset"){ position = 0; }
		$("#snail-3").css( "margin-left", position + "%" );
		$("#snail-3-trail").css( "width", (position-(position * 0.1)) + "%" );
	}
}

/*///////*/
/*BEGIN */
/*RE-USABLE JAVASCRIPT*/
console.todo = function( msg){
 	console.log( '%c %s %s %s ', 'color: #333; background-color: #ccc;', '*', msg, '*');
}

console.important = function( msg){
	console.log( '%c%s %s %s', 'color: white; font-weight: bold; background-color: rgba(0,100,50,1)', '! ', msg, ' !');
}

function shakeThings(el, useJQuery) {
	var thingToShake;
	if(!useJQuery){
    	thingToShake = document.getElementById(el);
	}else{
		thingToShake = el.get(0);
	}
    var elClasses = thingToShake.classList;
    if (elClasses.contains("shake")) { 
    	elClasses.remove("shake"); 
    }

	thingToShake.classList.add("shake");
	setTimeout(function(){ elClasses.remove("shake"); }, 500);
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

function timeConverter(t) {
    //  Takes the current time in seconds and convert it to minutes and seconds (mm:ss).
    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    if (minutes === 0) {
      minutes = "00";
    }

    else if (minutes < 10) {
      minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
}

/*END */
/*RE-USABLE JAVASCRIPT*/
/*///////*/

