import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import Mainlayout from "./component/layout/Mainlayout";

import Homepage from "./component/page/Homepage";
import Shoppage from "./component/page/Shoppage";
import Cartpage from "./component/page/Cartpage";
import Favoritepage from "./component/page/Favoritepage";
import Loginpage from "./component/page/Loginpage";

import ProductDetail from "./Product/ProductDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Mainlayout />}>
          <Route index element={<Homepage />} />

          <Route
            path="shop"
            element={<Shoppage />}
          />

          <Route
            path="product/:id"
            element={<ProductDetail />}
          />

          <Route
            path="cart"
            element={<Cartpage />}
          />

          <Route
            path="favorite"
            element={<Favoritepage />}
          />
        </Route>

        <Route
          path="/login"
          element={<Loginpage />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;