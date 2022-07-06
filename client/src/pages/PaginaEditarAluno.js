import "./PaginaEditarAluno.css";
// import { Sidebar } from "../components/Sidebar";
import { Navbar } from "../components/Navbar";

import { AuthContext, CheckLogin } from "../App";
import { useForm } from "react-hook-form";
import { axiosPostAluno } from "../api/Request";
import { useContext } from "react";
import { TabelaAvaliacao } from "./PaginaVisualizar";

export function PaginaEditarAluno() {
	if (CheckLogin()) {
		return (
			<div className="PaginaEditarAluno">
				<Navbar></Navbar>
				<div className="Conteudo">
					{/* <Sidebar></Sidebar> */}
					<div className="Area">
						<EditarAluno></EditarAluno>
						<TabelaAvaliacao></TabelaAvaliacao>
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

	// const { register, handleSubmit } = useForm();
	// const navigate = useNavigate();

	return (
		<form onSubmit={handleSubmit(updateAluno)} className="EditarAluno">
			<header>
				<h1>Editar Aluno</h1>
			</header>
			<div className="Formulario">
				<h3>Dados Pessoais</h3>
				<div className="grid-2c">
					<article>
						<label>Nome</label>
						<input {...register("nome")} type="text" defaultValue="Zé Avelino de Souza" />
					</article>
					<article>
						<label>Data de Nascimento</label>
						<input {...register("nascimento")} type="date" defaultValue="2002-06-12"></input>
					</article>
					<article>
						<label>Telefone</label>
						<input {...register("telefone")} type="tel" defaultValue="(88) 9.9999-9999"></input>
					</article>
					<article>
						<label>CPF</label>
						<input {...register("cpf")} type="text" defaultValue="999.999.999-22"></input>
					</article>
				</div>

				<h3>Endereço</h3>
				<div className="grid-3c">
					<article>
						<label>Rua</label>
						<input {...register("rua")} type="text" defaultValue="Rua São Jão" />
					</article>
					<article>
						<label>Número</label>
						<input {...register("numero")} type="text" defaultValue="987"></input>
					</article>
					<article>
						<label>Bairro</label>
						<input {...register("bairro")} type="text" defaultValue="Centro"></input>
					</article>
					<article>
						<label>Cidade</label>
						<input {...register("cidade")} type="text" defaultValue="Tabuleiro do Norte"></input>
					</article>
					<article>
						<label>Estado</label>
						<input {...register("estado")} type="text" defaultValue="Ceará"></input>
					</article>
					<article>
						<label>CEP</label>
						<input {...register("cep")} type="text" defaultValue="63900-000"></input>
					</article>
				</div>
				<h3>Matrícula</h3>
				<div className="grid-3c">
					<article>
						<label>Data de Matrícula</label>
						<input {...register("dataMatricula")} type="date" defaultValue="2002-06-12"></input>
					</article>
					<article>
						<label>Objetivo</label>
						<input {...register("objetivo")} type="text" defaultValue="Ganho de Massa"></input>
					</article>
					<article>
						<label>Horário</label>
						<input {...register("horario")} type="time" defaultValue="18:00"></input>
					</article>
				</div>
			</div>
		</form>
	);
}
