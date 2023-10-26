import {IonCol, IonContent, IonCardHeader, IonIcon, IonLabel,  IonCardContent, IonItem, IonPage, IonAvatar, IonRow, IonSearchbar,IonCard, useIonViewWillEnter} from '@ionic/react';
import React, {useEffect,useRef, useState} from 'react';

import './Map.css';
import Header from "../components/header/header";
import {car,chatbox} from "ionicons/icons";

import {Circle, GoogleMap} from '@capacitor/google-maps';
import {coordinates} from '../assets/datas';


const Map: React.FC = () => {

    const [searchText, setSearchText] = useState('');

    const key = "AIzaSyBGh2dsWZifqV6MH4JrhJKHmobIwT0fBfo";
    const mapRef = useRef<HTMLElement>();
    let newMap: GoogleMap;
    const radius = 2500;
    const circleCenter = {
        lat: 47.206215,
        lng: -1.539279,
    };



    async function createMap() {
        if (!mapRef.current) return;

        newMap = await GoogleMap.create({
            id: 'my-cool-map',
            element: mapRef.current,
            apiKey: key,
            config: {
                center: circleCenter,
                zoom: 12
            }
        });
        addCircleToMap(newMap);
    }
    function addCircleToMap(map: GoogleMap) {
        const circleOptions = [{
            center: {
                lat: 47.206215,
                lng: -1.539279,
            },
            radius: radius, // Radius in meters
            strokeColor: '#FF0000',
            strokeWidth: 2,
            fillColor: '#FF000080', // Circle fill color with alpha (transparency)
        }];

        map.addCircles(circleOptions);
    }
    const results = coordinates.map((coord) => {
        const lat2 = coord.lat;
        const lng2 = coord.lng;

        const R = 6371; // Radius of the Earth in kilometers
        const lat1 = circleCenter.lat;
        const lng1 = circleCenter.lng;

        const dLat = (lat2 - lat1) * (Math.PI / 180);
        const dLng = (lng2 - lng1) * (Math.PI / 180);

        const a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) * Math.sin(dLng / 2) * Math.sin(dLng / 2);

        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const distance = R * c;

        return distance <= radius;
    });
    useEffect(() => {
        createMap();
    }, []);
0
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
            <IonRow>
                <IonCol>
                    <div>
                        <h2>Locations Inside the Circle:</h2>
                        <ul>
                            {results.map((isInside, index) => (
                                isInside && <li key={index}>{coordinates[index].name}</li>
                            ))}
                        </ul>
                    </div>
                </IonCol>
            </IonRow>
            <IonCard>
                <IonCardHeader>
                    <IonItem lines="none">
                        <IonAvatar>
                            <IonIcon icon={car} />
                            <IonIcon icon={chatbox} />
                        </IonAvatar>
                        <IonLabel>
                            <h2>J. Sparrow</h2>
                        </IonLabel>
                    </IonItem>
                </IonCardHeader>
                <IonCardContent>
                    <p>
                        Nombre passagers: 3
                    </p>
                </IonCardContent>
            </IonCard>
            <IonCard>
                <IonCardHeader>
                    <IonItem lines="none">
                        <IonAvatar>
                            <IonIcon icon={car} />
                            <IonIcon icon={chatbox} />
                        </IonAvatar>
                        <IonLabel>
                            <h2>L. Kennedy</h2>
                        </IonLabel>
                    </IonItem>
                </IonCardHeader>
                <IonCardContent>
                    <p>
                        Nombre passagers: 0
                    </p>
                </IonCardContent>
            </IonCard>
            <IonCard>
                <IonCardHeader>
                    <IonItem lines="none">
                        <IonAvatar>
                            <IonIcon icon={car} />
                            <IonIcon icon={chatbox} />
                        </IonAvatar>
                        <IonLabel>
                            <h2>H. Potter</h2>
                        </IonLabel>
                    </IonItem>
                </IonCardHeader>
                <IonCardContent>
                    <p>
                        Nombre passagers: 1
                    </p>
                </IonCardContent>
            </IonCard>
        </IonContent>
        </IonPage>
    );
};

export default Map;
