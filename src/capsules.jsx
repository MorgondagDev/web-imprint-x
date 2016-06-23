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
						<a target="_blank" href="https://www.youtube.com/watch?v=JIlmX2ugqXE" title="imprint-X Alpha Gameplay Trailer" className="video capsule1">►</a>
						<a className="desc" target="_blank" href="https://www.youtube.com/watch?v=JIlmX2ugqXE">
							<span>Alpha Gameplay trailer</span>
						</a>
					</li>
					<li>
						<a target="_blank" href="https://www.youtube.com/watch?v=U1BciKTIAMU" title="imprint-X Intro" className="video capsule2">►</a>
						<a className="desc" target="_blank" href="https://www.youtube.com/watch?v=U1BciKTIAMU">
							<span>Intro Cinematics</span>
						</a>
					</li>
					<li>
						<a target="_blank" href="https://www.youtube.com/watch?v=JIlmX2ugqXE" title="imprint-X Gameplay Trailer" className="video capsule3">►</a>
						<a className="desc" target="_blank" href="https://www.youtube.com/watch?v=JIlmX2ugqXE">
							<span>Teaser trailer</span>
						</a>
					</li>
				</ul>
			</section>
		)
	}
}