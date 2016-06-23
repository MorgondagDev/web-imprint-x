import React, { Component, PropTypes } from 'react'

export default class extends React.Component {
	render() {
		return (
			<header>
				<nav role="primary">
					<ul>
						<li>
							<a href="/" title="imprint-X" className="logo">
								<h1>imprint-X</h1>
							</a>
						</li>
						<li>
							<a className="btn-small" href="https://www.kickstarter.com/projects/morgondag/imprint-x" title="Play Imprint-X on Steam or AppStore!">►!</a>
						</li>
					</ul>
				</nav>
			</header>
		)
	}
}
