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
    IonCardTitle, IonSearchbar, IonButton, IonMenu, IonButtons, IonMenuButton
} from '@ionic/react';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faRightFromBracket} from '@fortawesome/free-solid-svg-icons';
import car from '../assets/images/car.png';
import FetchProducts from "../services/mock-data-service";
import React, {useState} from "react";
import ToolBar from "../components/ToolBar";
import Header from "../components/header/header";
import axios from "axios";

const Home: React.FC = () => {
    const [searchText, setSearchText] = useState('');
    const {data} = FetchProducts('https://api-revendeurs-qymc.onrender.com/Product');
    const images = [car];
    const randomIndex = Math.floor(Math.random() * images.length);
    const randomImage = images[randomIndex];
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(5);

    function randomize(image: number) {
        const images = [car];
        image = Math.floor(Math.random() * images.length);
        return images[image];
    }

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(data?.length / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    // Filter the products based on the search text
    const filteredProducts = data?.filter((product: any) => {
        return product.name.toLowerCase().includes(searchText.toLowerCase());
    });

    // Calculate the index of the first and last item to be displayed on the current page
    const indexOfLastItem = (currentPage) * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    // Slice the filtered products array to display only the items for the current page
    const currentItems = filteredProducts?.slice(indexOfFirstItem, indexOfLastItem);

    // Calculate the total number of pages based on the number of items and the itemsPerPage value
    const totalPages = Math.ceil(filteredProducts?.length / itemsPerPage);

    // Handler function for changing the current page


    const handlePageChange = (newPage: number) => {
        setCurrentPage(newPage);
    };


    const paginationButtons = [];
    for (let i = 1; i < totalPages; i++) {
        paginationButtons.push(
            <button key={i} className={`pagination-button ${i === currentPage ? 'active' : ''}`} onClick={() => handlePageChange(i)}>
                {i}
            </button>
        );
    }
    return (
        <IonPage>
            <Header />
            <IonContent fullscreen>
                <IonSearchbar value={searchText} onIonChange={e => setSearchText(e.detail.value!)} placeholder="Search for products" />
                {currentItems?.map((product: any) => (
                    <div key={product.id}>
                        <IonCard routerLink={`/DetailCafe/${product.id}`}>
                            <img alt="Cafe" src={randomize(1)}/>
                            <IonCardHeader>
                                <IonCardTitle>{product.name}</IonCardTitle>
                                <IonCardSubtitle>{product.description}</IonCardSubtitle>
                            </IonCardHeader>

                            <IonCardContent>
                                {product.price} €
                            </IonCardContent>
                        </IonCard>
                    </div>
                ))}
                <div className="pagination">
                    {paginationButtons}
                </div>
            </IonContent>
        </IonPage>
    );
};
export default Home;
