var React = require('react');
var ReactDOM = require('react-dom');

var Card = require('./card');

var List = function(props) {
    return (
        <div className="list">
            <div className="list-title">{props.title}</div>
            <div className="card-content">{props.Card}</div>
        </div>
        <form className="text-input">
            <input text="">
        </form>
    );
};


//var List = React.createClass({
//    render: function() {
//        var cardList = [];
//        for (var i = 0; i < 3; i++) {
//            cardList.push(<Card />);
//        }
//        return (
//            <div className="card-list">
//                {cardList}
//            </div>
//        );
//    }
//});

module.exports = List;
