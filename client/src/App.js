import "./util/styles/global.css";
import "./util/styles/typos.css";
import "./util/styles/colors.css";

import { LoginPage } from "./pages/LoginPage";
import "./App.css";
import React from "react";
import { PaginaInicial } from "./components/commons/pages/PaginaInicial/PaginaInicial";

function App() {
	return (
		<div>
			<LoginPage></LoginPage>
			<PaginaInicial></PaginaInicial>
		</div>
	);
}

export default App;
