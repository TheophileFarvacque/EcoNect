import {IonContent, IonPage, IonList, IonIcon, IonLabel, IonItem, IonImg} from '@ionic/react';
import React from 'react';
import './ChatList.css';
import Header from "../components/header/header";
import avatar from "../assets/images/avatar.png"
import { useHistory } from 'react-router';

export  const contactsData = [
    { id: 1, name: 'John Doe', lastMessage: 'Hello there!' },
    { id: 2, name: 'Jane Smith', lastMessage: 'Hi John!' },
    { id: 3, name: 'J. Sparrow', lastMessage: "Ce que tu dis n'a aucun sens" },
    { id: 4, name: 'L. Kennedy', lastMessage: 'I\'m fine, thanks!' },
    { id: 5, name: 'H. Potter', lastMessage: 'Ocus pocus' },
    { id: 6, name: 'A. Skywalker', lastMessage: 'May the 4th' },
];

const ChatList: React.FC = () => {

    const history = useHistory();

    const handleContactClick = (contactId: number) => {
        // Navigate to the chat page with the contact's ID
        history.push(`/chat/${contactId}`);
    };
    return (
        <IonPage>
            <Header/>
            <IonContent fullscreen>
                <IonList>
                    {contactsData.map((contact) => (
                        <IonItem key={contact.id} onClick={() => handleContactClick(contact.id)}>
                            <IonImg
                                src={avatar}
                                class="contact"
                            />
                            <IonLabel>
                                <h2>{contact.name}</h2>
                                <p>{contact.lastMessage}</p>
                            </IonLabel>
                        </IonItem>
                    ))}
                </IonList>
            </IonContent>
        </IonPage>
    );
};

export default ChatList;
