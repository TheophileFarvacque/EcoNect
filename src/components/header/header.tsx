import {IonButton, IonHeader, IonTitle, IonToolbar, IonRow, IonMenuButton, IonButtons} from "@ionic/react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faRightFromBracket} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { useHistory } from "react-router-dom";
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Header: React.FC = () => {
    const history = useHistory();

    const logout = () => {
        localStorage.removeItem('authToken');
        localStorage.removeItem('email');
        localStorage.clear();
        document.cookie = "authToken=; expires=Thu; 01 Jan 1970 00:00:00 UTC; path=/;"
        history.push('/login')
    }
    return (
        <IonHeader>
            <IonToolbar>
                <IonButtons slot="start">
                    <FontAwesomeIcon icon={faBars} />
                    <IonMenuButton></IonMenuButton>
                </IonButtons>
                <IonRow>
                    <IonTitle style={{ textAlign: 'center' }}>Econnect</IonTitle>
                    <IonButton onClick={logout}>
                        <FontAwesomeIcon icon={faRightFromBracket} />
                    </IonButton>
                </IonRow>
            </IonToolbar>
        </IonHeader>
    );
};

export default Header;
