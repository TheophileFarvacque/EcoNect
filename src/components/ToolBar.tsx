import React, {useState} from 'react';
import {IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonIcon, IonTabButton} from "@ionic/react";
import {cafe, home, person, cart} from "ionicons/icons";
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
                        <IonIcon icon={cafe} slot="start" />
                        <IonLabel>
                            <Link to="/tab1">Tab 1</Link>
                        </IonLabel>
                    </IonItem>
                    <IonItem>
                        <IonIcon icon={cart} slot="start" />
                        <IonLabel>
                            <Link to="/tab2">Tab 2</Link>
                        </IonLabel>
                    </IonItem>
                    <IonItem>
                        <IonIcon icon={person} slot="start" />
                        <IonLabel>
                            <Link to="/tab3">Tab 3</Link>
                        </IonLabel>
                    </IonItem>
                </IonList>
            </IonContent>
        </IonMenu>
    );
};

export default ToolBar;
