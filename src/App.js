import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import TodoList from './components/TodoList'


const API_URL = 'https://tareas-milvia.herokuapp.com'

class App extends Component {
  state = {
    tareas: []
  }

  getTodolist = () => {
    fetch(`${API_URL}/api/v1/obtener/todas/tareas`)
      .then(response => response.json())
      .then(data => this.setState({ tareas: data }))
      .catch(error => { alert('Ha ocurrido un error', error) })
  }
  componentDidMount() {
    this.getTodolist()
  }

  render() {
    return (
      <>
        <div className="App">
          <header className="App-header">
            <h1>Tarea-front</h1>
          </header>

        </div>
        <TodoList
          tareas={this.state.tareas}
        />
      </>
    )
  }

}

export default App;
