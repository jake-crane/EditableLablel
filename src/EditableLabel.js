import React, { Component } from 'react';

export default class EditableList extends Component {
    state = {
        value: "Click here to edit the text",
        tempValue: "",
        editable: false
    };
    onClick() {
        this.setState({
            editable: !this.state.editable,
            tempValue: this.state.value
        });
    }

    onBlur() {
        this.setState({
            value: this.state.tempValue,
            editable: false
        });
    }

    handleKeyDown(e) {
        switch (e.keyCode) {
            case 13:
                this.setState({
                    value: e.target.value,
                    editable: false
                });
                break;
            case 27:
                this.setState({
                    editable: false
                });
                break;
            default:
        }
    }

    handleChange(e) {
        this.setState({
            tempValue: e.target.value
        });
    }

    render() {
        if (this.state.editable)
            return (
                <input type="text" value={this.state.tempValue} onKeyDown={this.handleKeyDown.bind(this)} onBlur={this.onBlur.bind(this)} onChange={this.handleChange.bind(this)} />
            );
        else
            return (
                <span onClick={this.onClick.bind(this)}>{this.state.value}</span>
            );
    }
}
