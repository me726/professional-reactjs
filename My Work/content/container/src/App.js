import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MicroFrontend from './MicroFrontend';
import Header from './Header';

const {
  REACT_APP_BOOKSTORE_HOST: bookStoreHost
} = process.env;

const {
  REACT_APP_CART_HOST: cartHost
} = process.env;

function App() {
  const Bookstore = ({ history }) => (
    <MicroFrontend history={history} host={bookStoreHost} name="Bookstore" />
  );
  const Cart = ({ history }) => (
    <MicroFrontend history={history} host={cartHost} name="Cart" />
  );
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <Bookstore />
        } />
        <Route path="/cart" element={
          <Cart />
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
