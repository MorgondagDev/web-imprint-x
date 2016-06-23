import TopBar from './top-bar.jsx'
import Hero from './hero.jsx'
import Footer from './footer.jsx'
import React, { Component, PropTypes } from 'react'
import { ReactRpg } from 'react-rpg';

import Capsules from './capsules.jsx'
import Gif from './gif.jsx'

const previewStyles = {
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  position: 'fixed',
  border: 'solid #1a1a1a 10px',
  zIndex: '3',
};
const basePath = 'media/';

export default class extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            padding: 10,
            columns: 4,
            popUp: false,
        }
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
                <TopBar/>
                <Hero/>
                <section role="content">
                    <Capsules/>

                    <h2>A super good sentence about the game</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil dolor sint rem eligendi commodi magni porro impedit non fugiat fugit.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga similique voluptatibus corrupti dicta saepe molestias beatae accusamus reiciendis quam mollitia, amet perspiciatis ab iure. Modi nesciunt esse dicta aspernatur.</p>
                    <p><br/><br/></p>

                    <h3>imprint-x puzzle game</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil dolor sint rem eligendi commodi magni porro impedit non fugiat fugit.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga similique voluptatibus corrupti dicta saepe molestias beatae accusamus reiciendis quam mollitia, amet perspiciatis ab iure. Modi nesciunt esse dicta aspernatur.</p>
                    <p><br/><br/></p>

                    <p>
                        <a href="http://morgondag.us3.list-manage2.com/subscribe?u=0c6b4fd7d0dc95e81024c3c51&id=970ded45b7" className="btn" title="Subscribe to news about imprint-X">Subscribe for updates</a>
                    </p>

                    {/*<Gif placeholder={basePath+"space2.jpg"} src={basePath+"space2.gif"} />
                    <Gif placeholder={basePath+"space1.jpg"} src={basePath+"space1.gif"} />
                    <Gif placeholder={basePath+"ward1.jpg"} src={basePath+"ward1.gif"} />
                    <Gif placeholder={basePath+"ward2.jpg"} src={basePath+"ward2.gif"} />
                    <Gif placeholder={basePath+"ward3.jpg"} src={basePath+"ward3.gif"} />
                    */}

                    <h3>Here are some stuff:</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, adipisci!</p>
                    <ReactRpg imagesArray={this.getImages()} columns={[this.state.columns]} padding={this.state.padding} />
                    <div className="clear"></div>
                    <p><br/><br/></p>
                    <p>
                        <a href="http://morgondag.us3.list-manage2.com/subscribe?u=0c6b4fd7d0dc95e81024c3c51&id=970ded45b7" className="btn btn-signup" title="Add imprint-X to your Steam Wishlist">Add To Steam Wishlist</a>
                    </p>
                </section>
                <Footer/>
            </section>
        )
    }
}
