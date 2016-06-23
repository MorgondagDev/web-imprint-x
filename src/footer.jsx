import React, { Component, PropTypes } from 'react'

import Player from './player.jsx';
import Facebook from './facebook.jsx'

export default class extends React.Component {
	render() {
		return (
			<footer>

				<Player/>
				<a className="kickstart" href="http://morgondag.us3.list-manage2.com/subscribe?u=0c6b4fd7d0dc95e81024c3c51&id=970ded45b7" title="Back imprint-x on kickstarter!">Back This Project!</a>
				<Facebook url="https://www.facebook.com/imprintX/" id="234294403315668"/>
				<a  className="twitterLink" href="https://twitter.com/imprint_X" title="imprint-X on Twitter">@imprint_X</a>
				<a href="http://morgondag.nu" title="Imprint-x developed by Morgondag">
					<div className="morgondag">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 408 208"><g fill="#fff" stroke="#fff" stroke-miterlimit="10"><path strokeWidth=".505" d="M202.778 19.704c-15.769 0-30.709 3.523-44.102 9.803 1.047.641 2.015 1.427 2.931 2.262.086.057.171.119.254.189a33.555 33.555 0 0 1 2.681 2.518c.109-.014.221-.021.332-.02.56.003 1.137.199 1.662.661 1.789 1.577 3.323 3.406 5.216 4.867 1.619 1.249 3.214 2.512 4.512 4.104.579.711.707 1.51.546 2.232.814.857 1.657 1.684 2.582 2.421 2.491 1.984 4.609 4.325 7.041 6.358 2.424 2.025 6.001 4.452 7.404 7.598.422.117.842.249 1.261.409.945.361 1.853.779 2.878.71.58-.039 1.117.173 1.548.526 2.434-.11 4.805-1.289 6.968-2.299 2.362-1.103 4.771-2.084 7.167-3.106 5.796-5.292 11.86-10.282 17.725-15.5 3.218-2.864 7.257-4.922 10.289-7.939 1.923-1.913 3.879-3.792 5.773-5.732-13.534-6.45-28.677-10.062-44.668-10.062z"/><path strokeWidth=".505" d="M167.378 38.633l6.064 6.065 3.011 2.125 1.204-3.308-12.129-11.119-1.343 2.584 15.648 14.923 5.232 6.418 11.796 9.766 5.843 6.57 14.412-16.632"/><path strokeWidth="5.313" d="M5.5 124.086L129.465.121"/><path strokeWidth="1.387" d="M204.88 75.273L127.725-1.884"/><path strokeWidth="5.313" d="M151.982 124.592L275.947.626"/><path strokeWidth="1.771" d="M400.563 123.969L274.713-1.884"/><g strokeWidth=".505"><path d="M96.561 179.123h-2.196v-48.525L73.963 165.38l-20.402-34.782v48.525h-2.196v-56.034h.354l22.244 38.183 22.172-38.183.496.071-.07 55.963zM102.014 163.467c0-8.783 6.091-16.222 14.875-16.222s14.876 7.438 14.876 16.222c0 8.926-6.092 15.939-14.876 15.939s-14.875-7.013-14.875-15.939zm2.125 0c0 7.51 5.172 13.814 12.751 13.814 7.509 0 12.68-6.305 12.68-13.814 0-7.65-5.171-14.097-12.68-14.097-7.579 0-12.751 6.446-12.751 14.097zM137.928 179.123h-2.125v-31.736h2.125v8.075c3.259-4.959 7.792-7.934 13.247-8.075v2.125c-7.508.213-13.247 6.518-13.247 13.885v15.726zM157.479 189.04l1.559-1.558c2.904 3.046 6.163 4.604 10.059 4.604 7.438 0 13.46-6.092 13.46-13.601v-6.305c-2.338 5.313-7.084 7.438-12.255 7.438-8.784 0-15.372-7.296-15.372-16.01.07-8.713 6.588-16.009 15.372-16.009 5.171 0 9.846 2.62 12.255 7.65v-7.65h2.125v30.886c0 9.28-7.014 15.797-15.585 15.797-4.534 0-8.218-1.771-11.618-5.242zm-.425-25.432c.071 7.51 5.597 13.885 13.247 13.885s12.113-6.517 12.113-13.885c-.071-7.438-4.463-13.813-12.113-13.813s-13.247 6.305-13.247 13.813zM188.505 163.467c0-8.783 6.092-16.222 14.876-16.222s14.876 7.438 14.876 16.222c0 8.926-6.092 15.939-14.876 15.939s-14.876-7.013-14.876-15.939zm2.124 0c0 7.51 5.172 13.814 12.751 13.814 7.509 0 12.68-6.305 12.68-13.814 0-7.65-5.171-14.097-12.68-14.097-7.579 0-12.751 6.446-12.751 14.097zM244.75 179.123v-20.544c0-4.675-3.896-8.43-8.359-8.43-4.604 0-10.484 2.763-10.484 7.367v21.606h-2.054v-30.886h2.054v3.966c2.338-3.045 7.509-4.108 10.484-4.108 5.597 0 10.414 3.896 10.414 10.484v20.544h-2.055zM278.751 179.123v-7.51c-2.621 5.242-7.084 7.793-12.396 7.793-8.926 0-15.514-7.297-15.514-16.223 0-8.783 6.588-16.15 15.514-16.15 5.313 0 9.705 2.691 12.396 7.792V123.16h2.126v55.963h-2.126zm-25.785-15.939c0 7.58 5.597 14.026 13.389 14.026 7.65 0 12.185-6.518 12.185-14.026s-4.534-14.025-12.185-14.025c-7.792-.001-13.389 6.445-13.389 14.025zM316.152 179.123v-7.793c-3.399 5.172-8.075 8.076-13.388 8.076-8.855 0-15.372-7.226-15.372-15.939 0-8.713 6.517-15.938 15.372-15.938 5.313 0 9.988 2.904 13.388 8.076v-7.793h2.125v31.312h-2.125zm-26.634-15.656c0 7.438 5.596 13.814 13.247 13.814 7.438 0 13.246-6.234 13.246-13.814 0-7.509-5.809-13.813-13.246-13.813-7.652-.001-13.247 6.375-13.247 13.813zM326.99 189.04l1.558-1.558c2.905 3.046 6.163 4.604 10.06 4.604 7.438 0 13.459-6.092 13.459-13.601v-6.305c-2.337 5.313-7.084 7.438-12.255 7.438-8.784 0-15.372-7.296-15.372-16.01.071-8.713 6.588-16.009 15.372-16.009 5.171 0 9.847 2.62 12.255 7.65v-7.65h2.125v30.886c0 9.28-7.013 15.797-15.584 15.797-4.535 0-8.218-1.771-11.618-5.242zm-.426-25.432c.071 7.51 5.597 13.885 13.247 13.885s12.113-6.517 12.113-13.885c-.071-7.438-4.463-13.813-12.113-13.813s-13.247 6.305-13.247 13.813z"/></g></g></svg>
					</div>
				</a>
			</footer>
		)
	}
}
