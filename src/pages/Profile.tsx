import {
    IonAvatar, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonLabel,
    IonImg,
    IonRow,
    IonCol,
    IonIcon
} from '@ionic/react';
import React from 'react';
import './Profile.css';
import Header from "../components/header/header";
import ToolBar from "../components/ToolBar";
import avatar from "../assets/images/avatar.png"


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
                    <IonItem lines="none">
                        <IonLabel className="profile-label">Email : </IonLabel>
                        <IonLabel className="profile-value">{getEmail()}</IonLabel>
                    </IonItem>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Profile;
