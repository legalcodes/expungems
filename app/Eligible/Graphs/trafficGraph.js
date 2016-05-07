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
				text: "Did you plead not guilty to the charge?",
				options: [ ["Yes", "n6"], ["No", "n4"] ]
		},
		n6: {
				text: "Were you convicted of the charge?",
				options: [ ["Yes", "n7"], ["No", "n4"] ]
		},
		n7: {
				text: "Do you now have a valid driver\'s license or permit?",
				options: [ ["Yes", "n8"], ["No", "n4"] ]
		},
		n8: {
				text: "Did you have a traffic offense conviction within the 3 years before the current offense?",
				options: [ ["Yes", "n9"], ["No", "n4"] ]
		},
		n9: {
				text: "Was t he earlier conviction entered before October 1, 2002?",
				options: [ ["Yes", "n10"], ["No", "n4"] ]
		},
		n10: {
				text: "Had you, prior to the current offense, completed a traffic safety violator course within 3 years of the current offense?",
				options: [ ["Yes", "n11"], ["No", "n4"] ]
		},
		n11: {
				text: "Can you swear under oath that the current offense is your first conviction in more than 3 years OR since October 1, 2002, whichever is the lesser period of time?",
				options: [ ["Yes", "n12"], ["No", "n4"] ]
		},
		n12: {
				text: "Can you swear under oath that you are not now in the process of taking a traffic safety violator course?",
				options: [ ["Yes", "n13"], ["No", "n4"] ]
		},
		n13: {
				text: "Can you swear under oath that you have not completed a traffic safety violator course that is not yet reflected on your driving record?",
				options: [ ["Yes", "n14"], ["No", "n4"] ]
		},
		n14: {
				text: "Was the offense charged as a misdemeanor?",
				options: [ ["Yes", "n15"], ["No", "n4"] ]
		},
		n15: {
				text: "Did you pay all applicable fines, court costs and assessments upon conviction?",
				options: [ ["Yes", "n16"], ["No", "n4"] ]
		},
		n16: {
				text: "Did you pay the additional fee to participate in the traffic safety violator course?",
				options: [ ["Yes", "n17"], ["No", "n4"] ]
		},
		n17: {
				text: "Did you successfully complete the traffic safety violator course within 45 days of your conviction?",
				options: [ ["Yes", "n3"], ["No", "n4"] ]
		}
};

export default graphNodes;
