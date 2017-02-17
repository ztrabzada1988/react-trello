import React from 'react';

import Card from './card';

export default function List(props) {

    return (
        <div className="list" title={props.title}>
            {props.title}
            {props.cards}

            <form onSubmit={this.onAddSubmit}>
                <input onChange={this.onAddInputChanged} type="text" placeholder="Add a Card here"></input>
                <button type="submit" onSubmit={this.onAddSubmit}>Submit</button>
            </form>

        </div>
    );
}
