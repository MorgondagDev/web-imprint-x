import React, { Component, PropTypes } from 'react'
import Socket from './socket.jsx';
import utils from './utils.js';

export default class extends React.Component {
	constructor(props) {
    	super(props);
    	let tweet = false;
    	if(props.tweet){
    		tweet = props.tweet
    	}

    	this.state = {
    		account:props.account,
    		tweet:this.updateTweet(tweet)
    	}
  	}
	componentDidMount(){
		Socket.on('twitter_'+this.state.account, this.onMessage.bind(this));
	}
	componentWillUnmount() {
		Socket.disconnect('twitter_'+this.state.account)
	}

	updateTweet(data){
		if(!data){
			return false
		}
		let img = data.user.profile_image_url.replace('_normal','_bigger');
		return {
			time: utils.fromnow(data.created_at),
			name: '@'+data.user.name,
			link: 'http://twitter.com/'+data.user.screen_name,
			html: utils.linkify(data.text),
			img: img
		}
	}

	onMessage(data){
		this.setState({tweet:this.updateTweet(data)})
	}

	render() {
		if(this.state.tweet){
			let follow = `Follow ${this.state.tweet.name} on Twitter`
			return (
				<div className="twitter">
					<div className="tweet">
						<a target="_blank" href={this.state.tweet.link} title={follow}>
							<img src={this.state.tweet.img} />
						</a>
						<a target="_blank" href={this.state.tweet.link} title={follow}>
							{this.state.tweet.name}
						</a>
						<time> {this.state.tweet.time}:</time>
						<div className="tweet-html" dangerouslySetInnerHTML={{__html: this.state.tweet.html}} />
					</div>
				</div>
			)
		} else {
			return (<div className="twitter"><div className="empty-tweet" data-id={this.state.account}></div></div>)
		}

	}
}
