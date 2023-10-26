import {
    IonContent,
    IonPage,
    IonTitle,
    IonToolbar,
    IonInput,
    IonButton,
    IonIcon,
    IonBackButton,
    IonButtons,
    IonList,
    IonItem
} from '@ionic/react';
import React from 'react';
import './AddTrip.css';
import Header from "../components/header/header";
import { useState } from 'react';
import {arrowBack} from "ionicons/icons";

const AddTrip: React.FC = () => {
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [contact, setContact] = useState('');
    const [time, setTime] = useState('');

    const handleAddTrip = () => {
        // Handle adding the trip with the entered details
        // You can send the data to an API or update your data source
    };
    return (
        <IonPage>
            <Header/>
            <IonToolbar>
                <IonButtons slot="start">
                    <IonBackButton color={"dark"} defaultHref="/paths" />
                </IonButtons>
                <IonTitle>Ajouter un trajet</IonTitle>
            </IonToolbar>
            <IonContent fullscreen>
                <IonList>
                    <IonItem>
                        <IonInput
                            placeholder="From Address"
                            value={from}
                            onIonChange={(e) => setFrom(e.detail.value!)}
                        />
                    </IonItem>
                    <IonItem>
                        <IonInput
                            placeholder="To Address"
                            value={to}
                            onIonChange={(e) => setTo(e.detail.value!)}
                        />
                    </IonItem>
                    <IonItem>
                        <IonInput
                            placeholder="Contact"
                            value={contact}
                            onIonChange={(e) => setContact(e.detail.value!)}
                        />
                    </IonItem>
                    <IonItem>
                        <IonInput
                            placeholder="Time"
                            value={time}
                            onIonChange={(e) => setTime(e.detail.value!)}
                        />
                    </IonItem>
                </IonList>
                <IonButton expand="full" onClick={handleAddTrip}>
                    Sauvegarder
                </IonButton>
            </IonContent>
        </IonPage>
    );
};

export default AddTrip;
