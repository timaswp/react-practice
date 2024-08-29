import React, {Component} from "react";

import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import PostStatusFilter from "../post-status-filter";
import PostList from "../post-list";
import PostAddForm from "../post-add-form/post-add-form";

import "./app.css";
import "../app-header/app-header.css";
import "../post-add-form/post-add-form.css";
import "../post-list/post-list.css";
import "../post-list-item/post-list-item.css";
import "../post-status-filter/post-status-filter.css";
import "../search-panel/search-panel.css";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {label: 'Going to learn React', important: true, id: 1},
                {label: 'That is so good', important: false, id: 2},
                {label: 'I need a break...', important: false, id: 3}
            ]
        }
        this.deletePost = this.deletePost.bind(this);
        this.addPost = this.addPost.bind(this);

        this.maxId = 4;
    }

    deletePost(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);

            const newArray = [...data.slice(0, index), ...data.slice(index + 1)];

            return {
                data: newArray
            }
        });
    }

    addPost(body) {
        const newPost = {
            label: body,
            important: false,
            id: this.maxId++
        };  
        this.setState(({data}) => {
            const newArray = [...data, newPost];

            return {
                data: newArray
            }
        });
    }

    render() {
        return (
            <div className="app">
                <AppHeader/>
                <div className="search-panel d-flex">
                    <SearchPanel/>
                    <PostStatusFilter/>
                </div>
                <PostList
                    posts={this.state.data}
                    onDelete={this.deletePost}/>
                <PostAddForm
                    onAdd={this.addPost}/>
            </div>
        )
    }
}