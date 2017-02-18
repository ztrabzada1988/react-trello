import React from 'react';

import List from './list';
import Card from './card';

export default class listContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: "",
            cards: [
                <Card text="this is card 1" />,
                <Card text="this card 2" />,
                <Card text="this card 3" />
            ]
        }

        this.onAddInputChanged = this.onAddInputChanged.bind(this);
        this.onAddSubmit = this.onAddSubmit.bind(this);
    }

    onAddInputChanged(event) {
        event.preventDefault();
        console.log("Am i m changing");

    }

    onAddSubmit(event) {
        event.preventDefault();
        console.log("hello am i logged on addsubmit submisssio");
    }

    render() {

        return (
            <List cards={this.state.cards} onChange={this.onAddInputChanged} onSubmit={this.onAddSubmit} />
        );
    }
}
