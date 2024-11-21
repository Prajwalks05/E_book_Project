
import './App.css'
import Router from './Router/Router'
import './Components/Card'
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthProvider } from './Context/AuthContext';




const App=() => {
  return(
    <>
      <AuthProvider>
        <Router />
      </AuthProvider>
    </>
  );
};

export default App;

