import { createContext, useState } from "react";

export default function AddProductTabMenuComponent() {
  const ProductAddContext = createContext({
    generalTabToggle: true,
    setGeneralTabToggle: (generalTabToggle: boolean) => { },
    seoTabToggle: false,
    setSeoTabToggle: (seoTabToggle: boolean) => { },
    sellTabToggle: false,
    setSellTabToggle: (sellTabToggle: boolean) => { }
  });
  const [generalTabToggle, setGeneralTabToggle] = useState(false);
  const [seoTabToggle, setSeoTabToggle] = useState(false);
  const [sellTabToggle, setSellTabToggle] = useState(false);
  function hideAllTab() {
    setGeneralTabToggle(false);
    setSeoTabToggle(false);
    setSellTabToggle(false);
  }
  function toggleGeneralTab(event: any) {
    hideAllTab();
    setGeneralTabToggle(true);
  }
  function toggleSeoTab(event: any) {
    hideAllTab();
    setSeoTabToggle(true);
  }
  function toggleSellTab(event: any) {
    hideAllTab();
    setSellTabToggle(true);
  }

  return (
    <ProductAddContext.Provider value={{
      generalTabToggle, setGeneralTabToggle,
      seoTabToggle, setSeoTabToggle,
      sellTabToggle, setSellTabToggle
    }}>

    </ProductAddContext.Provider>
  );
}