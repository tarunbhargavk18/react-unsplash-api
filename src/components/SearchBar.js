import React, { Component } from 'react'

export default class SearchBar extends Component {
    state = {term:''}
    
    inputSubmit = (e)=>{
        e.preventDefault();
        this.props.submitted(this.state.term);
    }
    render() {
        return (
            <div className='card p-2 m-2'>
                <form class="form-group" onSubmit={this.inputSubmit}>
                    <label htmlFor="search" className="font-weight-bold">Search:</label>
                    <input className="form-control" name="search" type="text" value={this.state.term} onChange={(e)=>{this.setState({term:e.target.value})}}/>
                </form>
            </div>
        )
    }
}
