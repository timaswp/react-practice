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
                {label: 'Going to learn React', important: true, liked: false, id: 1},
                {label: 'That is so good', important: false, liked: false, id: 2},
                {label: 'I need a break...', important: false, liked: false, id: 3}
            ],
            term: '',
            filter: 'all'
        }
        this.deletePost = this.deletePost.bind(this);
        this.addPost = this.addPost.bind(this);
        this.onToggleImportant = this.onToggleImportant.bind(this);
        this.onToggleLiked = this.onToggleLiked.bind(this);
        this.onUpdateSearch = this.onUpdateSearch.bind(this);
        this.onFilterSelect = this.onFilterSelect.bind(this);

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

    togglePostProperty(arr, id, propName) {
        const index = arr.findIndex(elem => elem.id === id);
        const oldItem = arr[index];
        const newItem = {...oldItem, [propName]: !oldItem[propName]};
        
        return [...arr.slice(0, index), newItem, ...arr.slice(index + 1)];
    }

    onToggleImportant(id) {
        this.setState(({data}) => {
            return {
                data: this.togglePostProperty(data, id, 'important')
            }
        });
    }

    onToggleLiked(id) {
        this.setState(({data}) => {
            return {
                data: this.togglePostProperty(data, id, 'liked')
            }
        });
    }

    searchPost(items, term) {
        if (term.length === 0) {
            return items
        }

        term = term.toLowerCase();

        return items.filter(item => {
            return item.label.toLowerCase().indexOf(term) > -1
        });
    }

    filterPosts(items, filter) {
        if (filter === 'liked') {
            return items.filter(item => item.liked)
        } else {
            return items
        }
    }

    onUpdateSearch(term) {
        this.setState({term});
    }

    onFilterSelect(filter) {
        this.setState({filter});
    }

    render() {
        const {data, term, filter} = this.state;

        const likedPosts = data.filter(item => item.liked).length;
        const allPosts = data.length;

        const visiblePosts = this.filterPosts(this.searchPost(data, term), filter);

        return (
            <div className="app">
                <AppHeader
                    likedPosts={likedPosts}
                    allPosts={allPosts}/>
                <div className="search-panel d-flex">
                    <SearchPanel
                        onUpdateSearch={this.onUpdateSearch}/>
                    <PostStatusFilter
                        filter={filter}
                        onFilterSelect={this.onFilterSelect}/>
                </div>
                <PostList
                    posts={visiblePosts}
                    onDelete={this.deletePost}
                    onToggleImportant={this.onToggleImportant}
                    onToggleLiked={this.onToggleLiked}/>
                <PostAddForm
                    onAdd={this.addPost}/>
            </div>
        )
    }
}