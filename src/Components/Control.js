import React, { Component } from 'react';
import Search from './Search';
import Sort from './Sort';


class Control extends Component {
    render() {
        return (
            <div className="Control">
                <Search onSearchControl={this.props.onSearchApp} />
                <Sort onSortControl={this.props.onSortApp}
                        sortBy={this.props.sortBy}
                        sortValue={this.props.sortValue}
                />

            </div>
        );
    }
}

export default Control;