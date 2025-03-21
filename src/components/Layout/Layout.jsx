import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { Outlet } from 'react-router-dom';
import './Layout.css';

 const Layout = () => {
  return (
    <>
      <Header />
        <main>
          <Outlet /> {/* Aquí se renderizan automáticamente tus rutas */}
        </main>
      <Footer />
    </>
  );
};

export {Layout}
