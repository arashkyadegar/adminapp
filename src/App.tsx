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


import { LoginForm } from './models/entities';
import { persistStore } from 'redux-persist';
import SettingComponent from './components/setting/setting-edit';
import BrandAddComponent from './components/brand/brand-add';
import BrandEditComponent from './components/brand/brand-edit';
import BrandListComponent from './components/brand/brand-list';
import FaqAddComponent from './components/faq/faq-add';
import FaqListComponent from './components/faq/faq-list';
import FaqEditComponent from './components/faq/faq-edit';
import FaqGroupAddComponent from './components/faq-group/faq-group-add';
import FaqGroupListComponent from './components/faq-group/faq-group-list';
import FaqGroupEditComponent from './components/faq-group/faq-group-edit';
import ImageAddComponent from './components/image/image-add';
import ImageListComponent from './components/image/image-list';
import TicketAddComponent from './components/ticket/ticket-add';
import TicketListComponent from './components/ticket/ticket-list';
import AccessAddComponent from './components/access/access-add';
import AccessListComponent from './components/access/access-list';
import AuthProvider from './components/hooks/AuthProvider';
import ProtectedRoute from './components/hooks/protected-route';

function App() {

  const [loginForm, setLoginForm] = useState(new LoginForm());
  const [languageDrpDwnIsOpen, setLanguageDrpDwnIsOpen] = useState(false);
  const [userDrpDwnIsOpen, setUserDrpDwnIsOpen] = useState(false);
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [asideOrderDrpToggle, setAsideOrderDrpToggle] = useState(false)
  const [asideUserDrpToggle, setAsideUserDrpToggle] = useState(false)
  const [asideFinancialDrpToggle, setAsideFinancialDrpToggle] = useState(false)
  const [asideCellarDrpToggle, setAsideCellarDrpToggle] = useState(false);
  const [asideFaqsDrpToggle, setAsideFaqsDrpToggle] = useState(false);
  const [asideToggle, setAsideToggle] = useState(false);
  const [navbarW, setNavbarW] = useState(false);
  const [drpDwnIsOpen, setDrpDwnIsOpen] = useState(false);
  const [storeUserLinkDlgShow, setStoreUserLinkDlgShow] = useState(false);
  const [navbarShow, setNavbarShow] = useState(false);


  const [generalTabToggle, setGeneralTabToggle] = useState(true);
  const [seoTabToggle, setSeoTabToggle] = useState(false);
  const [sellTabToggle, setSellTabToggle] = useState(false);

  return (
    <myAppContext.Provider
      value={{
        // generalTabToggle,
        // setGeneralTabToggle,
        // seoTabToggle,
        // setSeoTabToggle,
        // sellTabToggle,
        // setSellTabToggle,
        asideFaqsDrpToggle,
        setAsideFaqsDrpToggle,
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
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" >
              <Route path="/" element={<LoginComponent />} />
            </Route>
            <Route path="/" element={<Layout />}>
              {/* <Route index element={<LandingPageComponent />} /> */}
              {/* <Route path="login" element={<LoginComponent />} /> */}
              <Route path="dashboard" element={<DashboardComponent />} />



              <Route
                path="/setting"
                element={(
                  <ProtectedRoute role={'admin'}>
                    <SettingComponent />
                  </ProtectedRoute>
                )}
              />

              <Route
                path="product/product-add"
                element={(
                  <ProtectedRoute role={'manager'}>
                    <ProductAddComponent />
                  </ProtectedRoute>
                )}
              />

              {/* <Route path="product/product-add" element={<ProductAddComponent />} /> */}
              <Route path="product/product-list" element={<ProductListComponent />} />
              <Route path="product/product-edit/:id" element={<ProductEditComponent />} />


              <Route path="category/category-add" element={<CategoryAddComponent />} />
              <Route path="category/category-list" element={<CategoryListComponent />} />
              <Route path="category/category-edit/:id" element={<CategoryEditComponent />} />

              <Route path="order/order-add" element={<OrderAddComponent />} />
              <Route path="order/order-list" element={<OrderListComponent />} />

              <Route path="brand/brand-add" element={<BrandAddComponent />} />
              <Route path="brand/brand-list" element={<BrandListComponent />} />
              <Route path="brand/brand-edit/:id" element={<BrandEditComponent />} />

              <Route path="faq/faq-add" element={<FaqAddComponent />} />
              <Route path="faq/faq-list" element={<FaqListComponent />} />
              <Route path="faq/faq-edit/:id" element={<FaqEditComponent />} />


              <Route path="faq-group/faq-group-add" element={<FaqGroupAddComponent />} />
              <Route path="faq-group/faq-group-list" element={<FaqGroupListComponent />} />
              <Route path="faq-group/faq-group-edit/:id" element={<FaqGroupEditComponent />} />


              <Route path="image/image-add" element={<ImageAddComponent />} />
              <Route path="image/image-list" element={<ImageListComponent />} />


              <Route path="ticket/ticket-add" element={<TicketAddComponent />} />
              <Route path="ticket/ticket-list" element={<TicketListComponent />} />

              <Route path="access/access-add" element={<AccessAddComponent />} />
              <Route path="access/access-list" element={<AccessListComponent />} />

              {/* <Route path="image/image-list" element={<ImageListComponent />} />
            <Route path="image/image-edit/:id" element={<ImageEditComponent />} /> */}
              {/* <Route path="category-list" element={<CategoryList />} />
          <Route path="category-edit/:id" element={<CategoryEdit />} /> */}
              {/*<Route path="direct" element={<DirectMsgComponent />} /> */}
            </Route>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </myAppContext.Provider >
  );
}

export default App;