import { Alert } from "../Alert";
import logo from "../../util/logo-amarelo.png";
import "./LoginPage.css";

export function LoginPage() {
	return (
		<section className="LoginPage">
			<Alert
				titulo="Tutorial"
				texto="Lorem ipsum dollor sit amet. Lorem ipsum dollor sit amet.
                 Lorem ipsum dollor sit amet. Lorem ipsum dollor sit amet."
				active={false} //Ativa e desativa o alerta.
			></Alert>

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
					</form>
					<form>
						<p className="t-body">Senha</p>
						<input type="password" placeholder="Senha" />
					</form>
					<button className="button-primary">Entrar</button>
				</section>
			</section>
		</section>
	);
}
