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

/*
console.log('Happy has been created: ' );
console.log( happy );
console.log( 'Happy\'s text: ', happy.text );
*/


happy.addOptionAndText("yes", "Great! Were you booked in the last year?");

/*
console.log("Happy's option text: ", happy.options[0][0]);
console.log("Happy's option object: ", happy.options[0][1]);
console.log("Happy's option's text: ", happy.options[0][1].text);
 */
