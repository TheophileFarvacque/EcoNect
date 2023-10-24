import {
    IonCard, IonCardContent,
    IonCardHeader, IonCardSubtitle,
    IonCardTitle,
    IonContent,
    IonHeader, IonImg,
    IonPage,
    IonSearchbar,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
import Header from "../components/header/header";
import ToolBar from "../components/ToolBar";
import React, {useState} from "react";
import FetchProducts from "../services/mock-data-service";

const Tab2: React.FC = () => {
    const [searchText, setSearchText] = useState('');
    const {data} = FetchProducts('https://api-revendeurs-qymc.onrender.com/Order');
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(5);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(data?.length / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    // Filter the products based on the search text
    const filteredProducts = data?.filter((product: any) => {
        return product.idCustomer.toString().includes(searchText.toString());
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
                <IonSearchbar value={searchText} onIonChange={e => setSearchText(e.detail.value!)} placeholder="Search for orders" />
                {currentItems?.map((product: any) => (
                    <div key={product.id}>
                        <IonCard routerLink={`/DetailOrder/${product.id}`} className="bg">
                            <IonImg class="img"></IonImg>
                            <IonCardHeader>
                                <IonCardTitle>Order #{product.idCustomer}</IonCardTitle>
                                <IonCardSubtitle>{product.createdAt.split('T00:00:00')}</IonCardSubtitle>
                            </IonCardHeader>

                            <IonCardContent>

                            </IonCardContent>
                        </IonCard>
                    </div>
                ))}
                <div className="pagination">
                    {paginationButtons}
                </div>
            </IonContent>
            <ToolBar />
        </IonPage>
    );
};

export default Tab2;
