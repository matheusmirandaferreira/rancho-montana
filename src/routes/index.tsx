import { Route, Routes, Outlet } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Horses } from '../pages/Horses';
import { HorsesDetails } from '../pages/HorsesDetails';
import { Responsibles } from '../pages/Responsibles';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export function Router() {
  return (
    <Routes>
      <Route
        element={
          <>
            <Header />
            <Outlet />
            <Footer />
          </>
        }
      >
        <Route path="/" element={<Home />} />
        <Route path="/horses" element={<Horses />} />
        <Route path="/horses/:id" element={<HorsesDetails />} />
        <Route path="/responsibles" element={<Responsibles />} />
        <Route
          path="*"
          element={
            <div style={{ flex: 1, height: '100%' }}>
              <h1>Está página não existe</h1>
            </div>
          }
        />
      </Route>
    </Routes>
  );
}
