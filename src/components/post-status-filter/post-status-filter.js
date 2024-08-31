import React, {Component} from "react";
// import { Button } from 'reactstrap';

export default class PostStatusFilterr extends Component {
    constructor(props) {
        super(props);
        this.buttons = [
            {name: 'all', label: 'All'},
            {name: 'liked', label: 'Liked'}
        ]
    }

    render() {
        const buttons = this.buttons.map(({name, label}) => {
            const {filter, onFilterSelect} = this.props;
            const active = filter === name;
            const clazz = active ? "btn-info" : "btn-outline-secondary";
            return (
                <button
                    key={name}
                    type="button"
                    className={`btn ${clazz}`}
                    onClick={() => onFilterSelect(name)}>{label}</button>
            )
        });
        return (
            <div className="btn-group">
                {/* <Button color="info">All</Button> */}
                {buttons}
            </div>
        )
    }
}