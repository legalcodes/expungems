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
				text: "Was your name or other identification used without your consent or authorization by another person?",
				options: [ ["Yes", "n6"], ["No", "n4"] ]
		},
		n6: {
				text: "Did the use of your name or identification result in charges, an arrest record, or a conviction on the record of your name or other identification?",
				options: [ ["Yes", "n3"], ["No", "n4"] ]
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
