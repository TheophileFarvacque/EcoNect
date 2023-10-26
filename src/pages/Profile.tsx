import {
    IonAvatar, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonLabel,
    IonImg,
    IonRow,
    IonCol,
    IonIcon,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonButton
} from '@ionic/react';
import React, { useEffect, useRef } from 'react';
import './Profile.css';
import Header from "../components/header/header";
import ToolBar from "../components/ToolBar";
import LineChart from '../components/LineChart'; 
import avatar from "../assets/images/avatar.png"
import {briefcase, pencil, home} from "ionicons/icons";

const chartData = {
    labels: ['Sep', 'Oct', 'Nov', 'Dec', 'Janv'],
    datasets: [
        {
            label: 'Co2',
            data: [12, 19, 15, 13, 9],
            fill: false,
            borderColor: '#8FB43A',
            borderWidth: 2,
        },
    ],
};

const Profile: React.FC = () => {
    return (
        <IonPage>
            <Header/>
            <IonContent fullscreen>
                <div className="profile-container">
                    <IonRow>
                        <IonCol>
                            <IonImg
                                src={avatar}
                                class="img"
                            />
                        </IonCol>
                    </IonRow>
                    <IonCard class='card'>
                        <IonCardHeader>
                            <IonCardTitle className="card-title">John Masterchief</IonCardTitle>
                        </IonCardHeader>
                        <IonCardContent>
                            <IonItem>
                                <IonIcon icon={home} slot="start" />
                                <IonLabel className="" >16 Bd Général de Gaulle</IonLabel>
                                <IonIcon icon={pencil} slot="end" />
                            </IonItem>
                            <IonItem>
                                <IonIcon icon={briefcase} slot="start" />
                                <IonLabel className="" >3 rue de Broderie</IonLabel>
                                <IonIcon icon={pencil} slot="end" />
                            </IonItem>
                        </IonCardContent>
                    </IonCard>
                       
                    <IonCard className='card_conso'>
                         <LineChart data={chartData} />
                        <IonLabel className='conso-label'>Consommation de Co2</IonLabel>
                    </IonCard>
                    
                    <IonButton class='avantages' fill='solid' routerLink="/avantages">Mes avantages</IonButton>

                </div>
            </IonContent>
        </IonPage>
    );
};

export default Profile;
