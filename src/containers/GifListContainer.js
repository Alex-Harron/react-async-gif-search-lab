import React, {Component} from 'react';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';

class GifListContainer extends Component {

    state = {
        gifs: []
    }

    render() {
        return(
            <div>
                <GifSearch 
            </div>
        )
    }

    componentDidMount() {
        fetch('https://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g')
        .then(res => res.json())
        .then(gif => {
            this.setState({
                gifs: gif
            })
        })
    }
}
export default GifListContainer;