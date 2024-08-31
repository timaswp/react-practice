import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const PostListItem = ({label, onDelete, onToggleImportant, onToggleLiked, important, liked}) => {
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
            onClick={onToggleLiked}>
                {label}
            </span>
            <div className="d-flex justify-content-center align-items-center">
                <button
                type="button"
                className="btn-star btn-sm"
                onClick={onToggleImportant}>
                    <FontAwesomeIcon icon={faStar} />
                </button>
                <button
                type="button"
                className="btn-trash btn-sm"
                onClick={onDelete}>
                    <FontAwesomeIcon icon={faTrashCan} />
                </button>
                <FontAwesomeIcon icon={faHeart} />
            </div>
        </div>
    )
}

export default PostListItem;