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
    IonImg,
    IonAlert,
    IonLoading
} from "@ionic/react";
import car from "../assets/images/car.png";
import './Login.css';
import { useHistory } from "react-router-dom";
import axios from "axios";

function validateEmail(email: string) {
    const re = /^((?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\]))$/;
    return re.test(String(email).toLowerCase());
}

const Login: React.FC = () => {
    const history = useHistory();
    const [iserror, setIserror] = useState<boolean>(false);
    const [message, setMessage] = useState<string>("");
    const errorMessage = "Auth failure! Invalid email or password " +
         "or please create an account";
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const mockEmail = 'a';
    const mockPassword = 'a';

    const handleLogin = () => {
        setIsLoading(true);

        if (email === mockEmail && password === mockPassword) {
            // Simulate a successful login
            localStorage.setItem("authToken", 'mockAuthToken');
            localStorage.setItem("email", email);

            setTimeout(() => {
                history.push("/home");
                setIsLoading(false);
            }, 1000);
        } else {
            // Simulate a failed login
            setIsLoading(false);
            setMessage(errorMessage);
            setIserror(true);
        }
    };

    // const handleLogin = async () => {
    //     setIsLoading(true);
    //     try {
    //         if (!email) {
    //             setMessage("Please enter a valid email");
    //             setIserror(true);
    //             setIsLoading(false);
    //             return;
    //         }
    //         if (validateEmail(email) === false) {
    //             setMessage(errorMessage);
    //             setIserror(true);
    //             setIsLoading(false);
    //             return;
    //         }
    //
    //         if (!password) {
    //             setMessage(errorMessage);
    //             setIserror(true);
    //             setIsLoading(false);
    //             return;
    //         }
    //         const api = axios.create({
    //             baseURL: `https://api-revendeurs-qymc.onrender.com`
    //         })
    //         api.post("/Authentication",{
    //             email,
    //             password,
    //         } )
    //             .then(res => {
    //                 localStorage.setItem("authToken", res.data.value);
    //                 localStorage.setItem("email", email);
    //                 console.log(res.data.value);
    //                 console.log(res.data.statusCode);
    //                 if (res.data.statusCode === 200) {
    //                     setTimeout(() => {
    //                         history.push("/Home");
    //                         setIsLoading(false);
    //                     }, 1000)
    //                 } else {
    //                     console.log('error');
    //                     setIsLoading(false);
    //                     setMessage(errorMessage);
    //                     setIserror(true)
    //                 }
    //
    //             })
    //             .catch(error=>{
    //                 console.log(error);
    //                 setMessage(errorMessage);
    //                 setIserror(true)
    //             })
    //     } catch (error) {
    //         console.error(error);
    //         setMessage(errorMessage);
    //         setIserror(true);
    //     }
    // };
    return (
        <IonPage class="bg">
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Econnect</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonRow>
                    <IonCol>
                        <IonAlert
                            isOpen={iserror}
                            onDidDismiss={() => setIserror(false)}
                            cssClass="my-custom-class"
                            header={"Error!"}
                            message={message}
                            buttons={["Dismiss"]}
                        />
                    </IonCol>
                </IonRow>
                <IonImg src={car} class="img"></IonImg>
                <IonRow>
                    <IonCol>
                        <IonItem class="input">
                            <IonLabel position="floating"> Email</IonLabel>
                            <IonInput
                                type="email"
                                value={email}
                                onIonChange={(e) => setEmail(e.detail.value!)}
                            >
                            </IonInput>
                        </IonItem>
                        <IonItem class="input">
                            <IonLabel position="floating"> Password</IonLabel>
                            <IonInput
                                type="password"
                                value={password}
                                onIonChange={(e) => setPassword(e.detail.value!)}
                            >
                            </IonInput>
                        </IonItem>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                        <IonButton expand="block" onClick={handleLogin}>
                            Login
                        </IonButton>
                        <IonLoading isOpen={isLoading} />
                        <p style={{fontSize: "medium", textAlign: "center"}}>
                            Don't have an account? <a href="/register">Sign up!</a>
                        </p>
                    </IonCol>
                </IonRow>
            </IonContent>
        </IonPage>
    );
};

export default Login;
