var fs = require('fs');

const disclaimer = "This website is intended to help clarify expungement in Mississippi and does not serve as a substitute for legal advice. It is a good idea to speak to a lawyer if you still have questions about your record and are unsure of how to answer any of the questions in this app. Use of this website does not create an attorney-client relationship.";


var dcfcGraph =  {
		n1: {
				text: disclaimer,
				options: [ ["I accept", "n5"], ["I do not accept", "n2"] ]
		},
		n2: {
				text: "If you do not accept these terms, you cannot use this tool.",
				options: [ ["Back to start", "n1"] ]
		},
		n3: {
				text: "Based on your responses, the item you are trying to expunge is likely eligible for expungement!",
				options: [ ["Back to start", "n1"] ]
		},
		n4: {
				text: "Based on your responses, the item you are trying to expunge is likely not eligible for expungement.",
				options: [ ["Back to start", "n1"] ]
		},
		n5: {
				text: "Did you receive a felony conviction in drug court?",
				options: [ ["Yes", "n6"], ["No", "n4"] ]
		},
		n6: {
				text: "Was the conviction for an implied consent violation? (for example, a DUI)",
				options: [ ["Yes", "n4"], ["No", "n7"] ]
		},
		n7: {
				text: "Did you complete all requirements ordered by the court? This may include (1) Completing your sentence or completing requirements for suspending your sentence (2) probation requirements (3) payment of any fines and fees that were assessed.",
				options: [ ["Yes", "n3"], ["No", "n4"] ]
		}
};


function generateMermaid (graphNodes) {


  var content = "graph LR\n";

  for (var key in graphNodes) {
    var node = graphNodes[key];
    var options = node.options; // options are tuples
    var nodeText = node.text;
    // generate all edges for this node
      // A-- text -->B
    for (var i = 0; i < options.length; i++) {
      var tuple = options[i];
      var nextNodeText = graphNodes[tuple[1]].text;
      var edge = nodeText + "-- " + tuple[0] + " -->" + nextNodeText + "\n";
      content += edge;
    };
  }

  fs.writeFile("./flowcharts/test1.txt", content, function(err){
    if (err){
      return console.log(err);
    }
  });

};

generateMermaid(dcfcGraph);


