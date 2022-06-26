import "./util/styles/global.css";
import "./util/styles/typos.css";
import "./util/styles/colors.css";

import { PaginaLogin } from "./components/pages/PaginaLogin";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { createContext, useState } from "react";

import { PaginaInicial } from "./components/pages/PaginaInicial/PaginaInicial";
import { PaginaCadastro } from "./components/pages/PaginaCadastro/PaginaCadastro";
import { PaginaEditarAluno } from "./components/pages/PaginaEditarAluno/PaginaEditarAluno";
import { PaginaEditarAvaliacao } from "./components/pages/PaginaEditarAvaliacao/PaginaEditarAvaliacao";
import { PaginaNovaAvaliacao } from "./components/pages/PaginaNovaAvaliacao/PaginaNovaAvaliacao";
import { PaginaVisualizar } from "./components/pages/PaginaVisualizar/PaginaVisualizar";
import { PaginaVisualizarAvaliacao } from "./components/pages/PaginaVisualizarAvaliacao/PaginaVisualizarAvaliacao";

export const AuthContext = createContext(null);

function App() {
	//Puxando token do localStorage, se primeira vez ele define "null"
	const [tokenBody, setToken] = useState({
		token: localStorage.getItem("token"),
		nome: localStorage.getItem("nome"),
	});

	//Função paralela que passa o estado do token para o localStorage antes.
	function setLocalToken(token) {
		localStorage.setItem("nome", token.nome);
		localStorage.setItem("token", token.token);
		setToken(token);
	}

	//Adicionar BrowserRoutes e NavLinks pra conseguir mudar as páginas aqui:
	return (
		<div className="App">
			<AuthContext.Provider value={{ tokenBody: tokenBody, setToken: setLocalToken }}>
				<BrowserRouter>{routes()}</BrowserRouter>
			</AuthContext.Provider>
		</div>
	);
}

// Todas as rotas da aplicação:
function routes() {
	return (
		<Routes>
			<Route path="/" element={<PaginaInicial></PaginaInicial>}></Route>
			<Route path="/cadastro" element={<PaginaCadastro></PaginaCadastro>}></Route>
			<Route path="/login" element={<PaginaLogin></PaginaLogin>}></Route>
			<Route path="/visualizar" element={<PaginaVisualizar></PaginaVisualizar>}></Route>
			<Route path="/visualizarAvaliacao" element={<PaginaVisualizarAvaliacao></PaginaVisualizarAvaliacao>}></Route>
			<Route path="/editarAluno" element={<PaginaEditarAluno></PaginaEditarAluno>}></Route>
			<Route path="/editarAvaliacao" element={<PaginaEditarAvaliacao></PaginaEditarAvaliacao>}></Route>
			<Route path="/novaAvaliacao" element={<PaginaNovaAvaliacao></PaginaNovaAvaliacao>}></Route>
		</Routes>
	);
}

export default App;
