import {IonCol, IonContent, IonPage, IonRow, useIonViewWillEnter} from '@ionic/react';
import React, {useRef, useState} from 'react';
import './Map.css';
import Header from "../components/header/header";

import {GoogleMap} from '@capacitor/google-maps';


const Map: React.FC = () => {

    const key = "AIzaSyBGh2dsWZifqV6MH4JrhJKHmobIwT0fBfo";
    let newMap;
    const mapRef = useRef(null);
    const [mapConfig, setMapConfig] = useState({
        zoom: 12,
        center: {
            lat: 47.206527,
            lng: -1.539279
        }
    });
    const createMap = async () => {
        if (!mapRef.current) return;
        newMap = await GoogleMap.create({
            id: "google-map",
            element: mapRef.current,
            apiKey: key,
            config: mapConfig,
        })
    }
useIonViewWillEnter(() => createMap());
    return (
        <IonPage>
            <Header/>
        <IonContent fullscreen>
            <IonRow>
                <IonCol size="12">
                    <capacitor-google-map ref={mapRef} id="map"/>
                </IonCol>
            </IonRow>
        </IonContent>
        </IonPage>
    );
};

export default Map;