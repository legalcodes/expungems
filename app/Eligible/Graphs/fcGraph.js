const disclaimer = "This website is intended to help clarify expungement in Mississippi and does not serve as a substitute for legal advice. It is a good idea to speak to a lawyer if you still have questions about your record and are unsure of how to answer any of the questions in this app. Use of this website does not create an attorney-client relationship.";

var graphNodes =  {
		n1: {
				text: disclaimer,
				options: [ ["I accept", "n3"], ["I do not accept", "n2"] ]
		},
		n2: {
				text: "If you do not accept these terms, you cannot use this tool.",
				options: [ ["Back to start", "n1"] ]
		},
		n3: {
				text: "Have you been convicted of one of these six felonies? 1. Felony Worthless Check 2. Possession of controlled substance 3. False Pretense 4. Grand Larceny 5. Malicious Mischief 6. Shoplifting",
				options: [ ["Yes", "n7"], ["No", "n6"] ]
		},
		n4: {
				text: "Based on your responses, the item you are trying to expunge is likely eligible for expungement!",
				options: [ ["Back to start", "n3"] ]
		},
		n5: {
				text: "If you do not accept these terms, you cannot use this tool.",
				options: [ ["Back to start", "n1"] ]
		},
		n6: {
				text: "Based on your responses, the item you are trying to expunge is likely not eligible for expungement.",
				options: [ ["Back to start", "n3"] ]
		},
		n7: {
				text: "Has it been five years since you completed all the terms and conditions of your sentence?",
				options: [ ["Yes", "n8"], ["No", "n6"] ]
		},
		n8: {
				text: "Have you already received an expungement for any of these six felonies? 1. Felony Worthless Check 2. Possession of controlled substance 3. False Pretense 4. Grand Larceny 5. Malicious Mischief 6. Shoplifting",
				options: [ ["Yes", "n6"], ["No", "n4"] ]
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
