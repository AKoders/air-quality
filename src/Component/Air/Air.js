import React, {useEffect,useRef, useState} from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import './Air.scss';

mapboxgl.accessToken = 'pk.eyJ1IjoibnVtYmVyLXNvZnQiLCJhIjoiY2tmcHhnNm0yMTU1eTJ4czV5ZGx3dzA2bSJ9.8oGFnxNJYqpWmhlhsmci4g';
const Air = () => {
    const mapsContainer= useRef(null);
    const [locationInfo,setLocationInfo] = useState({
        lng: 31,
        lat: 48.3,
        zoom: 5
    });

    useEffect(()=> {
        console.log(mapsContainer);
        const map = new mapboxgl.Map({
            container: mapsContainer.current,
            style: 'mapbox://styles/mapbox/outdoors-v11',
            center: [locationInfo.lng, locationInfo.lat],
            zoom: locationInfo.zoom
        });
    }, [])


    return (
        <section className={'air container'}>
            <h2 className="air-title">Индекс качества воздуха в режиме реального времени</h2>
            <div className="air-map" ref={mapsContainer}/>
            <p className="air-text">Для того чтобы узнать уровень загрязнения атмосферного воздуха (качество воздуха) в городе Киев, необходимо выбрать соответствующую станцию мониторинга на карте выше.</p>
        </section>
    );
};

export default Air;