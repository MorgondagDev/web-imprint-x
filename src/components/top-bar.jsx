import React, { Component, PropTypes } from 'react'
import lang from '../lib/lang.js'

export default class extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentLang: lang.currentLang()
		}
		this.changeLang = this.changeLang.bind(this)
	}

	changeLang(event){
		this.setState({currentLang: event.target.value})
		lang.changeLang(event.target.value)
		this.props.update();
	}
	capitalize(txt){
     	return txt.charAt(0).toUpperCase() + txt.slice(1);
	}

	langPicker(){
		return(
			<select defaultValue={this.state.currentLang}  onChange={this.changeLang}>
				{lang.nativeLang().map((value,i)=>{
					return(
						<option key={i} value={value.code}>{this.capitalize(value.nativeName)}</option>
					)
				})}
			</select>
		)
	}

	render() {
		return (
			<header>
				{this.langPicker()}
				<nav role="primary">
					<ul>
						<li>
							<a href="/" title="imprint-X" className="logo">
								<h1>imprint-X</h1>
							</a>
						</li>
						<li>
							<a className="btn-small" href="http://store.steampowered.com/app/434310/" title="Play Imprint-X on Steam or AppStore!">►!</a>
						</li>
					</ul>
				</nav>
			</header>
		)
	}
}
