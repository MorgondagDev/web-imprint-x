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



                    <h2>A causal, button based puzzle game</h2>
                    <p>imprint-X is a casual puzzle game, containing 100 puzzles to solve where you click your way to defeat the mysterious robotic Wardens.</p>
                    <p>Hack into peoples brains and destroy the robotic virus that enslaves their minds!</p>
                    <p><br/><br/></p>

                    <h3>You have been sent to save them!</h3>
                    <p>One day an AI woke up on an Asteroid Base. It sent out swarms of Nano Bots that attacked the people of the base, flew into their world and infected them with just a glance, planting Wardens in their minds. A robotic virus raged! </p>
                    <p>The Wardens enslave the people! You are one of the hacker clones, saving people by hacking into their brains and defeating Wardens.</p>
                    <p><br/><br/></p>


                    <iframe src="https://store.steampowered.com/widget/434310" frameBorder="0" width="646" height="190" />

                    <p>
                        <a href="http://morgondag.us3.list-manage2.com/subscribe?u=0c6b4fd7d0dc95e81024c3c51&id=970ded45b7" className="btn" title="Subscribe to news about imprint-X">Subscribe for updates</a>
                    </p>

                    <Donate />
                    <h3>Here are some Wardens</h3>
                    <ReactRpg imagesArray={this.getImages()} columns={[this.state.columns]} padding={this.state.padding} />
                    <div className="clear"></div>
                    <p><br/><br/></p>
                    <p>
                        <a href="http://morgondag.us3.list-manage2.com/subscribe?u=0c6b4fd7d0dc95e81024c3c51&id=970ded45b7" className="btn btn-signup" title="Add imprint-X to your Steam Wishlist">Signup for news</a>
                    </p>
                    <iframe src="http://store.steampowered.com/widget/434310" frameBorder="0" width="646" height="190" />
                </section>
                <Footer/>
            </section>
        )
    }
}
