// Sistema
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { createContext, useState } from "react";
import "./App.css";

// Páginas
import { PaginaVisualizarAvaliacao } from "./pages/PaginaVisualizarAvaliacao";
import { PaginaEditarAvaliacao } from "./pages/PaginaEditarAvaliacao";
import { PaginaNovaAvaliacao } from "./pages/PaginaNovaAvaliacao";
import { PaginaEditarAluno } from "./pages/PaginaEditarAluno";
import { PaginaVisualizar } from "./pages/PaginaVisualizar";
import { PaginaCadastro } from "./pages/PaginaCadastro";
import { PaginaInicial } from "./pages/PaginaInicial";
import { PaginaLogin } from "./pages/PaginaLogin";

// Estilos
import "./styles/global.css";
import "./styles/typos.css";
import "./styles/colors.css";

// Contexto de utenticação
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
