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
				text: "Were you convicted of a DUI OR were you convicted of being intoxicated under the age of 21?",
				options: [ ["Yes", "n6"], ["No", "n4"] ]
		},
		n6: {
				text: "Do you have any other DUI conviction or pending case?",
				options: [ ["Yes", "n4"], ["No", "n7"] ]
		},
		n7: {
				text: "Were you the holder of a commercial driving license or commercial learning permit at the time?",
				options: [ ["Yes", "n4"], ["No", "n8"] ]
		},
		n8: {
				text: "Have you completed all the terms and conditions of the sentence imposed by the conviction?",
				options: [ ["Yes", "n9"], ["No", "n4"] ]
		},
		n9: {
				text: "Has it been more than 5 years since you completed all terms and conditions of your sentence?",
				options: [ ["Yes", "n10"], ["No", "n4"] ]
		},
		n10: {
				text: "Did you refuse to submit to blood or breath testing?",
				options: [ ["Yes", "n4"], ["No", "n11"] ]
		},
		n11: {
				text: "Was your BAC below .16%?",
				options: [ ["Yes", "n4"], ["No", "n12"] ]
		},
		n12: {
				text: "Have you provided the court with justification for expunging this item?",
				options: [ ["Yes", "n3"], ["No", "n4"] ]
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
