import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css';

import Header from './components/homeScreen/Header';
import Footer from './components/homeScreen/Footer';
import HomeScreen from './components/homeScreen/HomeScreen';
import ArmorCreate from './components/armorOptions/ArmorCreate';
import AuthForm from './components/homeScreen/AuthForm';

import HelmPage from './components/armorOptions/Helm/HelmPage';
import HelmDetails from './components/armorOptions/Helm/HelmDetails';

function App() {
  return (
    <div className="App">
      <Header/>
        <Routes>
          <Route path='/' element={<HomeScreen/>} />
          <Route path='/helmArmor' element={<HelmPage/>} />
          <Route path='/helmArmor/:id' element={<HelmDetails/>}/>
          <Route path='/chestArmor' />
          <Route path='/chestArmor/:id' />
          <Route path='/legArmor' />
          <Route path='/legArmor/:id' />
          <Route path='/armorCreator' element={<ArmorCreate/>} />
          <Route path='auth' element={<AuthForm/>} />
          <Route path='*' element={<Navigate to='/' />}/>
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
