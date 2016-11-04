import React, { Component, PropTypes } from 'react'
import utils from './utils.js';

export default class extends React.Component {
	constructor(props) {
    	super(props)
    	let data = false
    	if(props.data){
    		data = props.data
    	}
    	this.state = {
    		data: data
    	}
  	}

    getDate(date){
        return date.split("T")[0]
    }

	render() {
		return (
			<article className="post">
                <a target="_blank" href={this.state.data.url} title={this.state.data.title} alt={this.state.data.slug}>
                    <time dateTime={this.state.data.data}>{this.getDate(this.state.data.data)}</time>
                </a>
                <a target="_blank" href={this.state.data.url} title={this.state.data.title} alt={this.state.data.slug}>
                    <img src={this.state.data.img} alt={this.state.data.title}/>
                </a>
            </article>
		)
	}
}
