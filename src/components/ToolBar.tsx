import React, {useState} from 'react';
import {IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonIcon, IonTabButton} from "@ionic/react";
import { map, person, car, chatbox, barChart, diamond, home} from "ionicons/icons";
import {IonReactRouter} from "@ionic/react-router";
import { Link } from 'react-router-dom';


const ToolBar = () => {
    return (
        <IonMenu side="start" contentId="main-content">
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Menu</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonList>
                    <IonItem>
                        <IonIcon icon={home} slot="start" />
                        <IonLabel>
                            <Link to="/home">Accueil</Link>
                        </IonLabel>
                    </IonItem>
                    <IonItem>
                        <IonIcon icon={person} slot="start" />
                        <IonLabel>
                            <Link to="/profile">Profil</Link>
                        </IonLabel>
                    </IonItem>
                    <IonItem>
                        <IonIcon icon={chatbox} slot="start" />
                        <IonLabel>
                            <Link to="/chatList">Messages</Link>
                        </IonLabel>
                    </IonItem>
                    <IonItem>
                        <IonIcon icon={car} slot="start" />
                        <IonLabel>
                            <Link to="/paths">Trajets</Link>
                        </IonLabel>
                    </IonItem>
                    <IonItem>
                        <IonIcon icon={map} slot="start" />
                        <IonLabel>
                            <Link to="/map">Carte</Link>
                        </IonLabel>
                    </IonItem>
                    <IonItem>
                        <IonIcon icon={barChart} slot="start" />
                        <IonLabel>
                            <Link to="/tab3">Consommation</Link>
                        </IonLabel>
                    </IonItem>
                    <IonItem>
                        <IonIcon icon={diamond} slot="start" />
                        <IonLabel>
                            <Link to="/avantages">Avantages</Link>
                        </IonLabel>
                    </IonItem>
                </IonList>
            </IonContent>
        </IonMenu>
    );
};

export default ToolBar;
