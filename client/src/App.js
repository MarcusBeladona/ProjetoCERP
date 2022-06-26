import "./util/styles/global.css";
import "./util/styles/typos.css";
import "./util/styles/colors.css";

import { LoginPage } from "../src/components/pages/LoginPage";
import "./App.css";
import React from "react";
import { PaginaInicial } from "./components/pages/PaginaInicial/PaginaInicial";
import { PaginaCadastro } from "./components/pages/PaginaCadastro/PaginaCadastro";
import { PaginaEditarAluno } from "./components/pages/PaginaEditarAluno/PaginaEditarAluno";
import { PaginaEditarAvaliacao } from "./components/pages/PaginaEditarAvaliacao/PaginaEditarAvaliacao";
import { PaginaNovaAvaliacao } from "./components/pages/PaginaNovaAvaliacao/PaginaNovaAvaliacao";
import { PaginaVisualizar } from "./components/pages/PaginaVisualizar/PaginaVisualizar";
import { PaginaVisualizarAvaliacao } from "./components/pages/PaginaVisualizarAvaliacao/PaginaVisualizarAvaliacao";

function App() {
	//Adicionar BrowserRoutes e NavLinks pra conseguir mudar as páginas aqui:
	return (
		<div>
			<LoginPage></LoginPage>
			<PaginaInicial></PaginaInicial>
			<PaginaCadastro></PaginaCadastro>
			<PaginaEditarAluno></PaginaEditarAluno>
			<PaginaEditarAvaliacao></PaginaEditarAvaliacao>
			<PaginaNovaAvaliacao></PaginaNovaAvaliacao>
			<PaginaVisualizar></PaginaVisualizar>
			<PaginaVisualizarAvaliacao></PaginaVisualizarAvaliacao>
		</div>
	);
}

export default App;
