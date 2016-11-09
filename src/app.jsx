import React, { Component, PropTypes } from 'react'
import { ReactRpg } from 'react-rpg';

import TopBar from './components/top-bar.jsx'
import Hero from './components/hero.jsx'
import Footer from './components/footer.jsx'
import Capsules from './components/capsules.jsx'
import Gif from './components/gif.jsx'
import Donate from './components/donate.jsx'

import lang from './lib/lang.js'

const previewStyles = {
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  position: 'fixed',
  border: 'solid #1a1a1a 10px',
  zIndex: '3',
};
const basePath = '/media/';

export default class extends React.Component {
    constructor(props) {
        super(props)
        lang.setup();
        this.state = {
            padding: 10,
            columns: 4,
            popUp: false,
            d: Date.now()
        }
        this.reRender = this.reRender.bind(this);
    }

    paddingChanged(e) {
        this.setState({ padding: parseInt(e.target.value, 10) })
    }

    columnsChanged(e) {
        this.setState({ columns: parseInt(e.target.value, 10) })
    }

    imagePopup(url, obj) {
        this.setState({ popUp: url })
    }

    reRender(){
        this.setState({d: Date.now()})
    }

    preview(){
        let url = this.state.popUp;
        return (
            <div className="overlay" onClick={this.closePreview.bind(this)}>
                <img
                    className="slideshow"
                    src={url}
                    style={previewStyles}
                    alt={url}
                    width="50%"
                    height="auto"
                />
            </div>
        )
    }

    closePreview(){
        this.setState({ popUp: false })
    }

    getImages() {
        let items = []
        let count = 39;

        for (var i = 1; i < count; i++) {
            items.push({ url: basePath+'wardens/'+i+'.jpg', clickHandler: this.imagePopup.bind(this) })
        }
        return items
    }

    render() {
        return (
            <section role="main">
             { this.state.popUp !== false ? this.preview() : null }
                <TopBar update={this.reRender}/>
                <Hero/>
                <section role="content">
                    <Capsules/>
                    <h1>imprint-X</h1>
                    <h2>{lang.t('slogan')}</h2>
                    <p>{lang.t('maintext1')}</p>
                    <p><br/></p>
                    <p>{lang.t('maintext2')}</p>
                    <iframe src="https://store.steampowered.com/widget/434310" frameBorder="0" width="646" height="190" />
                    <p><a className="btn" title="Play imprint-X now!" href="http://store.steampowered.com/app/434310/">{lang.t('play')}</a></p>
                    <ReactRpg imagesArray={this.getImages()} columns={[this.state.columns]} padding={this.state.padding} />
                    <div className="clear"></div>
                    <p><br/><br/></p>
                    <iframe src="http://store.steampowered.com/widget/434310" frameBorder="0" width="646" height="190" />
                </section>
                <Footer/>
            </section>
        )
    }
}
