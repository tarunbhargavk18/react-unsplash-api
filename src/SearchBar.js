import React, { Component } from 'react'

export default class SearchBar extends Component {
    state = {term:''}
    
    inputSubmit = (e)=>{
        e.preventDefault();
        this.props.submitted(this.state.term);
    }
    render() {
        return (
            <div>
                <form class="form-group" onSubmit={this.inputSubmit}>
                    <label htmlFor="search">Search:</label>
                    <input className="form-control" name="search" type="text" value={this.state.term} onChange={(e)=>{this.setState({term:e.target.value})}}/>
                </form>
            </div>
        )
    }
}
