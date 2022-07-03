import "./PaginaEditarAluno.css";
import { Sidebar } from "../components/Sidebar";
import { Navbar } from "../components/Navbar";

/* import { Box08 } from "../components/Box_08/Box_08"; */
import { AuthContext, CheckLogin } from "../App";
import { useForm } from "react-hook-form";
import { axiosPostAluno } from "../api/Request";
import { useContext } from "react";

export function PaginaEditarAluno() {
	if (CheckLogin()) {
		return (
			<div className="PaginaEditarAluno">
				<Navbar></Navbar>
				<div className="Conteudo">
					<Sidebar></Sidebar>
					<div className="Area">
						<EditarAluno></EditarAluno>
						{/* <Box08></Box08> nao vamos mexer nessa agoraaaa */}
					</div>
				</div>
			</div>
		);
	}
}

function EditarAluno() {
	const { register, handleSubmit } = useForm();
	const token = useContext(AuthContext).tokenBody.token;

	function updateAluno(data) {
		console.log(data);
		axiosPostAluno(token, data)
			.then(res => {
				console.log(res);
			})
			.catch(e => alert(e));
	}

	return (
		<form onSubmit={handleSubmit(updateAluno)} className="EditarAluno">
			<header>
				<h1>Editar Alunos</h1>
			</header>
			<div className="Formulario">
				<div className="DadosPessoais">
					<article className="grid-nome">
						<label>Nome</label>
						<input {...register("nome")} type="text" defaultValue="Zé Avelino" />
					</article>
					<article>
						<label>Data de Nascimento</label>
						<input {...register("nascimento")} type="date" defaultValue="2002-06-12"></input>
					</article>
					<article>
						<label>Telefone</label>
						<input {...register("telefone")} type="tel"></input>
					</article>
					<article>
						<label>CPF</label>
						<input {...register("cpf")} type="text"></input>
					</article>
					<article>
						<label>RG</label>
						<input {...register("rg")} type="text"></input>
					</article>
				</div>

				<div className="DadosEndereco">
					<article className="grid-rua">
						<label>Rua</label>
						<input {...register("rua")} type="text" />
					</article>
					<article className="grid-bairro">
						<label>Bairro</label>
						<input {...register("bairro")} type="text"></input>
					</article>
					<article className="grid-cidade">
						<label>Cidade</label>
						<input {...register("cidade")} type="text"></input>
					</article>
					<article>
						<label>Número</label>
						<input {...register("numero")} type="text"></input>
					</article>
					<article>
						<label>CEP</label>
						<input {...register("cep")} type="text"></input>
					</article>
				</div>
			</div>
			<footer>
				<button className="button-outlined">Voltar</button>
				<button type="submit" className="button-success">
					Salvar
				</button>
			</footer>
		</form>
	);
}
