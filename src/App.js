import './App.css';
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import ProfileContainer from './components/Profile/ProfileContainer'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import { Route, Routes } from "react-router-dom"
import UsersContainer from './components/Users/UsersConteiner'



const App = (props) => {

  return (

    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Routes>
          <Route path="/dialogs"
            element={<DialogsContainer />} />
          <Route path="/profile:userId"
            element={<ProfileContainer />} />
          <Route path="/users"
            element={<UsersContainer />} />
            <Route path="/profile/*" 
            element={<ProfileContainer/>}/>
        </Routes>
      </div>


    </div>
  );
}

export default App;
