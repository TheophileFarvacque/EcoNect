import React, {useState} from 'react';
import {
    IonButton,
    IonHeader,
    IonContent,
    IonInput,
    IonItem,
    IonLabel,
    IonPage,
    IonToolbar,
    IonTitle,
    IonRow,
    IonCol,
    IonIcon, IonAvatar, IonImg,
    IonAlert, useIonLoading
} from "@ionic/react";
import car from "../assets/images/car.png";


const Register: React.FC = () => {
    return (
        <IonPage class="bg">
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Econnect</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonImg src={car} class="img"></IonImg>
                <IonRow>
                    <IonCol>
                        <IonItem class="input">
                            <IonLabel position="floating"> Name</IonLabel>
                            <IonInput
                                type="text"

                            >
                            </IonInput>
                        </IonItem>
                        <IonItem class="input">
                            <IonLabel position="floating"> Email</IonLabel>
                            <IonInput
                                type="email"

                            >
                            </IonInput>
                        </IonItem>
                        <IonItem class="input">
                            <IonLabel position="floating"> Password</IonLabel>
                            <IonInput
                                type="password"
                            >
                            </IonInput>
                        </IonItem>
                        <IonItem class="input">
                            <IonLabel position="floating"> Confirm password</IonLabel>
                            <IonInput
                                type="password"
                            >
                            </IonInput>
                        </IonItem>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                        <IonButton expand="block">
                            Register
                        </IonButton>
                        <p style={{fontSize: "medium", textAlign: "center"}}>
                            Already have an account? <a href="/Login">Login!</a>
                        </p>
                    </IonCol>
                </IonRow>
            </IonContent>
        </IonPage>
    );
};

export default Register;
