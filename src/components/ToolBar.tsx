import React, {useState} from 'react';
import {IonIcon, IonTabBar, IonTabButton} from "@ionic/react";
import {cafe, home, person, cart} from "ionicons/icons";
import {IonReactRouter} from "@ionic/react-router";


const ToolBar = () => {
    return (
            <IonTabBar slot="bottom">
                <IonTabButton tab="tab1" href="/tab1">
                    <IonIcon icon={cafe}/>
                </IonTabButton>
                <IonTabButton tab="tab2" href="/tab2">
                    <IonIcon icon={cart}/>
                </IonTabButton>
                <IonTabButton tab="tab3" href="/tab3">
                    <IonIcon icon={person}/>
                </IonTabButton>
                <IonTabButton tab="tab3" href="/tab3">
                    <IonIcon icon={person}/>
                </IonTabButton>
            </IonTabBar>
    );
};

export default ToolBar;
