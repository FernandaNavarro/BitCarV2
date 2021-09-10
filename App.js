import React from "react";
import AppNavigation from "../BitCarV2/app/navigation/AppNavigation";
import {UsuarioProvider} from "../BitCarV2/app/context/UsuarioContext";


function App() {
  return (
    <UsuarioProvider>
      <AppNavigation />
    </UsuarioProvider>
    
  );
}

export default App;
