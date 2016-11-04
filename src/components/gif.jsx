// <Gif placeholder="machine.png" src="space2.gif" />

import React, { Component, PropTypes } from 'react'

export default class extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			placeholder: props.placeholder,
			src: props.src,
			isLoaded: false,
			isLoading: false,
			img: false
		}
	}

	loadImage(){
		if(this.state.isLoading || this.state.isLoaded){
			return;
		}
		this.setState({isLoading:true})
		let img = new Image()
		img.onload = this.imageLoaded.bind(this)
		img.src = this.state.src
	}

	imageLoaded(){
		this.setState({
			isLoaded:true,
			isLoading:false
		})
	}

	onClick(){
		this.imageLoaded()
	}

	render(){
		var markup
		var loaderClass

		if(this.state.isLoading){
			loaderClass = "loading"
		} else if(this.state.isLoaded){
			loaderClass = "active"
		} else {
			loaderClass = "inactive"
		}

		if(this.state.isLoaded){
			markup = <img src={this.state.src}/>
		} else {
			markup = <img src={this.state.placeholder}/>
		}

		return (
			<gif className={loaderClass} onClick={this.onClick.bind(this)}>
				<span className="play">►</span>
				<span className="loader">⍝</span>
				{markup}
			</gif>
		)
	}
}
