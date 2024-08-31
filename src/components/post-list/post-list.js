import React from "react";

import PostListItem from "../post-list-item";
import { ListGroup } from "reactstrap";

const PostList = ({posts, onDelete, onToggleImportant, onToggleLiked}) => {

    const elements = posts.map(item => {
        const {id, ...itemProps} = item;
        return (
            <li key={id} className="list-group-item mt-3">
                <PostListItem
                    {...itemProps}
                    onDelete={() => onDelete(id)}
                    onToggleImportant={() => onToggleImportant(id)}
                    onToggleLiked={() => onToggleLiked(id)} />
            </li>
        )
    });

    return (
        <ListGroup className="list-group">
            {elements}
        </ListGroup>
    )
}

export default PostList;