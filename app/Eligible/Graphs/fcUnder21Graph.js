const disclaimer = "This website is intended to help clarify expungement in Mississippi and does not serve as a substitute for legal advice. It is a good idea to speak to a lawyer if you still have questions about your record and are unsure of how to answer any of the questions in this app. Use of this website does not create an attorney-client relationship.";


/*
var JonGraph = function(string){
		this.options = [];
		this.text = string;
		this.counter = 0;
};


JonGraph.prototype.JonNode = function(string){
		this.options = [];
		this.text = string;
}


JonGraph.prototype.addOptionAndText = function(option, text){
		var edge = new this.JonNode(text);
		this.options.push([option, edge]);
};


var happy = new JonGraph("Do you have your rapsheet?");

*/

/*
console.log('Happy has been created: ' );
console.log( happy );
console.log( 'Happy\'s text: ', happy.text );
*/

// happy.addOptionAndText("yes", "Great! Were you booked in the last year?");

/*
console.log("Happy's option text: ", happy.options[0][0]);
console.log("Happy's option object: ", happy.options[0][1]);
console.log("Happy's option's text: ", happy.options[0][1].text);
 */




var graphNodes =  {
		n1: {
				text: "This website is intended to help clarify expungement in Mississippi and does not serve as a substitute for legal advice. It is a good idea to speak to a lawyer if you still have questions about your record and are unsure of how to answer any of the questions in this app. Use of this website does not create an attorney-client relationship.",
				options: [ ["I accept", "n2"], ["I do not accept", "n3"] ]
		},
		n2: {
				text: "Have you been convicted of one of these six felones? (1) Felony Worthless Check (2) Possession of Controlled Substance (3) False Pretense (4) Grand Larceny (5) Malicious Mischief (6) Shoplifting",
				options: [ ["Yes", "n5"], ["No", "n4"] ]
		},
		n3: {
				text: "Well, then you can't use this site.",
				options: [ ["3Back to start", "n1"], ["Fine, I accept.", "n2"] ]
		},
		n4: {
				text: "Based on your responses, you are likely not eligible to have this felony conviction expunged.",
				options: [ ["Back to start", "n2"] ]
		},
		n5: {
				text: "Has it been 5 years since you completed your sentence?",
				options: [ ["Yes", "n6"], ["No", "n4"] ]
		},
		n6: {
				text: "Have you already received an expungement for one of these six felonies?",
				options: [ ["Yes", "n7"], ["No", "n4"] ]
		},
		n7: {
				text: "Based on your responses, this felony conviction is likely eligible for expungement!",
				options: [ ["View Resources", "n1"],]
		},
		n8: {
				text: "",
				options: [ ["Yes", "n"], ["No", "n"] ]
		},
		n9: {
				text: "",
				options: [ ["Yes", "n"], ["No", "n"] ]
		},
		n10: {
				text: "",
				options: [ ["Yes", "n"], ["No", "n"] ]
		},
		n11: {
				text: "",
				options: [ ["Yes", "n"], ["No", "n"] ]
		},


};

export default graphNodes;
