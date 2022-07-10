// import { Box05 } from "../components/Box_05/Box05";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { axiosPostAvaliacao } from "../api/Request";
import { AuthContext } from "../App";
import { Navbar } from "../components/Navbar";
// import { Sidebar } from "../components/Sidebar";
import "./PaginaNovaAvaliacao.css";

export function PaginaNovaAvaliacao() {
	return (
		<div className="PaginaNovaAvaliacao">
			<Navbar></Navbar>

			<div className="Conteudo">
				<div className="Area">
					<NovaAvaliacao></NovaAvaliacao>
				</div>
			</div>
		</div>
	);
}

function NovaAvaliacao() {
	const { register, handleSubmit } = useForm();
	const token = useContext(AuthContext).tokenBody.token;
	const adminId = useContext(AuthContext).tokenBody.id;
	const { alunoId } = useParams();
	const navigate = useNavigate();

	function cadastrarAvaliacao(data) {
		data["dataAvaliacao"] = new Date().toISOString().slice(0, 10);
		data["avaliadorId"] = adminId;
		data["alunoId"] = alunoId;

		Object.keys(data).forEach(key => {
			if (data[key] === "") {
				delete data[key];
			}
		});

		console.log(data);
		axiosPostAvaliacao(token, data)
			.then(res => {
				console.log(res);
				alert("Avaliação cadastrada com sucesso.");
				navigate("/visualizarAluno/" + alunoId);
			})
			.catch(e => {
				console.log(e);
				alert("Confira se todos os dados estão preenchidos corretamente.");
			});
	}

	return (
		<form onSubmit={handleSubmit(cadastrarAvaliacao)} className="NovaAvaliacao">
			<header>
				<h1>Nova Avaliação</h1>
				<button type="submit" className="button-success">
					Salvar
				</button>
			</header>
			<div className="Formulario">
				<h3>Bioimpedância</h3>
				<div className="grid-4c">
					<article>
						<label>Peso</label>
						<input {...register("peso")} type="text" />
					</article>
					<article>
						<label>Altura</label>
						<input {...register("altura")} type="text" />
					</article>
					<article>
						<label>IMC</label>
						<input {...register("imc")} type="text"></input>
					</article>
					<article>
						<label>Gordura corporal</label>
						<input {...register("gorduraCorporal")} type="text"></input>
					</article>
					<article>
						<label>Idade corporal</label>
						<input {...register("idadeCorporal")} type="text"></input>
					</article>
					<article>
						<label>Gordura Visceral</label>
						<input {...register("gorduraVisceral")} type="text"></input>
					</article>
					<article>
						<label>Músculo</label>
						<input {...register("musculo")} type="text"></input>
					</article>
				</div>

				<h3>Tronco</h3>
				<div className="grid-3c">
					<article>
						<label>Torax</label>
						<input {...register("torax")} type="text" />
					</article>
					<article>
						<label>Cintura</label>
						<input {...register("cintura")} type="text" />
					</article>
					<article>
						<label>Abdômen</label>
						<input {...register("abdomen")} type="text"></input>
					</article>
					<article>
						<label>Quadril</label>
						<input {...register("quadril")} type="text"></input>
					</article>
					<article>
						<label>Cinturão escapular</label>
						<input {...register("cinturaoEscapular")} type="text"></input>
					</article>
					<article>
						<label>Pescoço</label>
						<input {...register("pescoco")} type="text"></input>
					</article>
				</div>

				<h3>Membros superiores</h3>
				<div className="grid-3c">
					<article>
						<label>Punho</label>
						<input {...register("punho")} type="text" />
					</article>
					<article>
						<label>Antebraço</label>
						<input {...register("antebraco")} type="text" />
					</article>
					<article>
						<label>Braço relaxado</label>
						<input {...register("bracoRelaxado")} type="text"></input>
					</article>
					<article>
						<label>Braço contraído</label>
						<input {...register("bracoContraido")} type="text"></input>
					</article>
					<article>
						<label>Envergadura</label>
						<input {...register("envergadura")} type="text"></input>
					</article>
				</div>

				<h3>Membros inferiores</h3>
				<div className="grid-3c">
					<article>
						<label>Quadríceps proximal</label>
						<input {...register("quadricepsProximal")} type="text" />
					</article>
					<article>
						<label>Quadríceps medial</label>
						<input {...register("quadricepsMedial")} type="text" />
					</article>
					<article>
						<label>Quadríceps distal</label>
						<input {...register("quadricepsDistal")} type="text"></input>
					</article>
					<article>
						<label>Panturrilha</label>
						<input {...register("panturrilha")} type="text"></input>
					</article>
					<article>
						<label>Tornozelo</label>
						<input {...register("tornozelo")} type="text"></input>
					</article>
				</div>
			</div>
		</form>
	);
}
