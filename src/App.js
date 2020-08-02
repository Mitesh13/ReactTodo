import React, { Component } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './components/layout/Header'
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'
import About from './components/pages/About'
import {v4 as uuid} from 'uuid'

// import axios from 'axios'
import './App.css';
 
class App extends Component {
  state = {
    todos:[
      
    ]
  }
  hi = []
  componentDidMount()
  {
    
  }

  //Toggling
  markComplete = (id) =>{
    this.setState({todos:this.state.todos.map(todo=>{
      if(todo.id === id)
      {
        todo.completed = !todo.completed
      }
      return todo
    })})
  }

  delTodo = id =>{
    
    
    this.setState({todos:[...this.state.todos.filter(todo=>todo.id!==id)]})

    
    // console.log(this.state.todos);
  }

  addTodo = (title) =>{
    this.setState({todos: [...this.state.todos,{
      id:uuid(),
      title,
      completed:false,
    }]})
  }

  render()
  {
    //console.log(this.state.todos);

    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header/>
            <Route exact path="/" render={props=>(
              <React.Fragment>
                <AddTodo addTodo={this.addTodo}/>
                <Todos todos={this.state.todos} delTodo={this.delTodo} markComplete={this.markComplete}/>
              </React.Fragment>
            )}/>

            <Route path="/about" component={About}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
