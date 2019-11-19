import React, { Component } from 'react';
import './Item.css'
class Item extends Component {
    _onChangeStatus = ()=>{
        const { taskList } = this.props    
        this.props.onChangeStatusList(taskList.id)
        
    }
  
    render() {
        const { taskList, index } = this.props        
        return (
            <tr>
                <td>{index}</td>
                <td>{taskList.taskName}</td>
                <td className="text-center">
                    <span className={taskList.status === true ? 'label label-success' : 'label label-danger'}
                    onClick = {this._onChangeStatus}
                    >
                        {taskList.status === true ? 'Kích hoạt' : 'Ẩn'}
                    </span>
                </td>
                <td className="text-center">
                    <button type="submit" className="btn btn-warning" >
                        <span className="fas fa-pen">&nbsp; Sửa</span>
                    </button> &nbsp;
                        <button type="submit" className="btn btn-danger">
                        <span className="fas fa-times" > &nbsp;Hủy bỏ</span>
                    </button>
                </td>
            </tr>

        );
    }
}

export default Item;