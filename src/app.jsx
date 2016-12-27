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

    componentDidMount(){
         setInterval(this.reRender, 5000);
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

    shuffle(a) {
        for (let i = a.length; i; i--) {
            let j = Math.floor(Math.random() * i);
            [a[i - 1], a[j]] = [a[j], a[i - 1]];
        }

        return a
    }

    getImages() {
        let items = []
        let count = 101;
        for (var i = 1; i < count; i++) {
            items.push({ url: basePath+'wardens/'+i+'.jpg', clickHandler: this.imagePopup.bind(this) })
        }
        return this.shuffle(items).slice(0,8)
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
                    <h2>{lang.t('snippet')}</h2>
                    <p>{lang.t('description1')}</p>
                    <p><br/></p>
                    <p>{lang.t('description2')}</p>
                    <iframe src="https://store.steampowered.com/widget/434310" frameBorder="0" width="80%" height="250" />

                    <p><a className="btn" title="Play imprint-X now!" href="http://store.steampowered.com/app/434310/">{lang.t('btn_buy')}</a>
                    <a className="btn" title="imprint-X Presskit" target="_blank" href="https://goo.gl/sgsKW9">{lang.t('presskit')}</a></p>

                    <ReactRpg imagesArray={this.getImages()} columns={[this.state.columns]} padding={this.state.padding} />
                    <div className="clear"></div>

                    <h3>{lang.t('features')}</h3>
                    <ul>
                        <li>{lang.t('feature1')}</li>
                        <li>{lang.t('feature2')}</li>
                        <li>{lang.t('feature3')}</li>
                        <li>{lang.t('feature4')}</li>
                        <li>{lang.t('feature5')}</li>
                    </ul>

                    <p><br/><br/></p>
                    <iframe src="http://store.steampowered.com/widget/434310" frameBorder="0" width="80%" height="250" />
                </section>
                <Footer/>
            </section>
        )
    }
}
