import React from "react";
import "./App.css";

import WrapperHeader from "./components/headerSection/wrapperHeader";
import Main from "./components/main/main";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <WrapperHeader />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
