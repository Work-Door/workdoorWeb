import React from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const Mapa = ({ endereco }) => {
    const { isLoaded, loadError } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyBNTsFnWD_LjXyRzgBK_u8IeC_NuegXoik"
    });

    const containerStyle = {
        width: '100%',
        height: '450px'
    };

    const defaultCenter = {
        lat: endereco.lat,
        lng: endereco.lng
    };

    console.log("Default center coordinates:", defaultCenter);

    if (loadError) {
        console.error("Error loading Google Maps API", loadError);
        return <p>Error loading map</p>;
    }

    return (
        <div>
            {isLoaded ? (
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={defaultCenter}
                    zoom={15}
                >
                    {console.log("Rendering Marker at position:", defaultCenter)}
                    <Marker position={defaultCenter} />
                </GoogleMap>
            ) : <p>Carregando mapa...</p>}
        </div>
    );
};

export default Mapa;
