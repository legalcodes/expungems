import React, { Component } from 'react';

export default class EventList extends Component {
		renderList() {
				return this.props.events.map((event) => {
						return (
										<li key={event.title} className="list-group-item">{event.title}</li>
						);
				});
		}

		render () {
				return (
								<ul className="list-group col-sm-4">
										{this.renderList()}
								</ul>
				);
		}
}
