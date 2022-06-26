import React, {useLayoutEffect, useState} from 'react';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';

export default function Map () {
    const [marker, setMarker] = useState();
    mapboxgl.accessToken = "pk.eyJ1IjoibHV4YWNpb3VzMTEiLCJhIjoiY2tsYjV4Z2phMGRzcDJxbzNnMWZzdXB2ZCJ9.-2-F79ornD8lrdae2Uig-w";

    useLayoutEffect(() => {
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/dark-v10',
            center: [12.567898, 55.675830],
            zoom: 9
        });
        const mapMarker = new mapboxgl.Marker().setLngLat([12.567898, 55.67583]).addTo(map);
        setMarker(mapMarker);
    }, []);

    const stores = {
        central: [12.567898, 55.67583],
        norrebro: [12.553806, 55.699299],
        airport: [12.650784, 55.618042]
    }

    function handleLocationChange(e) {
        console.log(stores[e.currentTarget.value]);
        marker.setLngLat(stores[e.currentTarget.value]);
    }


    return (<>
        <div className="map-overlay">
            <h3>Choose store: </h3>
            <select onChange={handleLocationChange}>
                <option value="central">Central Station</option>
                <option value="norrebro">Norrebro Street</option>
                <option value="airport">CPH Airport</option>
            </select>
        </div>
        <div id="map"></div>
    </>);
}