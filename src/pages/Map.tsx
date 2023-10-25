import {IonCol, IonContent, IonPage, IonRow, IonSearchbar, useIonViewWillEnter} from '@ionic/react';
import React, {useRef, useState} from 'react';
import './Map.css';
import Header from "../components/header/header";

import {GoogleMap} from '@capacitor/google-maps';


const Map: React.FC = () => {

    const [searchText, setSearchText] = useState('');

    const key = "AIzaSyBGh2dsWZifqV6MH4JrhJKHmobIwT0fBfo";
    const mapRef = useRef<HTMLElement>();
    let newMap: GoogleMap;

    async function createMap() {
        if (!mapRef.current) return;

        newMap = await GoogleMap.create({
            id: 'my-cool-map',
            element: mapRef.current,
            apiKey: key,
            config: {
                center: {
                    lat: 47.206215,
                    lng: -1.539279
                },
                zoom: 12
            }
        })
    }
    /*let newMap;
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
    }*/
    useIonViewWillEnter(() => createMap());
    return (
        <IonPage>
            <Header/>
        <IonContent fullscreen>
            <IonRow>
                <IonCol>
                    <IonSearchbar value={searchText} onIonChange={e => setSearchText(e.detail.value!)} placeholder="" />
                </IonCol>
            </IonRow>
            <IonRow>
                <IonCol>
                        <capacitor-google-map ref={mapRef} style={{
                            display: 'inline-block',
                            width: "100%",
                            height: 400
                        }}/>

                </IonCol>
            </IonRow>
        </IonContent>
        </IonPage>
    );
};

export default Map;