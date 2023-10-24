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
} from '@ionic/react';
import './ChatBox.css';
import Header from "../components/header/header";

const ChatBox: React.FC = () => {
    const [messages, setMessages] = useState<string[]>([]);
    const [messageInput, setMessageInput] = useState<string>('');

    const handleSendMessage = () => {
        if (messageInput.trim() !== '') {
            setMessages([...messages, messageInput]);
            setMessageInput('');
        }
    };

    return (
        <IonPage>
            <Header />
            <IonContent className="ion-padding">
                <IonList className="chat-list">
                    <ChatBubble message="Hello!" sender="user" />
                    <ChatBubble message="Hi there!" sender="friend" />
                    <ChatBubble message="How are you doing?" sender="user" />
                    <ChatBubble message="I'm good, thanks!" sender="friend" />
                    {/* Add more messages here */}
                </IonList>
                <div className="input-container">
                    <input
                        type="text"
                        placeholder="Type a message..."
                        className="message-input"
                    />
                    <button className="send-button">Send</button>
                </div>
            </IonContent>
        </IonPage>
    );
};

const ChatBubble: React.FC<{ message: string; sender: 'user' | 'friend' }> = ({ message, sender }) => {
    return (
        <IonItem className={`chat-bubble ${sender === 'user' ? 'user' : 'friend'}`}>
            <IonLabel>{message}</IonLabel>
            {sender === 'friend' && (
                <IonAvatar slot="start">
                    <img src="https://via.placeholder.com/32" alt="Friend" />
                </IonAvatar>
            )}
        </IonItem>
    );
};

export default ChatBox;
