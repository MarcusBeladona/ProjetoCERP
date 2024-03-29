import "./PaginaEditarAluno.css";
// import { Sidebar } from "../components/Sidebar";
import { Navbar } from "../components/Navbar";

import { AuthContext, CheckLogin } from "../App";
import { useForm } from "react-hook-form";
import { axiosPutAluno, axiosGetAlunoById } from "../api/Request";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export function PaginaEditarAluno() {
	if (CheckLogin()) {
		return (
			<div className="PaginaEditarAluno">
				<Navbar></Navbar>
				<div className="Conteudo">
					<div className="Area">
						<EditarAluno></EditarAluno>
					</div>
				</div>
			</div>
		);
	}
}

function EditarAluno() {
	const { register, handleSubmit } = useForm();
	const token = useContext(AuthContext).tokenBody.token;
	const { id } = useParams();
	const [aluno, setAluno] = useState("");
	const navigate = useNavigate();

	function updateAluno(data) {
		Object.keys(data).forEach(key => {
			if (data[key] === "") {
				delete data[key];
			}
		});
		axiosPutAluno(token, id, data)
			.then(res => {
				alert("Aluno atualizado com sucesso.");
				navigate("/");
			})
			.catch(e => {
				console.log(e);
				alert("Erro ao atualizar aluno, tente novamente.");
			});
	}

	useEffect(() => {
		axiosGetAlunoById(token, id)
			.then(res => {
				setAluno(res.data);
			})
			.catch(err => {
				console.log(err);
				alert("Erro ao carregar aluno, tente novamente.");
			});
	}, [id, token]);

	// const { register, handleSubmit } = useForm();
	// const navigate = useNavigate();

	return (
		<form onSubmit={handleSubmit(updateAluno)} className="EditarAluno">
			<header>
				<h1>Editar Aluno</h1>
				<button type="submit" className="button-success">
					Salvar
				</button>
			</header>
			<div className="Formulario">
				<h3>Dados Pessoais</h3>
				<div className="grid-2c">
					<article>
						<label>Nome</label>
						<input {...register("nome")} type="text" defaultValue={aluno.nome} />
					</article>
					<article>
						<label>Data de Nascimento</label>
						<input {...register("nascimento")} type="date" defaultValue={aluno.nascimento}></input>
					</article>
					<article>
						<label>Telefone</label>
						<input {...register("telefone")} type="tel" defaultValue={aluno.telefone}></input>
					</article>
					<article>
						<label>CPF</label>
						<input {...register("cpf")} type="text" defaultValue={aluno.cpf}></input>
					</article>
				</div>

				<h3>Endereço</h3>
				<div className="grid-3c">
					<article>
						<label>Rua</label>
						<input {...register("rua")} type="text" defaultValue={aluno.rua} />
					</article>
					<article>
						<label>Número</label>
						<input {...register("numero")} type="text" defaultValue={aluno.numero}></input>
					</article>
					<article>
						<label>Bairro</label>
						<input {...register("bairro")} type="text" defaultValue={aluno.bairro}></input>
					</article>
					<article>
						<label>Cidade</label>
						<input {...register("cidade")} type="text" defaultValue={aluno.cidade}></input>
					</article>
					<article>
						<label>Estado</label>
						<input {...register("estado")} type="text" defaultValue={aluno.estado}></input>
					</article>
					<article>
						<label>CEP</label>
						<input {...register("cep")} type="text" defaultValue={aluno.cep}></input>
					</article>
				</div>
				<h3>Matrícula</h3>
				<div className="grid-3c">
					<article>
						<label>Data de Matrícula</label>
						<input {...register("dataMatricula")} type="date" defaultValue={aluno.dataMatricula}></input>
					</article>
					<article>
						<label>Objetivo</label>
						<input {...register("objetivo")} type="text" defaultValue={aluno.objetivo}></input>
					</article>
					<article>
						<label>Horário</label>
						<input {...register("horario")} type="time" defaultValue={aluno.horario}></input>
					</article>
				</div>
			</div>
		</form>
	);
}
