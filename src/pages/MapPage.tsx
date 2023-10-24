import React from 'react';
import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
} from '@ionic/react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import Header from "../components/header/header";
import {LatLng} from "leaflet";

const MapPage: React.FC = () => {
    const initialPosition: [number, number] = [51.505, -0.09];
    const position = [51.505, -0.09]
    const markers = [
        { position: [51.505, -0.09], title: 'Marker 1' },
        { position: [51.51, -0.1], title: 'Marker 2' },
        // Add more markers as needed
    ];

    return (
        <IonPage>
            <Header />
            <IonContent>

            </IonContent>
        </IonPage>
    );
};

export default MapPage;
