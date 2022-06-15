import "./util/styles/global.css";
import "./util/styles/typos.css";
import "./util/styles/colors.css";

//import { LoginPage } from "../src/components/pages/LoginPage";
import "./App.css";
import React from "react";
import { PaginaInicial } from "./components/pages/PaginaInicial/PaginaInicial";

function App() {
	//Adicionar BrowserRoutes e NavLinks pra conseguir mudar as páginas aqui:
	return (
		<div>
			{/* <LoginPage></LoginPage> */}
			<PaginaInicial></PaginaInicial>
		</div>
	);
}

export default App;
