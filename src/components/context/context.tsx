"use client"
import { createContext } from "react";
import { LoginForm } from "../../models/entities";

const myAppContext = createContext({
     languageDrpDwnIsOpen: false,
     setLanguageDrpDwnIsOpen: (languageDrpDwnIsOpen: boolean) => { },
     userDrpDwnIsOpen: false,
     setUserDrpDwnIsOpen: (userDrpDwnIsOpen: boolean) => { },
     drpDwnIsOpen: false,
     setDrpDwnIsOpen: (drpDwnIsOpen: boolean) => { },
     storeUserLinkDlgShow: false,
     setStoreUserLinkDlgShow: (storeUserLinkDlgShow: boolean) => { },
     navbarShow: false,
     setNavbarShow: (navbarShow: boolean) => { },
     navbarW: false,
     setNavbarW: (navbarW: boolean) => { },

     generalTabToggle: true,
     setGeneralTabToggle: (generalTabToggle: boolean) => { },
     seoTabToggle: false,
     setSeoTabToggle: (seoTabToggle: boolean) => { },
     sellTabToggle: false,
     setSellTabToggle: (sellTabToggle: boolean) => { },

     asideToggle: true,
     setAsideToggle: (asideToggle: boolean) => { },
     asideOrderDrpToggle: false,
     setAsideOrderDrpToggle: (asideOrderDrpToggle: boolean) => { },
     asideUserDrpToggle: false,
     setAsideUserDrpToggle: (asideUserDrpToggle: boolean) => { },
     asideFinancialDrpToggle: false,
     setAsideFinancialDrpToggle: (asideFinancialDrpToggle: boolean) => { },
     asideCellarDrpToggle: false,
     setAsideCellarDrpToggle: (asideCellarDrpToggle: boolean) => { },
     passwordVisibility: false,
     setPasswordVisibility: (passwordVisibility: boolean) => { },
     loginForm: {
          email: "",
          password: "",
          emailError: "",
          passwordError: "",
          formIsValid: false,
     },
     setLoginForm: (loginForm: LoginForm) => { },
});

export default myAppContext;
