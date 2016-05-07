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
				options: [ ["Case dismissed OR charges dropped OR no disposition", "n6"], ["Entered guilty plea, but court withheld acceptance based on conditions.", "n10"] ]
		},
		n6: {
				text: "Were you ever formally charged for this item?",
				options: [ ["Yes", "n7"], ["No", "n9"] ]
		},
		n7: {
				text: "Have you ever been prosecuted in court for the charge?",
				options: [ ["Yes", "n8"], ["No", "n3"] ]
		},
		n8: {
				text: "Was the case dismissed?",
				options: [ ["Yes", "n3"], ["No", "n4"] ]
		},
		n9: {
				text: "Has it been 12 months since the arrest?",
				options: [ ["Yes", "n3"], ["No", "n4"] ]
		},
		n10: {
				text: "Have you already expunged an item for which you entered a guilty plea, but the court withheld acceptance?",
				options: [ ["Yes", "n4"], ["No", "n11"] ]
		},
		n11: {
				text: "Have you already completed the conditions imposed by the court?",
				options: [ ["Yes", "n12"], ["No", "n4"] ]
		},
		n12: {
				text: "Have you ever been convicted of a felony?",
				options: [ ["Yes", "n4"], ["No", "n13"] ]
		},
		n13: {
				text: "Have you ever been *charged* with a DUI?",
				options: [ ["Yes", "n4"], ["No", "n14"] ]
		},
		n14: {
				text: "Have you ever been *charged* with distribution or manufacture of a controlled substance?",
				options: [ ["Yes", "n16"], ["No", "n15"] ]
		},
		n15: {
				text: "Have you ever been *charged* with possession of 1 or more kilograms of marijuana?",
				options: [ ["Yes", "n4"], ["No", "n3"] ]
		},
		n16: {
				text: "Was the charge concerning one ounce or less of mariajuan?",
				options: [ ["Yes", "n15"], ["No", "n3"] ]
		},
		n17: {
				text: "",
				options: [ ["Yes", "n"], ["No", "n"] ]
		}
};

export default graphNodes;
