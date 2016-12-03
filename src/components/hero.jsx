import React, { Component, PropTypes } from 'react'
import lang from '../lib/lang.js'

export default class extends React.Component {
	render() {
		return (
			<section role="hero">
				<a className="big-logo" href="http://store.steampowered.com/app/434310/" title="Play imprint-X">imprint-X</a>
				<a className="btn" title="Play imprint-X now!" href="http://store.steampowered.com/app/434310/">{lang.t('btn_play')}</a>
			</section>
		)
	}
}
