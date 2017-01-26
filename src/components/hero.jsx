import React, { Component, PropTypes } from 'react'
import lang from '../lib/lang.js'
import {open} from '../lib/open.js'

export default class extends React.Component {

	onOpen(e){
        e.preventDefault();
        open(e);
    	}

	render() {
		return (
			<section role="hero">
				<a className="big-logo" href="http://store.steampowered.com/app/434310/" title="Play imprint-X">imprint-X</a>
				<a className="btn" title="Play imprint-X now!" onClick={this.onOpen} data-ios="https://itunes.apple.com/app/imprint-x/id1141358425" data-android="https://play.google.com/store/apps/details?id=nu.morgondag.imprintx" href="http://store.steampowered.com/app/434310/">{lang.t('btn_play')}</a>
				<div className="available-stores">
				<p>
					<a title="imprint-X on Steam" href="http://store.steampowered.com/app/434310/">Steam</a>
					<a href="https://itunes.apple.com/app/imprint-x/id1141358425">iOS App Store</a>
					<a title="imprint-X on Google Play" href="https://play.google.com/store/apps/details?id=nu.morgondag.imprintx">Google Play</a>
					<a title="imprint-X on Humble Store" href="https://www.humblebundle.com/store/imprint-x">Humble Store</a>
					<a title="imprint-X on Mac App Store" href="https://itunes.apple.com/app/imprintx/id1190123870">Mac App Store</a>
					<a title="imprint-X on Itch.io" href="https://morgondag.itch.io/imprint-x">Itch.io</a></p>
				</div>
			</section>
		)
	}
}
