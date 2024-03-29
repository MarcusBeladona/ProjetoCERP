// Sistema
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import React, { createContext, useEffect, useState } from "react";
import "./App.css";

// Páginas
import { PaginaVisualizarAvaliacao } from "./pages/PaginaVisualizarAvaliacao";
import { PaginaImprimirAvaliacao } from "./pages/PaginaImprimirAvaliacao";
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
import "./styles/grid.css";
import { PaginaNovoAdmin } from "./pages/PaginaNovoAdmin";

// Contexto de utenticação
export const AuthContext = createContext(null);

export function CheckLogin() {
	const navigate = useNavigate();
	useEffect(() => {
		tryLogin();
	});

	function tryLogin() {
		if (localStorage.getItem("token") === "null") {
			alert("É necessário entrar na sua conta.");
			navigate("/login");
		}
	}

	return true;
}

function App() {
	//Puxando token do localStorage, se primeira vez ele define "null"
	const [tokenBody, setToken] = useState({
		token: localStorage.getItem("token"),
		nome: localStorage.getItem("nome"),
		id: localStorage.getItem("id"),
	});

	//Função paralela que passa o estado do token para o localStorage antes.
	function setLocalToken(token) {
		localStorage.setItem("nome", token.nome);
		localStorage.setItem("token", token.token);
		localStorage.setItem("id", token.id);
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
			<Route path="/novoAdmin" element={<PaginaNovoAdmin></PaginaNovoAdmin>}></Route>
			<Route path="/visualizarAluno/:alunoId" element={<PaginaVisualizar></PaginaVisualizar>}></Route>
			<Route path="/visualizarAvaliacao/:id" element={<PaginaVisualizarAvaliacao></PaginaVisualizarAvaliacao>}></Route>
			<Route path="/imprimirAvaliacao/:id" element={<PaginaImprimirAvaliacao></PaginaImprimirAvaliacao>}></Route>
			<Route path="/editarAluno/:id" element={<PaginaEditarAluno></PaginaEditarAluno>}></Route>
			<Route path="/editarAvaliacao/:id" element={<PaginaEditarAvaliacao></PaginaEditarAvaliacao>}></Route>
			<Route path="/novaAvaliacao/:alunoId" element={<PaginaNovaAvaliacao></PaginaNovaAvaliacao>}></Route>
		</Routes>
	);
}

export default App;
