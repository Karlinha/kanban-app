import React from 'react';
import Notes from './Notes';
import uuid from 'uuid';

export default class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			notes: [
			{
				id: uuid.v4(),
				task: 'Learn React'
			},
			{
				id: uuid.v4(),
				task: 'Do Laundry'
			}]
		};
	}

	render() {
		const {notes} = this.state;
		return (
			<div>
				<button onClick={this.addNote} >+</button>
				<Notes notes={notes} />
			</div>
		);		
	}


	addNote = () => {
		this.setState({
			notes: this.state.notes.concat([
				{
					id: uuid.v4(),
					task: 'New Task'
				}
			])
		});
	}
}
