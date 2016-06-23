import React, { Component, PropTypes } from 'react'

export default class extends React.Component {
	constructor(props) {
    	super(props);
    	if(!props.id || !props.url){
    		throw new Error("facebook: missing props")
    	}
    	this.state = {
    		id:props.id,
    		url:props.url
    	};
  	}
	componentDidMount(){
		var js, fjs = document.getElementsByTagName('script')[0];
		if (document.getElementById('facebook-jssdk')) return;
		js = document.createElement('script'); js.id = 'facebook-jssdk';
		js.src = "//connect.facebook.net/sv_SE/sdk.js#xfbml=1&version=v2.5&appId="+this.state.id;
		fjs.parentNode.insertBefore(js, fjs);
	}
	render() {
		return (
			<div className="facebook">
				<div id="fb-root"></div>
				<div
					className="fb-like"
					data-href={this.state.url}
					data-layout="button"
					data-action="like"
					data-show-faces="false"
					data-share="true"
				>
				</div>
			</div>
		)
	}
}
