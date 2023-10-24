import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonCard,
    IonCardSubtitle,
    IonCardContent,
    IonCardHeader,
    IonCardTitle, IonIcon,
    IonFab,
    IonFabButton,
    IonButton
} from '@ionic/react';
import './DetailCafe.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faRightFromBracket} from '@fortawesome/free-solid-svg-icons';
import {camera, trash, close, arrowBack} from 'ionicons/icons';
import { prendrePhoto } from '../hooks/prendrePhoto';
import FetchProducts from "../services/mock-data-service";
import {useParams} from "react-router";
import { useState, useEffect } from "react";
import Header from "../components/header/header";
import ToolBar from "../components/ToolBar";
import axios from "axios";


interface RouteParams {
    id: string;
}

interface Product {
    id: string;
    name: string;
    price: number,
    stock: number;
    description: string;
    image: string;
    weight: string;
}

const DetailCafe: React.FC = () => {
    const { id } = useParams<RouteParams>();
    const [product, setProduct] = useState<Product>({
        id: "",
        name: "",
        price: 0,
        stock: 0,
        description: "",
        image: "",
        weight: "",
    });

    useEffect(() => {
        const getOneProduct = () => {
            const authToken = localStorage.getItem('authToken');

            axios.get(`https://api-revendeurs-qymc.onrender.com/Product/${id}`, {
            headers: {
                Authorization: `Bearer ${authToken}`,
            },
        }).then((response) => {
            console.log(response.data);
            setProduct(response.data);
            // Do something with the single product data
        }).catch((error) => {
            console.log(error);
            // Handle the error appropriately
        });
    }
        getOneProduct();
    }, [id]);

    const { takePhoto } = prendrePhoto();

    return (
        <IonPage>
            <Header />
            <IonContent fullscreen>
                <IonButton routerLink={'/tab1'}>
                    <IonIcon icon={arrowBack}></IonIcon>
                </IonButton>
                <IonCard>
                    <img alt="Cafe1"/>
                    <IonCardHeader>
                        <IonCardTitle>{product.name}</IonCardTitle>
                        <IonCardSubtitle>{product.description}</IonCardSubtitle>
                    </IonCardHeader>

                    <IonCardContent>
                        {product.price} € - {product.stock} - {product.weight} g
                    </IonCardContent>
                </IonCard>
                <IonFab horizontal="center">
                    <IonFabButton onClick={() => takePhoto()}>
                    <IonIcon icon={camera}></IonIcon>
                    </IonFabButton>
                </IonFab>
            </IonContent>
            <ToolBar />
        </IonPage>

    );
};

export default DetailCafe;
