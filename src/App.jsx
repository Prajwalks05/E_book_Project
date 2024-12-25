
import './App.css'
import Router from './Router/Router'
import './Components/Card'
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthProvider } from './Context/AuthContext';
import { useLocation } from 'react-router-dom';




const App = () => {
  return (
    <>
      <AuthProvider>
        <Router />
      </AuthProvider>
    </>
  );
};

export default App;

