import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { AppRouter } from './router/AppRouter.jsx';
import './App.css';

function App() {
  const modoClaro = useSelector(state => state.ui.modoClaro);

  useEffect(() => {
    document.body.className = modoClaro ? 'light-mode' : 'dark-mode';
    console.log('Clase actual del body:', document.body.className);
  }, [modoClaro]);

  return <AppRouter />;
}

export default App;
