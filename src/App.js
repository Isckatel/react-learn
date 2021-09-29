import './App.css';
import {Route, withRouter} from "react-router-dom";
import HeaderContainer  from './components/Header/HeaderContainer';
import Navbar  from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Settings from './components/Settings/Settings';
import News    from './components/News/News';
import Music   from './components/Music/Music';
import Login from   './components/Login/Login'
import UsersContainer   from './components/Users/UsersContainer';
import React from 'react';
import {initializeThank} from "./redux/app-reducer";
import {connect} from 'react-redux';
import {compose} from 'redux';
import loader from './assets/img/oval.gif';

class App extends React.Component {
  componentDidMount() {
    this.props.initializeThank();
  }
  render() {
    if (!this.props.initialized) {
      return <img src={loader} />
    }    

    return (
        <div className="app-wrapper">
          <HeaderContainer />
          <Navbar />
          <div className="white-block">
            <Route path="/dialogs" render={ () => <DialogsContainer/> } />
            <Route path="/profile/:userId?" render={ () => <ProfileContainer/> } />
            <Route path="/users"   render={ () => <UsersContainer/> } />
            <Route path="/music" component={Music} />
            <Route path="/news" component={News} />
            <Route path="/settings" component={Settings} />
            <Route path="/login" component={Login} />
          </div>
        </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default compose(
  withRouter,
  connect(mapStateToProps, {initializeThank}))(App);
