import React, { Component } from 'react';
import Item from './Item';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterName: '',
            filterStatus: -1
        }
    }
    _onChangeStatus = (id) => {
        this.props.onChangeStatusApp(id)

    }

    _onDeleteTask = (id) => {
        this.props.onDeleteTaskApp(id)
    }

    _onUpdateTask = (id) => {
        this.props.onUpdateTaskApp(id)
    }

    onHandleChange = (e) => {
        const { filterName, filterStatus } = this.state
        let target = e.target;
        let name = target.name;
        let value = target.value;
        this.props.onFilterApp
            (
                name === 'filterName' ? value : filterName,
                name === 'filterStatus' ? value : filterStatus
            )

        this.setState({
            [name]: value
        })
    }
    render() {
        const { tasksApp } = this.props
        const { filterStatus, filterName } = this.state

        let elmTask = tasksApp.map((task, index) => {
            return (
                <Item key={index}
                    taskList={task}
                    index={index}
                    onChangeStatusList={this._onChangeStatus}
                    onDeleteTaskList={this._onDeleteTask}
                    onUpdateTaskList={this._onUpdateTask}
                >
                </Item>
            );
        })
        return (
            <div className="List">
                <table className="table  table-bordered">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Tên</th>
                            <th>Trạng thái</th>
                            <th>Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td>
                                <input
                                    type="text"
                                    id="txtSearch"
                                    name="filterName"
                                    value={filterName}
                                    onChange={this.onHandleChange}
                                />
                            </td>
                            <td>

                                <select name="filterStatus" className="form-control"
                                    value={filterStatus}
                                    onChange={this.onHandleChange}
                                >
                                    <option value={-1}>Tất cả</option>
                                    <option value={1}>Kích hoạt</option>
                                    <option value={0}>Ẩn</option>
                                </select>

                            </td>

                        </tr>
                        {elmTask}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default List;