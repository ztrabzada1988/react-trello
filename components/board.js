var React = require('react');
var ReactDOM = require('react-dom');

var List = require('./list');


var Board = function(props) {
    return (
        <div className="board">
            <List title="List one"
                  Card="hello i am the first one" />
            <List title="List two">
                  Card="i am numbe tow" />
            <List title="List three"
                  Card="i am three" />
        </div>
    );
};

//var Board = React.createClass({
//    render: function() {
//        var listBoard = [];
//        for (var i =0; i < 3; i++) {
//            listBoard.push(<List />);
//        }
//        return (
//            <div className="board-list">
//                {listBoard}
//            </div>
//        );
//    }
//});

module.exports = Board;
