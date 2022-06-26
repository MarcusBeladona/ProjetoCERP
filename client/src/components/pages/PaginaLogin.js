import logo from "../../util/logo-amarelo.png";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./PaginaLogin.css";

import { useContext } from "react";
import { AuthContext } from "../../App.js";
import { axiosSign } from "../../api/Request";

export function PaginaLogin() {
	const { register, handleSubmit } = useForm();
	const user = useContext(AuthContext);
	const navigate = useNavigate();

	function enviarDados(dados) {
		axiosSign(dados)
			.then(res => {
				user.setToken({ token: res.data.token, nome: res.data.nome });
				navigate("/visualizar");
			})
			.catch(e => alert(e));
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
						<button className="button-primary" type="Submit">
							Entrar
						</button>
					</form>
				</section>
			</section>
		</section>
	);
}
