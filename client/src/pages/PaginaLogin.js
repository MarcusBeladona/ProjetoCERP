import logo from "../util/logo-amarelo.png";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./PaginaLogin.css";

import { useContext } from "react";
import { AuthContext } from "../App";
import { axiosSign } from "../api/Request";

export function PaginaLogin() {
	const { register, handleSubmit } = useForm();
	const user = useContext(AuthContext);
	const navigate = useNavigate();

	function enviarDados(dados) {
		axiosSign(dados)
			.then(res => {
				user.setToken({ token: res.data.token, nome: res.data.nome, id: res.data.id });
				navigate("/");
			})
			.catch(e => alert("Erro ao fazer login."));
	}

	return (
		<section className="PaginaLogin">
			<section className="left-area c-neutral-900">
				<img src={logo} alt="logo-amarelo" className="logo-amarelo" />
			</section>

			<section className="right-area c-neutral-200">
				<section className="loginForm">
					<header>
						<h1>Primeiro Acesso</h1>
						<p className="t-title">Coloque seu usuário e sua senha nos campos abaixo:</p>
					</header>
					<form onSubmit={handleSubmit(enviarDados)}>
						<p className="t-body">E-Mail</p>
						<input {...register("email")} type="email" placeholder="E-mail" />
						<p className="t-body">Senha</p>
						<input {...register("senha")} type="password" placeholder="Senha" />
						<button className="button-primary" type="submit">
							Entrar
						</button>
					</form>
					<footer>
						<p>Não tem uma conta?</p>
						<button onClick={() => navigate("/novoAdmin")}>Criar Conta</button>
					</footer>
				</section>
			</section>
		</section>
	);
}
