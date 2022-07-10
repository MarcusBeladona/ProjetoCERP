import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { axiosGetAvaliacaoById, axiosPutAvaliacao } from "../api/Request";
import { AuthContext } from "../App";
import { Navbar } from "../components/Navbar";
import "./PaginaEditarAvaliacao.css";

export function PaginaEditarAvaliacao() {
	return (
		<div className="PaginaEditarAvaliacao">
			<Navbar></Navbar>
			<div className="Conteudo">
				<div className="Area">
					<EditarAvaliacao></EditarAvaliacao>
				</div>
			</div>
		</div>
	);
}

function EditarAvaliacao() {
	const { register, handleSubmit } = useForm();
	const { id } = useParams();
	const token = useContext(AuthContext).tokenBody.token;
	const navigate = useNavigate();
	const [avaliacao, setAvaliacao] = useState("");

	function updateAvaliacao(data) {
		Object.keys(data).forEach(key => {
			if (data[key] === "") {
				delete data[key];
			}
		});

		axiosPutAvaliacao(token, id, data)
			.then(res => {
				alert("Avaliação atualizada com sucesso.");
				navigate("/visualizarAluno/" + res.data.alunoId);
			})
			.catch(e => {
				console.log(e);
				alert("Erro ao atualizar avaliação, tente novamente.");
			});
	}

	useEffect(() => {
		axiosGetAvaliacaoById(token, id)
			.then(res => {
				setAvaliacao(res.data);
			})
			.catch(err => {
				console.log(err);
				alert("Erro ao carregar avaliação, tente novamente.");
			});
	}, [id, token]);

	return (
		<form onSubmit={handleSubmit(updateAvaliacao)} className="EditarAvaliacao">
			<header>
				<h1>Editar Avaliação</h1>
				<button type="submit" className="button-success">
					Salvar
				</button>
			</header>
			<div className="Formulario">
				<h3>Bioimpedância</h3>
				<div className="grid-4c">
					<article>
						<label>Peso</label>
						<input {...register("peso")} type="text" defaultValue={avaliacao.peso} />
					</article>
					<article>
						<label>Altura</label>
						<input {...register("altura")} type="text" defaultValue={avaliacao.altura} />
					</article>
					<article>
						<label>IMC</label>
						<input {...register("imc")} type="text" defaultValue={avaliacao.imc}></input>
					</article>
					<article>
						<label>Gordura corporal</label>
						<input {...register("gorduraCorporal")} type="text" defaultValue={avaliacao.gorduraCorporal}></input>
					</article>
					<article>
						<label>Idade corporal</label>
						<input {...register("idadeCorporal")} type="text" defaultValue={avaliacao.idadeCorporal}></input>
					</article>
					<article>
						<label>Gordura Visceral</label>
						<input {...register("gorduraVisceral")} type="text" defaultValue={avaliacao.gorduraVisceral}></input>
					</article>
					<article>
						<label>Músculo</label>
						<input {...register("musculo")} type="text" defaultValue={avaliacao.musculo}></input>
					</article>
				</div>
				<h3>Tronco</h3>
				<div className="grid-3c">
					<article className="">
						<label>Torax</label>
						<input {...register("torax")} type="text" defaultValue={avaliacao.torax} />
					</article>
					<article className="">
						<label>Cintura</label>
						<input {...register("cintura")} type="text" defaultValue={avaliacao.cintura} />
					</article>
					<article>
						<label>Abdômen</label>
						<input {...register("abdomen")} type="text" defaultValue={avaliacao.abdomen}></input>
					</article>
					<article>
						<label>Quadril</label>
						<input {...register("quadril")} type="text" defaultValue={avaliacao.quadril}></input>
					</article>
					<article>
						<label>Cinturão escapular</label>
						<input {...register("cinturaoEscapular")} type="text" defaultValue={avaliacao.cinturaoEscapular}></input>
					</article>
					<article>
						<label>Pescoço</label>
						<input {...register("pescoco")} type="text" defaultValue={avaliacao.pescoco}></input>
					</article>
				</div>

				<h3>Membros superiores</h3>
				<div className="grid-3c">
					<article>
						<label>Punho</label>
						<input {...register("punho")} type="text" defaultValue={avaliacao.punho} />
					</article>
					<article>
						<label>Antebraço</label>
						<input {...register("antebraco")} type="text" defaultValue={avaliacao.antebraco} />
					</article>
					<article>
						<label>Braço relaxado</label>
						<input {...register("bracoRelaxado")} type="text" defaultValue={avaliacao.bracoRelaxado}></input>
					</article>
					<article>
						<label>Braço contraído</label>
						<input {...register("bracoContraido")} type="text" defaultValue={avaliacao.bracoContraido}></input>
					</article>
					<article>
						<label>Envergadura</label>
						<input {...register("envergadura")} type="text" defaultValue={avaliacao.envergadura}></input>
					</article>
				</div>

				<h3>Membros inferiores</h3>
				<div className="grid-3c">
					<article>
						<label>Quadríceps proximal</label>
						<input {...register("quadricepsProximal")} type="text" defaultValue={avaliacao.quadricepsProximal} />
					</article>
					<article>
						<label>Quadríceps medial</label>
						<input {...register("quadricepsMedial")} type="text" defaultValue={avaliacao.quadricepsMedial} />
					</article>
					<article>
						<label>Quadríceps distal</label>
						<input {...register("quadricepsDistal")} type="text" defaultValue={avaliacao.quadricepsDistal}></input>
					</article>
					<article>
						<label>Panturrilha</label>
						<input {...register("panturrilha")} type="text" defaultValue={avaliacao.panturrilha}></input>
					</article>
					<article>
						<label>Tornozelo</label>
						<input {...register("tornozelo")} type="text" defaultValue={avaliacao.tornozelo}></input>
					</article>
				</div>
			</div>
		</form>
	);
}
