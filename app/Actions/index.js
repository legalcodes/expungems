export function selectEvent(event) {
    console.log('An event has been selected: ', event.title );
    return {
        type: 'EVENT_SELECTED',
        payload: event
    };
}
