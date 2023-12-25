import React from "react";
import ReactDOM from "react-dom/client";
import {
  RouterProvider,
  createRoutesFromElements,
  Route,
  createHashRouter,
} from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from "./routes/error-page";
import About from "./routes/About";
import Services from "./routes/Services";
import Main from "./components/Main";
import "./index.css";
import ProductDetailPage from "./components/products-detail/ProductDetailPage";
import products from "./data/products.json"
import AllProductsPage from "./components/products-detail/AllProductsPage";



const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
      <Route errorElement={<ErrorPage />}>
        <Route index element={<Main />} />
        <Route path="about/" element={<About />} />
        <Route path="services/" element={<Services />} />
        <Route path="/products/all-products" element={<AllProductsPage />} />

        {products.map((product) => (
          <Route
            path={`product/${product.productName}`}
            key={product.id}
            element={
              <ProductDetailPage
                key={product.id}
                productName={product.productName}
                description={product.description}
                price={product.price}
                imgUrl={product.imgUrl}
              />
            }
          />
        ))}
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
