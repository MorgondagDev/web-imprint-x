import React, { Component, PropTypes } from 'react'

export default class extends React.Component {
	constructor(props) {
		super(props)
	}
	render(){
		return (
			<article role="donate">
				<h3>Help us develop this game:</h3>
				<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
					<input type="hidden" name="cmd" value="_s-xclick"/>
					<input type="hidden" name="hosted_button_id" value="ZZDVSBKL7BLJN"/>
					<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
					<img alt="" border="0" src="https://www.paypalobjects.com/sv_SE/i/scr/pixel.gif" width="1" height="1" />
				</form>
				<p><br/></p>
			</article>
		)
	}
}
