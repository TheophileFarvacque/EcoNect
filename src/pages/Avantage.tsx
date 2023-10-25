import { IonContent, IonPage } from '@ionic/react';
import React from 'react';
import { IonButton, IonCard, IonLabel, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import './Avantage.css';
import Header from "../components/header/header";


const Avantage: React.FC = () => {

    return (
        <IonPage>
            <Header />
            <IonContent className="ion-padding">
                <IonCard>
                    <IonCardHeader>
                        <IonCardTitle id='points-header'>Vos points :</IonCardTitle>
                        <IonCardContent></IonCardContent>
                        <IonCardSubtitle id='points'>165</IonCardSubtitle>
                    </IonCardHeader>
                </IonCard>
                <IonCard className="ion-text-center">
                    <IonCardHeader>
                        <IonCardTitle>Carte cadeau de 5€</IonCardTitle>
                        <IonCardSubtitle> Cout : 500 points</IonCardSubtitle>
                    </IonCardHeader>
                    <IonCardContent>
                        <IonButton fill='solid' size='small'>Récupérer</IonButton>
                    </IonCardContent>
                </IonCard>
                <IonCard className="ion-text-center">
                    <IonCardHeader>
                        <IonCardTitle>Donation de 5€ à l'association de votre choix</IonCardTitle>
                        <IonCardSubtitle> Cout : 450 points</IonCardSubtitle>
                    </IonCardHeader>
                    <IonCardContent>
                        <IonButton fill='solid' size='small'>Récupérer</IonButton>
                    </IonCardContent>
                </IonCard>
                <IonCard className="ion-text-center">
                    <IonCardHeader>
                        <IonCardTitle>Cours de bien-être</IonCardTitle>
                        <IonCardSubtitle> Cout : 1200 points</IonCardSubtitle>
                    </IonCardHeader>
                    <IonCardContent>
                        Séances de yoga, de méditation ou autre cours de bien-être <br />
                        <IonButton fill='solid' size='small'>Récupérer</IonButton>
                    </IonCardContent>
                </IonCard>
                <IonCard className="ion-text-center">
                    <IonCardHeader>
                        <IonCardTitle>Places de cinéma</IonCardTitle>
                        <IonCardSubtitle> Cout : 450 points</IonCardSubtitle>
                    </IonCardHeader>
                    <IonCardContent>
                        <IonButton fill='solid' size='small'>Récupérer</IonButton>
                    </IonCardContent>
                </IonCard>
            </IonContent>
        </IonPage>
    );
};

export default Avantage;