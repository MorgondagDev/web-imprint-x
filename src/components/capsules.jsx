import React, { Component, PropTypes } from 'react'

export default class extends React.Component {
	constructor(props) {
		super(props)
	}
	render(){
		return (
			<section role="capsules">
				<ul>
					<li>
						<a target="_blank" href="https://www.youtube.com/watch?v=lHdyIMGVbsw" title="imprint-X - Release Trailer" className="video capsule2">►</a>
						<a className="desc" target="_blank" href="https://www.youtube.com/watch?v=lHdyIMGVbsw">
							<span></span>
						</a>
					</li>
					<li>
						<a target="_blank" href="https://www.youtube.com/watch?v=otpCiFVTivU" title="imprint-X - Teaser" className="video capsule1">►</a>
						<a className="desc" target="_blank" href="https://www.youtube.com/watch?v=otpCiFVTivU">
							<span></span>
						</a>
					</li>
					<li>
						<a target="_blank" href="https://www.youtube.com/watch?v=U1BciKTIAMU" title="imprint-X Intro" className="video capsule3">►</a>
						<a className="desc" target="_blank" href="https://www.youtube.com/watch?v=U1BciKTIAMU">
							<span></span>
						</a>
					</li>
				</ul>
			</section>
		)
	}
}
