import Product from "./Product";
import { Route } from "react-router-dom";
import Goods from "./Goods";
function App() {
  return (
    <div>
      <Route exact path="/">
        <Product />
      </Route>
      <Route exact path="/goods/:id"><Goods/></Route>
    </div>
  );
}

export default App;
