import './App.css';
import {Route} from "react-router-dom";
import Header  from './components/Header/Header';
import Navbar  from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Settings from './components/Settings/Settings';
import News    from './components/News/News';
import Music   from './components/Music/Music';


const App = () => {
  return (
      <div className="app-wrapper">
      <Header />
        <Navbar />
        <div className="white-block">
          <Route path="/dialogs" render={()=><DialogsContainer />}/>
          <Route path="/profile" render={()=><Profile />}/>
          <Route path="/music" component={Music}/>
          <Route path="/news" component={News}/>
          <Route path="/settings" component={Settings}/>
        </div>
      </div>
  );
}


export default App;
