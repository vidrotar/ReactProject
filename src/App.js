import React, { Component } from 'react';
import './App.css';

const list = [
  {
    title: 'React',
    url: 'https://reactjs.org',
    author: 'Jordan Walke',
    num_comments: '3',
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: '2',
    points: 5,
    objectID: 1,
  },
];

class Developer {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getName() {
    return this.firstName + ' ' + this.lastName;
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: list,
      name: 'local',
      searchTerm: '',
    };

    // bind method to class -> a new class method
    this.onDismiss = this.onDismiss.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
  };

  // define method -> it's functionality
  onDismiss(id) {
    const isNotId = item => item.objectID !== id;
    const updatedList = this.state.list.filter(isNotId);
    this.setState({list: updatedList});
  }

  // filters list based on typed phrase
  onSearchChange(event) {
    this.setState({ searchTerm: event.target.value});
  }

  render() {
    const someone = new Developer('Jan', 'Hus');
    console.log(someone.getName());
    return (
      <div className="App">
        <form>
          <input
            type="text"
            onChange={this.onSearchChange}
          />
        </form>
        <h1>Learning React</h1>
        {this.state.list.map(item => {
          return (
            <div key={item.objectID}>
              <span>
                <a href={item.url}>{item.title}</a>
              </span>
              <span>{' ' + item.author}</span>
              <span>{' ' + item.num_comments}</span>
              <span>{' ' + item.points}</span>
              <span>
                <button
                  onClick={() => this.onDismiss(item.objectID)}
                  type="button"
                >
                  Dismiss
                </button>
              </span>
            </div>
          )
        })}
        {'Name of state: ' + this.state.name}
      </div>
    );
  }
}

export default App;
