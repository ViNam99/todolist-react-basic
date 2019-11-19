import React, { Component } from 'react';
import './App.css';
import TaskForm from './Components/TaskForm';
import Control from './Components/Control';
import List from './Components/List';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
    }
  }
generateData = () => {
  let tasks = [
    {
      id: 1,
      taskName:'học lập trình',
      status : true
    },
    {
      id: 2,
      taskName:'học English',
      status : true
    },
    {
      id: 3,
      taskName:'ngủ',
      status : false
    }
  ]
  this.setState({
    tasks : tasks
  })
  localStorage.setItem('tasks' , JSON.stringify(tasks))
}
componentDidMount() {
  if(localStorage && localStorage.getItem('tasks')){
    let tasksObj = JSON.parse(localStorage.getItem('tasks'));
    this.setState({
      tasks : tasksObj
    })
  }
}
  render() {
    const {tasks} = this.state
    return (
      <div className="App">
        <div className="container">
          <div className="text-center">
            <h1>Quản Lý Công Việc</h1> <hr />
          </div>

          <div className="row">

            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4" >
              <TaskForm></TaskForm>
            </div>
            <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8" >
              <button type="button" className="btn btn-primary">
                <span className="fas fa-plus"> &nbsp; Thêm công việc</span>
              </button>&nbsp;
              <button type="button" className="btn btn-success" onClick = {this.generateData}>
                <span className="fas fa-plus"> &nbsp; Generate data</span>
              </button>&nbsp;
              <div className="row mt-15">
                <Control
                />
              </div>
              <div className="row mt-15">

                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <List
                    tasksApp = {tasks}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;