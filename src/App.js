import './App.css';
import {HashRouter,Route,Switch} from "react-router-dom";
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import About from './pages/About';
import Faq from './pages/Faq';
import Profile from './pages/Profile';
import ChangePasswod from './pages/ChangePasswod';
import Forum from './pages/Forum';
import AddForum from './pages/AddForum';
import EditForum from './pages/EditForum';
import ForumDetail from './pages/ForumDetail';
import {AuthContextProvider} from "./firebase";
import Games from './pages/Games';
import TetrisGame from './pages/TetrisGame';
import Tetris from './components/tetris/Tetris';
function App() {
  return (
    <AuthContextProvider>
    <HashRouter>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/contact" component={Contact}/>
          <Route exact path="/terms" component={Terms}/>
          <Route exact path="/faq" component={Faq}/>
          <Route exact path="/privacy" component={Privacy}/>
          <Route exact path="/about" component={About}/>
          <Route axact path="/register" component={Register}/>
          <Route exact path="/profile" component={Profile}/>
          <Route exact path="/change-password" component={ChangePasswod}/>
          <Route exact path="/forum" component={Forum}/>
          <Route exact path="/forum/add" component={AddForum}/>
          <Route exact path="/forum/:id/edit" component={EditForum}/>
          <Route exact path="/forums/:id" component={ForumDetail}/>
          <Route exact path="/games" component={Games}/>
          <Route exact path="/tetris" component={Tetris}/>
        </Switch>
    </HashRouter>
    </AuthContextProvider>
  );
}

export default App;
