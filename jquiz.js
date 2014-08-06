$(document).ready(function() {

	var ascend = 0;
	var up1 = 1;
	var score = 0;
	$("#begin").on('click','button',function() {
		event.preventDefault();
		$(this).closest("#begin").hide();
		$(this).closest(".first").find("#questions span").text("Question "+ up1);
		$(this).closest(".first").find("#questions p").text(sentence[ascend]);
		$(this).closest(".first").find("#answers button").first().text(orders[ascend].optionA);
		$(this).closest(".first").find("#answers button").first().next().text(orders[ascend].optionB);
		$(this).closest(".first").find("#answers button").first().next().next().text(orders[ascend].optionC);
		$(this).closest('.first').find("#changeling").show();
		/*alert(orders[ascend].num);*/
	});

	$("#choices").on('click',"#option1" ,function() {
		event.preventDefault();
		if (orders[ascend].num == 1) {
			$(this).closest(".first").parent().find("#teacher").text(state1);
			score++;
			$(this).closest(".first").parent().find(".response").text(score + "/5 correct!");
		}
		else {
			$(this).closest(".first").parent().find("#teacher").text(state2);
		}
		$(this).closest(".first").parent().find("#teacher").show();
		$(this).closest("#answers").find("#next").show();
	});
	$("#choices").on('click',"#option2" ,function() {
		event.preventDefault();
		if (orders[ascend].num == 2) {
			$(this).closest(".first").parent().find("#teacher").text(state1);
			score++;
			$(this).closest(".first").parent().find(".response").text(score + "/5 correct!");
		}
		else {
			$(this).closest(".first").parent().find("#teacher").text(state2);
		}
		$(this).closest(".first").parent().find("#teacher").show();
		$(this).closest("#answers").find("#next").show();
	});
	$("#choices").on('click',"#option3" ,function() {
		event.preventDefault();
		if (orders[ascend].num == 3) {
			$(this).closest(".first").parent().find("#teacher").text(state1);
			score++;
			$(this).closest(".first").parent().find(".response").text(score + "/5 correct!");
		}
		else {
			$(this).closest(".first").parent().find("#teacher").text(state2);
		}
		$(this).closest(".first").parent().find("#teacher").show();
		$(this).closest("#answers").find("#next").show();
	});
	

	$("#next").on('click',function() {
		event.preventDefault();
		ascend++;
		up1++;
		if (up1 <= 5) {
			$(this).closest("#changeling").find(".response").hide();
			$(this).closest("#changeling").find(" #questions span").text("Question "+ up1);
			$(this).closest("#changeling").find(" #questions p").text(sentence[ascend]);
			$(this).closest("#changeling").find(" #answers button").first().text(orders[ascend].optionA);
			$(this).closest("#changeling").find(" #answers button").first().next().text(orders[ascend].optionB);
			$(this).closest("#changeling").find(" #answers button").first().next().next().text(orders[ascend].optionC);
			$(this).closest(".first").parent().find("#teacher").hide();
			$(this).hide();
		}
		else {
			$(this).parent().find("#refresher").show();
			$(this).hide();
		}
	});

	$("#refresher").on('click',function() {
		$(this).closest('.first').find("#begin").show();
		$(this).closest('.first').find("#changeling").hide();
		$(this).hide();

	});

});

var state1 = "Good Answer";
var state2 = "Wrong Answer";

var states = new Array();

var sentence = new Array();
sentence[0] = "Before the birth of transistors, this pioneer's diode (electrical one-way streets) made possible the phenomenal advance of radio and television technology";
sentence[1] = "A man of his abilities should have exploited the discovery of power by making a vast amount of money out of useful inventions, but instead _____ wasted his time playing with wires and magnets!. Who was this greatest scientist of his day?";
sentence[2] = "The real passion for his life was his religion. This founder of a food empire was also known for his fascination of bricks.";
sentence[3] = "While his forebear, Michael Faraday was regarded as the greatest experimental physicist; this scientist was considered to be the greatest theoretical physicist of the 1800s. He created the mathematical basis for the kinetic theory of gases.";
sentence[4] = "This prolific inventor formulated in precise terms the first and second laws of thermodynamics. He was also the first man to perceive the enormous potential of the Niagara Falls for hydroelectric power.";

function Quiz(question,optionA, optionB, optionC, num) {
	this.question = question;
	this.optionA = optionA;
	this.optionB = optionB;
	this.optionC = optionC;
	this.num = num;
};

var orders = new Array();
orders[0] = new Quiz(sentence[0],"A) Sir Isaac Newton","B) Neils Bohr", "C) Sir John Ambrose Fleming",3);
orders[1] = new Quiz(sentence[1],"A) Michael Faraday","B) Albert Einstein", "C) Paul Dirac",1);
orders[2] = new Quiz(sentence[2],"A) Sam Walton","B) Henry Heinz", "C) Franceso Bertolli",2);
orders[3] = new Quiz(sentence[3],"A) James Clerk Maxwell","B) Galilei Galileo", "C) Marie Curie",1);
orders[4] = new Quiz(sentence[4],"A) Sandi Carnot","B) J. Willard Gibbs", "C) Lord Kelvin",3);
