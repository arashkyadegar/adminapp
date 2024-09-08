import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/layout/layout';
import CategoryListComponent from './components/category/category-list';
import CategoryAddComponent from './components/category/category-add';
import CategoryEditComponent from './components/category/category-edit';
import LoginComponent from './components/login/login';
import myAppContext from './components/context/context';
import ProductListComponent from './components/product/product-list';
import ProductEditComponent from './components/product/product-edit';
import ProductAddComponent from './components/product/product-add';
import DashboardComponent from './components/dashboard';
import OrderAddComponent from './components/order/order-add';
import OrderListComponent from './components/order/order-list';
import { makeStore } from "./redux/store/store";
import { Provider } from 'react-redux';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from 'react-toastify';
import { LoginForm } from './models/entities';

function App() {

  const [loginForm, setLoginForm] = useState(new LoginForm());
  const [languageDrpDwnIsOpen, setLanguageDrpDwnIsOpen] = useState(false);
  const [userDrpDwnIsOpen, setUserDrpDwnIsOpen] = useState(false);
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [asideOrderDrpToggle, setAsideOrderDrpToggle] = useState(false)
  const [asideUserDrpToggle, setAsideUserDrpToggle] = useState(false)
  const [asideFinancialDrpToggle, setAsideFinancialDrpToggle] = useState(false)
  const [asideCellarDrpToggle, setAsideCellarDrpToggle] = useState(false);
  const [asideToggle, setAsideToggle] = useState(false);
  const [navbarW, setNavbarW] = useState(false);
  const [drpDwnIsOpen, setDrpDwnIsOpen] = useState(false);
  const [storeUserLinkDlgShow, setStoreUserLinkDlgShow] = useState(false);
  const [navbarShow, setNavbarShow] = useState(false);

  const store = makeStore();
  return (
    <myAppContext.Provider
      value={{
        loginForm,
        setLoginForm,
        languageDrpDwnIsOpen,
        setLanguageDrpDwnIsOpen,
        userDrpDwnIsOpen,
        setUserDrpDwnIsOpen,
        passwordVisibility,
        setPasswordVisibility,
        asideOrderDrpToggle,
        setAsideOrderDrpToggle,
        asideUserDrpToggle,
        setAsideUserDrpToggle,
        asideFinancialDrpToggle,
        setAsideFinancialDrpToggle,
        asideCellarDrpToggle,
        setAsideCellarDrpToggle,
        asideToggle,
        setAsideToggle,
        navbarW,
        setNavbarW,
        drpDwnIsOpen,
        setDrpDwnIsOpen,
        storeUserLinkDlgShow,
        setStoreUserLinkDlgShow,
        navbarShow,
        setNavbarShow,
      }}
    >
      <Provider store={store}>
        <ToastContainer />
        <BrowserRouter>
          <Routes>
            <Route path="/" >
              <Route path="/" element={<LoginComponent />} />
            </Route>
            <Route path="/" element={<Layout />}>
              {/* <Route index element={<LandingPageComponent />} /> */}
              {/* <Route path="login" element={<LoginComponent />} /> */}
              <Route path="dashboard" element={<DashboardComponent />} />


              <Route path="product/product-add" element={<ProductAddComponent />} />
              <Route path="product/product-list" element={<ProductListComponent />} />
              <Route path="product/product-edit/:id" element={<ProductEditComponent />} />


              <Route path="category/category-add" element={<CategoryAddComponent />} />
              <Route path="category/category-list" element={<CategoryListComponent />} />
              <Route path="category/category-edit/:id" element={<CategoryEditComponent />} />

              <Route path="order/order-add" element={<OrderAddComponent />} />
              <Route path="order/order-list" element={<OrderListComponent />} />


              {/* <Route path="category-list" element={<CategoryList />} />
          <Route path="category-edit/:id" element={<CategoryEdit />} /> */}
              {/*<Route path="direct" element={<DirectMsgComponent />} /> */}
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </myAppContext.Provider>
  );
}

export default App;
