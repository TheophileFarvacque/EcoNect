import React, { useState } from 'react';
import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonList,
    IonItem,
    IonInput,
    IonButton,
    IonAvatar,
    IonLabel,
    IonButtons,
    IonBackButton, IonIcon,
} from '@ionic/react';
import './ChatBox.css';
import Header from "../components/header/header";
import {arrowBack, send} from "ionicons/icons";
import { useParams } from 'react-router';
import { contactsData } from './ChatList';


const ChatBox: React.FC = () => {
    const { contactId } = useParams<{ contactId: string }>();

    const [messages, setMessages] = useState<string[]>([]);
    const [messageInput, setMessageInput] = useState<string>('');

    const handleSendMessage = () => {
        if (messageInput.trim() !== '') {
            setMessages([...messages, messageInput]);
            setMessageInput('');
        }
    };

    const selectedContact = contactsData.find((contact) => contact.id.toString() === contactId);

    return (
        <IonPage>
            <Header />
            <IonToolbar>
                <IonButtons slot="start">
                    <IonIcon icon={arrowBack} slot="start" />
                    <IonBackButton defaultHref="/chatList" />
                </IonButtons>
                <IonTitle style={{ textAlign: 'center' }}>Chat with  {selectedContact?.name}</IonTitle>
            </IonToolbar>
            <IonContent className="chat-content">
                <div className="bottom-content">
                <IonList className="chat-list">
                    {contactId === '1' && (
                        <>
                            <ChatBubble message="Hello there!" sender="user" />
                        </>
                    )}
                    {contactId === '2' && (
                        <>
                            <ChatBubble message="Hey!" sender="user" />
                            <ChatBubble message="hi John!" sender="friend" />
                        </>
                    )}
                    {contactId === '3' && (
                        <>
                            <ChatBubble message="Bonsoir Jack" sender="user" />
                            <ChatBubble message="Capitaine Jack*" sender="friend" />
                            <ChatBubble message="Vroum vroum ?" sender="user" />
                            <ChatBubble message="Ce que tu dis n'a aucun sens" sender="friend" />
                        </>
                    )}
                    {contactId === '4' && (
                        <>
                            <ChatBubble message="Hey!" sender="user" />
                            <ChatBubble message="Hello John!" sender="friend" />
                            <ChatBubble message="I'm fine, thanks!" sender="user" />

                        </>
                    )}{contactId === '5' && (
                    <>
                        <ChatBubble message="Tu es un saucier à riz" sender="user" />
                        <ChatBubble message="Hi there!" sender="friend" />
                        <ChatBubble message="How are you doing?" sender="user" />
                        <ChatBubble message="Ocus pocus!" sender="friend" />
                    </>
                )}
                    {contactId === '6' && (
                        <>
                            <ChatBubble message="Hey!" sender="user" />
                            <ChatBubble message="When available ?" sender="friend" />
                            <ChatBubble message="May the 4th" sender="user" />

                        </>
                    )}
                </IonList>

                    <input
                        type="text"
                        placeholder="Type a message..."
                        className="message-input"
                    />
                    <button className="send-button">
                        <IonIcon icon={send} slot="start" />
                    </button>
                </div>
            </IonContent>
        </IonPage>
    );
};

const ChatBubble: React.FC<{ message: string; sender: 'user' | 'friend' }> = ({ message, sender }) => {
    return (
        <IonItem className={`chat-bubble ${sender === 'user' ? 'user' : 'friend'}`}>
            <IonLabel>{message}</IonLabel>
        </IonItem>
    );
};

export default ChatBox;
