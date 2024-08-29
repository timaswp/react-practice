import React from "react";

import PostListItem from "../post-list-item";
import { ListGroup } from "reactstrap";

const PostList = ({posts, onDelete}) => {

    const elements = posts.map(item => {
        const {id, ...itemProps} = item;
        return (
            <li key={id} className="list-group-item">
                <PostListItem
                    {...itemProps}
                    onDelete={() => onDelete(id)} />
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