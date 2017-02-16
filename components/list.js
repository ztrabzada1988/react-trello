import React from 'react';

import Card from './card';

export default class List extends React.Component {
    constructor(props) {
        super(props);

        this.onAddInputChanged = this.onAddInputChanged.bind(this);
        this.onAddSubmit = this.onAddSubmit.bind(this);
    }


    onAddInputChanged(event) {
        event.preventDefault();
        onAddSubmit(props);
    }

    onAddSubmit(event) {
        event.preventDefault();
        console.log("hello am i logged");
    }


    render() {
        return (
            <div className="list">
                <div className="title">{this.props.title}</div>
                <Card text="I am card 1" />
                <Card text="I am card 2" />
                <Card text="I am card 3" />

                <form>
                    <input onChange={this.onAddInputChanged} type="text" placeholder="Add a Card here"></input>
                    <button type="button" onSubmit={this.onAddSubmit}>Submit</button>
                </form>
            </div>
        );
    }
}
