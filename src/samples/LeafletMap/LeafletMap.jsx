let b = block('leaflet-map');

import './LeafletMap.styl';
import {Component, PropTypes} from 'react';

/**
 * Component LeafletMap
 */
class LeafletMap extends Component {
    componentDidMount() {
        this.createMap();
    }

    /**
     * Creates instance of Leaflet map
     */
    createMap() {
        require.ensure([], () => {
            let Leaflet = require('leaflet'),
                {lon, lat, zoom, tileURL} = this.props,
                {container} = this.refs;

            // Load Leaflet styles
            require('leaflet/dist/leaflet.css');

            // Create layer
            let layer = Leaflet.tileLayer(tileURL);

            // Create map
            this.map = Leaflet
                .map(container)
                .setView([lat, lon], zoom)
                .addLayer(layer);
        });
    }

    render() {
        return (
            <div className={b}>
                <div ref="container" className={b('container')} />
            </div>
        );
    }
}

LeafletMap.propTypes = {
    lon: PropTypes.number,
    lat: PropTypes.number,
    zoom: PropTypes.number,
    tileURL: PropTypes.string
};

LeafletMap.defaultProps = {
    lon: 37.620393,
    lat: 55.75396,
    zoom: 10,
    tileURL: 'http://{s}.tile.openstreetmap.se/hydda/full/{z}/{x}/{y}.png'
};

export default LeafletMap;
