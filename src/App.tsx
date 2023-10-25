import { Redirect, Route, Link } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonLabel,
  IonMenu,
  IonHeader,
  IonList,
  IonItem,
  IonContent,
  IonTitle,
  setupIonicReact,
  IonToolbar
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { person, home, cafe, cart } from 'ionicons/icons';
import Home from './pages/Home';
import Trajet from './pages/Trajet';
import Profile from './pages/Profile';
import Login from './pages/Login';
import DetailCafe from './pages/DetailCafe';
import DetailOrder from './pages/DetailOrder';
import Register from './pages/Register';
import ToolBar from './components/ToolBar';
import MapPage from "./pages/MapPage";
import Avantage from './pages/Avantages';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import React from "react";
import ChatBox from "./pages/ChatBox";
import ChatList from "./pages/ChatList";
import AddTrip from "./pages/AddTrip";

setupIonicReact();
const App: React.FC = () => (
    <IonApp>
      <IonReactRouter>
        <ToolBar />
        <IonRouterOutlet id="main-content">
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/paths">
            <Trajet />
          </Route>
          <Route path="/newPaths">
            <AddTrip />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/map">
            <MapPage />
          </Route>
          <Route path="/chatList">
            <ChatList />
          </Route>
          <Route path="/chat/:contactId">
            <ChatBox />
          </Route>
          <Route path="/avantages">
            <Avantage />
          </Route>
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
);

export default App;

