var React = require('react');
var ReactDOM = require('react-dom');

var Card = function(props) {
    return (
        <div className="text">{props.text}</div>
    )
}

// adding to components

//var Card = React.createClass({
//    render: function() {
//        return (
//            <div className="card-text">
//                This is a Card
//            </div>
//        );
//    }
// })

module.exports = Card;
