import React, {Component} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default class PostListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            important: false,
            liked: false
        };
        this.onImportant = this.onImportant.bind(this);
        this.onLiked = this.onLiked.bind(this);
    }

    onImportant() {
        this.setState(({important}) => ({
            important: !important
        }));
    }

    onLiked() {
        this.setState(({liked}) => ({
            liked: !liked
        }));
    }

    render() {

        const {label} = this.props;
        const {important, liked} = this.state;
        let classNames = "app-list-item d-flex justify-content-between";
        if (important) {
            classNames += ' important';
        }

        if (liked) {
            classNames += ' like';
        }

        return (
            <div className={classNames}>
                <span
                className="app-list-item-label"
                onClick={this.onLiked}>
                    {label}
                </span>
                <div className="d-flex justify-content-center align-items-center">
                    <button
                    type="button"
                    className="btn-star btn-sm"
                    onClick={this.onImportant}>
                        <FontAwesomeIcon icon={faStar} />
                    </button>
                    <button
                    type="button"
                    className="btn-trash btn-sm">
                        <FontAwesomeIcon icon={faTrashCan} />
                    </button>
                    <FontAwesomeIcon icon={faHeart} />
                </div>
            </div>
        )
    }
}