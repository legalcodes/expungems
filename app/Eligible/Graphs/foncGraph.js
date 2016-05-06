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
				text: "What was the reason you were never convicted for the item you are trying to expunge?",
				options: [ ["Case dismissed OR charges were dropped OR no disposition", "n3"], ["Entered plea of not guilty, but court withheld acceptance based on conditions", "n6"] ]
		},
		n6: {
				text: "Have you already expunged an item for which you entered a guilty plea, but the court withheld acceptance?",
				options: [ ["Yes", "n4"], ["No", "n7"] ]
		},
		n7: {
				text: "Have you already completed the conditions imposed by the court?",
				options: [ ["Yes", "n8"], ["No", "n4"] ]
		},
		n8: {
				text: "Have you ever been convicted of a felony?",
				options: [ ["Yes", "n4"], ["No", "n9"] ]
		},
		n9: {
				text: "Have you ever been *charged* with a DUI?",
				options: [ ["Yes", "n4"], ["No", "n10"] ]
		},
		n10: {
				text: "Have you ever been *charged* with distribution or manufacture of a controlled substance?",
				options: [ ["Yes", "n12"], ["No", "n11"] ]
		},
		n11: {
				text: "Have you ever been *charged* with possession of 1 or more kilograms of marijuana?",
				options: [ ["Yes", "n4"], ["No", "n3"] ]
		},
		n12: {
				text: "Was the charge concerning one ounce or less of marijuana?",
				options: [ ["Yes", "n11"], ["No", "n4"] ]
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
