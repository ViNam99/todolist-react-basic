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
      isDisplayForm: false,
      tasksEditing: null
    }
  }
  //Gán task sâu khi load 
  componentDidMount() {
    if (localStorage && localStorage.getItem('tasks')) {
      let tasksObj = JSON.parse(localStorage.getItem('tasks'));
      this.setState({
        tasks: tasksObj
      })
    }
  }
  //Generate ID
  s4() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  }
  generateID() {
    return this.s4() + this.s4() + '-' + this.s4() + this.s4() + '-' + this.s4() + this.s4() + '-' + this.s4() + this.s4() + '-' + this.s4();
  }

  //Thay đổi trạng thái isDisplayForm 
  onChangeDisplayForm = () => {
    const { isDisplayForm , tasksEditing} = this.state
    if(isDisplayForm &&tasksEditing !== null ){
      this.setState({
        isDisplayForm:true,
        tasksEditing:null
      })
    }else{
      this.setState({
        isDisplayForm: !isDisplayForm,
        tasksEditing:false
      })
    }
  
  }
  //Close Form in taskForm
  _onCloseForm = (value) => {
    if (value) {
      this.setState({
        isDisplayForm: false,
      })
    }
  }
  _onShowForm = () => {
    this.setState({
      isDisplayForm: true
    })
  }
  // Thêm mới một công việc
  _onAddTask = (data) => {

    let { tasks } = this.state
    if (data.id === '') {
      //Trường hợp thêm
      data.id = this.generateID()
      tasks.push(data)
    } else {
      //Trường hợp sửa
      let index = this.findIndex(data.id);
      tasks[index] = data
    }

    this.setState({
      tasks: tasks,
      tasksEditing: null
    })

    localStorage.setItem('tasks', JSON.stringify(tasks))
  }
  //Tìm vị trí 
  findIndex = (id) => {
    let { tasks } = this.state
    let result = -1;
    tasks.forEach((task, index) => {
      if (task.id === id) {
        result = index
      }
    })
    return result;
  }

  //Thay đổi trạng thái
  _onChangeStatus = (id) => {
    let { tasks } = this.state
    let index = this.findIndex(id);
    if (index !== -1) {
      tasks[index].status = !tasks[index].status;
      this.setState({
        tasks
      })
      localStorage.setItem('tasks', JSON.stringify(tasks))
    }

  }

  //Xóa một công việc
  _onDeleteTask = (id) => {
    let { tasks } = this.state
    let index = this.findIndex(id)
    if (index !== -1) {
      tasks.splice(index, 1);
      this.setState({
        tasks
      })
      localStorage.setItem('tasks', JSON.stringify(tasks))
    }
  }

  _onUpdateTask = (id) => {
    const { tasks } = this.state;
    let index = this.findIndex(id);
    let tasksEditing = tasks[index]
    if (index !== -1) {
      this.setState({
        tasksEditing
      })
      this._onShowForm()
    }
  }

  render() {
    const { tasks, isDisplayForm, tasksEditing } = this.state



    let elmTaskForm = isDisplayForm ? <TaskForm
      onCloseFormApp={this._onCloseForm}
      onAddTaskApp={this._onAddTask}
      tasksEditing={tasksEditing}
    ></TaskForm> : ''
    return (
      <div className="App">
        <div className="container">
          <div className="text-center">
            <h1>Quản Lý Công Việc</h1> <hr />
          </div>

          <div className="row">

            <div className={isDisplayForm ? "col-xs-4 col-sm-4 col-md-4 col-lg-4" : ''} >
              {elmTaskForm}
            </div>
            <div className={isDisplayForm ? "col-xs-8 col-sm-8 col-md-8 col-lg-8" : "col-xs-12 col-sm-12 col-md-12 col-lg-12"} >
              <button type="button" className="btn btn-primary" onClick={this.onChangeDisplayForm}>
                <span className="fas fa-plus" > &nbsp; Thêm công việc</span>
              </button>&nbsp;
              <div className="row mt-15">
                <Control
                />
              </div>
              <div className="row mt-15">

                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <List
                    tasksApp={tasks}
                    onChangeStatusApp={this._onChangeStatus}
                    onDeleteTaskApp={this._onDeleteTask}
                    onUpdateTaskApp={this._onUpdateTask}
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