import logo from "../util/logo-amarelo.png";
import "./PaginaNovoAdmin.css";

import { useContext } from "react";
import { AuthContext } from "../App";
import { axiosPostAdmin, axiosSign } from "../api/Request";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

export function PaginaNovoAdmin() {
	const { register, handleSubmit } = useForm();
	const user = useContext(AuthContext);
	const navigate = useNavigate();

	function enviarDados(dados) { // dados = { nome, email, senha }
		axiosPostAdmin(dados)
			.then(res => { // res = { token, nome }
				console.log(res);
				axiosSign({ email: res.data.email, senha: dados.senha }) // Comparando ambas as entradas, res e dados
					.then(res => {
						user.setToken({ token: res.data.token, nome: res.data.nome });
						navigate("/");
					})
					.catch(e => { // Isso nunca deveria acontecer
						alert("Administrador cadastrado, porém erro ao fazer login. Tente logar manualmente.");
						navigate("/login");
					});
			})
			.catch(e => alert("Erro ao cadastrar administrador."));
	}

	return (
		<div className="PaginaNovoAdmin">
			<section className="left-area c-neutral-900">
				<img src={logo} alt="logo-amarelo" className="logo-amarelo" />
			</section>

			<section className="right-area c-neutral-200">
				<section className="loginForm">
					<header>
						<h1>Criar Nova Conta</h1>
						<p className="t-title">Coloque seu usuário e sua senha nos campos abaixo:</p>
					</header>
					<form onSubmit={handleSubmit(enviarDados)}>
						<p className="t-body">Nome</p>
						<input {...register("nome")} type="text" placeholder="Nome" />
						<p className="t-body">E-Mail</p>
						<input {...register("email")} type="email" placeholder="E-mail" />
						<p className="t-body">Senha</p>
						<input {...register("senha")} type="password" placeholder="Senha" />
						<button className="button-primary" type="submit">
							Entrar
						</button>
					</form>
					<footer>
						<p>Já tem uma conta?</p>
						<button onClick={() => navigate("/login")}>Fazer Login</button>
					</footer>
				</section>
			</section>
		</div>
	);
}
