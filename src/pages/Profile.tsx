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
import React from 'react';
import './Profile.css';
import Header from "../components/header/header";
import ToolBar from "../components/ToolBar";
import avatar from "../assets/images/avatar.png"
import graph_co2 from "../assets/images/graph_co2.png"
import {briefcase, pencil, home} from "ionicons/icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Profile: React.FC = () => {
    function getEmail() {
        let email = localStorage.getItem('email');
        return email;
    }

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
                                <IonLabel className="profile-value">{getEmail()}</IonLabel>
                                <IonIcon icon={pencil} slot="end" />
                            </IonItem>
                            <IonItem>
                                <IonIcon icon={briefcase} slot="start" />
                                <IonLabel className="" >3 rue de Broderie</IonLabel>
                                <IonLabel className="profile-value">{getEmail()}</IonLabel>
                                <IonIcon icon={pencil} slot="end" />
                            </IonItem>
                        </IonCardContent>
                    </IonCard>
                       
                    <IonCard className='card_conso'>
                        <IonImg
                            src={graph_co2}
                            class="img"
                        />
                        <IonLabel className='conso-label'>Consommation de Co2</IonLabel>
                    </IonCard>
                    
                    <IonButton class='avantages' fill='solid' routerLink="/avantages">Mes avantages</IonButton>

                </div>
            </IonContent>
        </IonPage>
    );
};

export default Profile;
