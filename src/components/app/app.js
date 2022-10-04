import React, { Component } from 'react'
import AppHeader from '../app-header/App-header';
import SearchPanel from "../serch-panel/SearchPanel";
import PostStatusFilter from '../post-status-filter/PostStatusFilter';
import PostList from '../post-list/PostList';
import PostAddForm from '../post-add-form/PostAddForm';
import './app.css';
import styled from "styled-components";

const AppBlock = styled.div`
  margin: 0 auto;
  max-width: 800px;
`

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { label: 'Going to learn React', important: true, like: false, id: 1 },
        { label: 'That is so good', important: false, like: false, id: 2 },
        { label: 'I need a break...', important: false, like: false, id: 3 }
      ],
      term: '',
      filter: ''
    };
    this.deleteItem = this.deleteItem.bind(this);
    this.addItem = this.addItem.bind(this);
    this.onToggleImpotrant = this.onToggleImpotrant.bind(this);
    this.onToggleLiked = this.onToggleLiked.bind(this);
    this.onUpdateSearch = this.onUpdateSearch.bind(this);
    this.filterPost = this.filterPost.bind(this);

    this.maxId = 4;
  }

  deleteItem(id) {
    this.setState(({ data }) => {
      const index = data.findIndex(elem => elem.id === id);

      const before = data.slice(0, index);
      const after = data.slice(index + 1);

      const newArr = [...before, ...after];

      return {
        data: newArr
      }
    });
  }

  addItem(body) {
    const newItem = {
      label: body,
      important: false,
      id: this.maxId++
    }

    this.setState(({ data }) => {
      const newArr = [...data, newItem];
      return {
        data: newArr
      }
    });
  }

  onToggleImpotrant(id) {
    this.setState(({ data }) => {
      const index = data.findIndex(elem => elem.id === id);
      const old = data[index];
      const newItem = { ...old, important: !old.important };
      const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
      return {
        data: newArr
      }
    });
  }

  onToggleLiked(id) {
    this.setState(({ data }) => {
      const index = data.findIndex(elem => elem.id === id);
      const old = data[index];
      const newItem = { ...old, like: !old.like };
      const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
      return {
        data: newArr
      }
    });
  }

  searchPost(items, term) {
    if (term.length === 0) {
      return items
    }

    return items.filter((item) => {
      return item.label.indexOf(term) > -1;
    });
  }

  filterPost(items, filter) {
    if (filter === 'like') {
      return items.filter(item => item.like);
    } else {
      return items
    }
  }

  onUpdateSearch(term) {
    this.setState({ term });
  }

  render() {
    const { data, term, filter } = this.state;

    const liked = data.filter(item => item.like).length;
    const allPosts = data.length;

    const visiblePost = this.filterPost(this.searchPost(data, term), filter);

    return (
      <AppBlock>
        <AppHeader
          liked={liked}
          allPosts={allPosts}
        />
        <div className='search-panel d-flex'>
          <SearchPanel
            onUpdateSearch={this.onUpdateSearch}
          />
          <PostStatusFilter />
        </div>
        <PostList
          posts={visiblePost}
          onDelete={this.deleteItem}
          onToggleImpotrant={this.onToggleImpotrant}
          onToggleLiked={this.onToggleLiked} />
        <PostAddForm
          onAdd={this.addItem} />
      </AppBlock >
    )
  }
}
