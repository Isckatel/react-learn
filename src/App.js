import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Header  from './components/Header/Header';
import Navbar  from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Settings from './components/Settings/Settings';
import News    from './components/News/News';
import Music   from './components/Music/Music';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar sitebar={props.state.sitebar}/>
        <div className="white-block">
          <Route path="/dialogs" render={()=><Dialogs messagesPage = {props.state.messagesPage}
                                                      addMess = {props.addMess}
                                                      updateNewMessText ={props.updateNewMessText}/>}/>

          <Route path="/profile" render={()=><Profile profilePage =       {props.state.profilePage}
                                                      addPost =           {props.addPost}
                                                      updateNewPostText = {props.updateNewPostText}/>}/>
          <Route path="/music" component={Music}/>
          <Route path="/news" component={News}/>
          <Route path="/settings" component={Settings}/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
