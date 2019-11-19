import React, { Component } from 'react';
import Item from './Item';

class List extends Component {
    _onChangeStatus = (id) => {
        this.props.onChangeStatusApp(id)
        
    }
    render() {
        const { tasksApp } = this.props

        let elmTask = tasksApp.map((task, index) => {
            return (
                <Item key={index}
                taskList = {task}
                index = {index}
                onChangeStatusList = {this._onChangeStatus}
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
                                />
                            </td>
                            <td>

                                <select name="filterStatus" className="form-control"
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