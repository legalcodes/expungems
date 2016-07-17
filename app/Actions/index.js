export function selectEvent (event) {
		// must return an action, an object with a 'type' property
		return {
				type: 'EVENT_SELECTED',
				payload: event
		};
}
