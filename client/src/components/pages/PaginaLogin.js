import logo from "../../util/logo-amarelo.png";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./PaginaLogin.css";

import { useContext } from "react";
import { AuthContext } from "../../App.js";

export function PaginaLogin() {
	const { register, handleSubmit } = useForm();
	const user = useContext(AuthContext);
	const navigate = useNavigate();

	function enviarDados(dados) {
		/* signin(dados)
			.then(res => {
				user.setToken({ token: res.data.token, nome: res.data.nome });
				navigate("/");
			})
			.catch(e => {
				alert("Oops! Confira se todos os dados estão corretos.");
			}); */
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
					<form>
						<p className="t-body">Usuário</p>
						<input type="text" placeholder="Usuário" />
						<p className="t-body">Senha</p>
						<input type="password" placeholder="Senha" />
						<button className="button-primary" type="Submit">
							Entrar
						</button>
					</form>
				</section>
			</section>
		</section>
	);
}
