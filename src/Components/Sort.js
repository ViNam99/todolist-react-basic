import React, { Component } from 'react';
import './Sort.css'
class Sort extends Component {
    render() {
        return (
            <div className="Sort">
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <div className="dropdown">
                        <button
                            className="btn btn-success dropdown-toggle"
                            type="button"
                            id="dropdownmenu1"
                            data-toggle="dropdown"
                        >
                            Sắp xếp &nbsp; <span className="fas fa-sort"></span>
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownmenu1">
                            <label>Sort by Name</label>
                            <li >
                                <p role="button"

                                >
                                    <span className="fas fa-sort-alpha-down">  &nbsp; A-Z</span>

                                </p>
                            </li>
                            <li onClick={() => this.onClick('name', -1)}>
                                <p role="button"
                                >
                                    <span className="fas fa-sort-alpha-up">&nbsp; Z-A</span>
                                </p>
                            </li>

                            <li role="separator" className="divider"></li>

                            <label>Sort by status</label>
                            <li >
                                <p role="button"

                                >
                                    Kích Hoạt
                                </p>
                            </li>
                            <li >
                                <p role="button"
                                >
                                    Ẩn
                                </p>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        );
    }
}

export default Sort;