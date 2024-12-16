import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";

import SafeComponent from "./SafeComponent";

import "./index.css";

import { capitalize } from 'home/utils';

const Header = React.lazy(() => import("home/Header"));
const Footer = React.lazy(() => import("home/Footer"));

const App = () => (
  <div className="container">
    <Suspense fallback={<div>Loading...</div>}>
      <SafeComponent>
        <Header />
      </SafeComponent>

      <div>
        <h5>{capitalize("Products")}</h5>
        <p>Welcome to the Products page</p>
      </div>
      <Footer />
    </Suspense>
  </div>
);
const rootElement = document.getElementById("app")
if (!rootElement) throw new Error("Failed to find the root element")

const root = ReactDOM.createRoot(rootElement)

root.render(<App />)