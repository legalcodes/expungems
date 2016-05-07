const disclaimer = "This website is intended to help clarify expungement in Mississippi and does not serve as a substitute for legal advice. It is a good idea to speak to a lawyer if you still have questions about your record and are unsure of how to answer any of the questions in this app. Use of this website does not create an attorney-client relationship.";

var graphNodes =  {
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
				text: "Was this your first conviction for a misdemeanor? (Are you a first time offender?)",
				options: [ ["Yes", "n6"], ["No", "n7"] ]
		},
		n6: {
				text: "Is the item you are trying to expunge a traffic violation?",
				options: [ ["Yes", "n4"], ["No", "n3"] ]
		},
		n7: {
				text: "Has it been one year since the conviction for this misdemeanor AND/OR any subsequent convictions?",
				options: [ ["Yes", "n8"], ["No", "n4"] ]
		},
		n8: {
				text: "Have you notified the DA of your petition to expunge this item? Have you demonstrated rehabilitation in court?",
				options: [ ["Yes", "n3"], ["No", "n4"] ]
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
		n12: {
				text: "",
				options: [ ["Yes", "n"], ["No", "n"] ]
		},
		n13: {
				text: "",
				options: [ ["Yes", "n"], ["No", "n"] ]
		},
		n14: {
				text: "",
				options: [ ["Yes", "n"], ["No", "n"] ]
		},
		n15: {
				text: "",
				options: [ ["Yes", "n"], ["No", "n"] ]
		},
		n16: {
				text: "",
				options: [ ["Yes", "n"], ["No", "n"] ]
		},
		n17: {
				text: "",
				options: [ ["Yes", "n"], ["No", "n"] ]
		}
};

export default graphNodes;
