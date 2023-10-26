import {
    IonCard, IonCardContent,
    IonCardHeader, IonCardSubtitle,
    IonCardTitle,
    IonContent,
    IonHeader, IonImg,
    IonPage,
    IonSearchbar,
    IonTitle,
    IonToolbar,
    IonFab,
    IonFabButton,
    IonIcon,
    IonButton, IonBackButton, IonButtons
} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Trajet.css';
import Header from "../components/header/header";
import ToolBar from "../components/ToolBar";
import React, {useState} from "react";
import FetchProducts from "../services/mock-data-service";
import {add, arrowBack} from "ionicons/icons";

const Trajet: React.FC = () => {
    const trips = [
        {
            id: 1,
            from: '123 rue Anonymous',
            to: '16 Bd Général de Gaulle, 44200 Nantes',
            contact: 'John Doe',
            time: '9:00',
        },
        {
            id: 2,
            from: '789 Av tortuga',
            to: '16 Bd Général de Gaulle, 44200 Nantes',
            contact: 'Jack Sparrow',
            time: '9:00',
        },
        {
            id: 2,
            from: '66 rue Mustafar',
            to: '16 Bd Général de Gaulle, 44200 Nantes',
            contact: 'Anakin Skywalker',
            time: '9:30',
        },
        // Add more trips as needed
    ];
    return (
        <IonPage>
            <Header />
            <IonToolbar>
                <IonTitle>Liste des trajets</IonTitle>
            </IonToolbar>
            <IonContent fullscreen>
                {trips.map((trip) => (
                    <IonCard key={trip.id}>
                        <IonCardHeader>
                            <IonCardSubtitle>{trip.contact}</IonCardSubtitle>
                            <IonCardTitle>Détails du trajet</IonCardTitle>
                        </IonCardHeader>
                        <IonCardContent>
                            <p>Départ: {trip.from}</p>
                            <p>Arrivé: {trip.to}</p>
                            <p>Heure: {trip.time}</p>
                        </IonCardContent>
                    </IonCard>
                ))}
                <IonFab vertical="bottom" horizontal="end" slot="fixed">
                    <IonButton routerLink="/newPaths">
                        <IonIcon icon={add} /> {/* Plus icon */}
                    </IonButton>
                </IonFab>
            </IonContent>
        </IonPage>
    );
};

export default Trajet;
