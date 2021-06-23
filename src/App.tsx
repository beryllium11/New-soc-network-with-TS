import React, {useEffect} from 'react';
import './App.css';
import Sidebar from './modules/navbar/Sidebar';
import {Route} from "react-router";
import Dialogs from "./modules/dialogs/Dialogs";
import {BrowserRouter} from "react-router-dom";
import UsersContainer from "./modules/users/UsersContainer";
import HeaderContainer from './modules/header/HeaderContainer';
import {Login} from './modules/login/Login';
import ProfileContainer from './modules/profile/ProfileContainer';
import { useDispatch } from 'react-redux';
import { getUserDataTC } from './redux/AuthReducer';

const App = () => {
    let dispatch = useDispatch()
    useEffect(() => {
        dispatch(getUserDataTC())
    })
    return (
            <BrowserRouter>
                <div className="app-wrapper">
                    <HeaderContainer/>
                    <Sidebar />
                    <div className="app-wrapper-content">
                            <Route path="/dialog" render={() => <Dialogs />}
                            />
                            <Route path="/profile/:userId?" render={() => <ProfileContainer />}
                            />
                            <Route path='/users' render={() => <UsersContainer />} />
                            <Route path='/login' render={() => <Login />} />
                    </div>
                </div>
            </BrowserRouter>
    );
}

export default App;
