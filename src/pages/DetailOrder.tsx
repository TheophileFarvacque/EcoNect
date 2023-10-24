import {
    IonAvatar,
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonItem,
    IonLabel,
    IonButton, IonIcon, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonFab, IonFabButton,
    IonList, IonThumbnail
} from '@ionic/react';
import React, {useEffect, useState} from 'react';
import Header from "../components/header/header";
import ToolBar from "../components/ToolBar";
import {useParams} from "react-router";
import {prendrePhoto} from "../hooks/prendrePhoto";
import {arrowBack, camera} from "ionicons/icons";
import './DetailOrder.css';
import axios from "axios";
import FetchProducts from "../services/mock-data-service";


interface RouteParams {
    id: string;
}

interface Order {
    id: string;
    idCustomer: string;
    createdAt: string;
    products: {
        id: string;
        name: string;
        price: number,
        stock: number;
        description: string;
        image: string;
        weight: string;
    };
}

const DetailOrder: React.FC = () => {
    const { id } = useParams<RouteParams>();
    const [order, setOrder] = useState<Order>({
        id: "",
        idCustomer: "",
        createdAt: "",
        products: {
            id: "",
            name: "",
            price: 0,
            stock: 0,
            description: "",
            image: "",
            weight: "",
        }
    });

    const {data} = FetchProducts(`https://api-revendeurs-qymc.onrender.com/Order/${id}`);

    return (
        <IonPage>
            <Header />
            <IonContent fullscreen>
                <IonButton routerLink={'/tab2'}>
                    <IonIcon icon={arrowBack}></IonIcon>
                </IonButton>
                <IonCard>
                    <IonCardHeader>
                        <IonCardTitle>Order #{data?.idCustomer}</IonCardTitle>
                        <IonCardSubtitle>{data?.createdAt}</IonCardSubtitle>
                    </IonCardHeader>
                    <IonCardContent>
                        <IonList>
                            {data?.products?.map((product: any) => (
                                <IonItem routerLink={`/DetailCafe/${product.id}`}>
                                    <IonThumbnail slot="start">
                                        <img alt="" />
                                    </IonThumbnail>
                                    <IonLabel>{product.name}</IonLabel>
                                </IonItem>
                            ))}
                        </IonList>
                    </IonCardContent>
                </IonCard>
            </IonContent>
            <ToolBar />
        </IonPage>

    );
};

export default DetailOrder;
