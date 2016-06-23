import React, { Component, PropTypes } from 'react'
import Socket from './socket.jsx'
import utils from './utils.js'
import Post from './post.jsx'
export default class extends React.Component {
	constructor(props) {
    	super(props)
    	let news = false
    	if(props.news){
    		news = props.news
    	}
    	this.state = {
    		news: news
    	}
  	}
	componentDidMount(){
		Socket.on('mailchimp', this.onMessage.bind(this))
	}
	componentWillUnmount() {
		Socket.disconnect('mailchimp')
	}
	onMessage(data){
		data = data.splice(0,6);
		this.setState({news:data})
	}
	render() {
		if(this.state.news){
			return (
				<div className="news">
					{this.state.news.map((item,i)=>{
						return(<Post key={i} data={item}/>)
					})}
					<div className="clear"></div>
				</div>
			)
		} else {
			return (<div className="no-news"></div>)
		}
	}
}
