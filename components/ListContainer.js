import React from 'react';
import List from './List';
import Card from './Card';

export default class ListContainer extends React.Component {

    constructor(props) {
        super(props);

        this.onAddInputChanged = this.onAddInputChanged.bind(this);
        this.onAddSubmit = this.onAddSubmit.bind(this);

        this.state = {
            text: '',
            cards: [<Card text="I am card 1" />,
                    <Card text="I am card 2" />,
                    <Card text="I am card 3" />
                   ]
        }
    }

    onAddInputChanged(event) {
        console.log("Did I execute?");
    }

    onAddSubmit(event) {
        event.preventDefault();
        console.log("Did submit work?");
    }


    render() {

        return (
            <List cards={this.state.cards} onChange={this.onAddInputChanged} onSubmit={this.onAddSubmit} />
        );
    }
}
