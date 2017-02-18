import React from 'react';
import Card from './Card';

export default function List(props) {

    return (

        <div className="list" title={props.title}>
            {props.title}
            {props.cards}

            <form onSubmit={props.onAddSubmit}>
                <input type="text" placeholder="Enter here" onChange={props.onAddInputChanged}></input>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
