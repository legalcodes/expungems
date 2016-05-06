const disclaimer = "This website is intended to help clarify expungement in Mississippi and does not serve as a substitute for legal advice. It is a good idea to speak to a lawyer if you still have questions about your record and are unsure of how to answer any of the questions in this app. Use of this website does not create an attorney-client relationship.";

var graphNodes =  {
		n1: {
				text: disclaimer,
				options: [ ["I accept", "n2"], ["I do not accept", "n5"] ]
		},
		n2: {
				text: "Were you sentenced to pre-trial diversion?",
				options: [ ["Yes", "n3"], ["No", "n6"] ]
		},
		n3: {
				text: "Did you successfully complete all terms and conditions of your pre-trial diversion?",
				options: [ ["Yes", "n4"], ["No", "n6"] ]
		},
		n4: {
				text: "Based on your responses, the item you are trying to expunge is likely eligible for expungement!",
				options: [ ["Back to start", "n2"] ]
		},
		n5: {
				text: "If you do not accept these terms, you cannot use this tool.",
				options: [ ["Back to start", "n"] ]
		},
		n6: {
				text: "Based on your responses, the item you are trying to expunge is likely not eligible for expungement.",
				options: [ ["Back to start", "n2"] ]
		},
		n7: {
				text: "",
				options: [ ["Yes", "n"], ["No", "n"] ]
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
		}
};

export default graphNodes;
