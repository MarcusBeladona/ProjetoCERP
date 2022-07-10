import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { axiosGetAvaliacaoById } from "../api/Request";
import { AuthContext } from "../App";
import { Navbar } from "../components/Navbar";
import "./PaginaVisualizarAvaliacao.css";

export function PaginaVisualizarAvaliacao() {
	return (
		<div className="PaginaVisualizarAvaliacao">
			<Navbar></Navbar>
			<div className="Conteudo">
				<div className="Area">
					<VisualizarAvaliacao></VisualizarAvaliacao>
				</div>
			</div>
		</div>
	);
}

function VisualizarAvaliacao() {
	const { register, handleSubmit } = useForm();
	const { id } = useParams();
	const token = useContext(AuthContext).tokenBody.token;
	const [avaliacao, setAvaliacao] = useState("");

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
		<form onSubmit={handleSubmit()} className="VisualizarAvaliacao">
			<header>
				<h1>Visualizar Avaliação</h1>
			</header>
			<div className="Formulario">
				<h3>Bioimpedância</h3>
				<div className="grid-4c">
					<article>
						<label>Peso</label>
						<input {...register("peso")} type="text" disabled defaultValue={avaliacao.peso} />
					</article>
					<article>
						<label>Altura</label>
						<input {...register("altura")} type="text" disabled defaultValue={avaliacao.altura} />
					</article>
					<article>
						<label>IMC</label>
						<input {...register("imc")} type="text" disabled defaultValue={avaliacao.imc}></input>
					</article>
					<article>
						<label>Gordura corporal</label>
						<input {...register("gorduraCorporal")} type="text" disabled defaultValue={avaliacao.gorduraCorporal}></input>
					</article>
					<article>
						<label>Idade corporal</label>
						<input {...register("idadeCorporal")} type="text" disabled defaultValue={avaliacao.idadeCorporal}></input>
					</article>
					<article>
						<label>Gordura Visceral</label>
						<input {...register("gorduraVisceral")} type="text" disabled defaultValue={avaliacao.gorduraVisceral}></input>
					</article>
					<article>
						<label>Músculo</label>
						<input {...register("musculo")} type="text" disabled defaultValue={avaliacao.musculo}></input>
					</article>
				</div>
				<h3>Tronco</h3>
				<div className="grid-3c">
					<article className="">
						<label>Torax</label>
						<input {...register("torax")} type="text" disabled defaultValue={avaliacao.torax} />
					</article>
					<article className="">
						<label>Cintura</label>
						<input {...register("cintura")} type="text" disabled defaultValue={avaliacao.cintura} />
					</article>
					<article>
						<label>Abdômen</label>
						<input {...register("abdomen")} type="text" disabled defaultValue={avaliacao.abdomen}></input>
					</article>
					<article>
						<label>Quadril</label>
						<input {...register("quadril")} type="text" disabled defaultValue={avaliacao.quadril}></input>
					</article>
					<article>
						<label>Cinturão escapular</label>
						<input {...register("cinturaoEscapular")} type="text" disabled defaultValue={avaliacao.cinturaoEscapular}></input>
					</article>
					<article>
						<label>Pescoço</label>
						<input {...register("pescoco")} type="text" disabled defaultValue={avaliacao.pescoco}></input>
					</article>
				</div>

				<h3>Membros superiores</h3>
				<div className="grid-3c">
					<article>
						<label>Punho</label>
						<input {...register("punho")} type="text" disabled defaultValue={avaliacao.punho} />
					</article>
					<article>
						<label>Antebraço</label>
						<input {...register("antebraco")} type="text" disabled defaultValue={avaliacao.antebraco} />
					</article>
					<article>
						<label>Braço relaxado</label>
						<input {...register("bracoRelaxado")} type="text" disabled defaultValue={avaliacao.bracoRelaxado}></input>
					</article>
					<article>
						<label>Braço contraído</label>
						<input {...register("bracoContraido")} type="text" disabled defaultValue={avaliacao.bracoContraido}></input>
					</article>
					<article>
						<label>Envergadura</label>
						<input {...register("envergadura")} type="text" disabled defaultValue={avaliacao.envergadura}></input>
					</article>
				</div>

				<h3>Membros inferiores</h3>
				<div className="grid-3c">
					<article>
						<label>Quadríceps proximal</label>
						<input {...register("quadricepsProximal")} type="text" disabled defaultValue={avaliacao.quadricepsProximal} />
					</article>
					<article>
						<label>Quadríceps medial</label>
						<input {...register("quadricepsMedial")} type="text" disabled defaultValue={avaliacao.quadricepsMedial} />
					</article>
					<article>
						<label>Quadríceps distal</label>
						<input {...register("quadricepsDistal")} type="text" disabled defaultValue={avaliacao.quadricepsDistal}></input>
					</article>
					<article>
						<label>Panturrilha</label>
						<input {...register("panturrilha")} type="text" disabled defaultValue={avaliacao.panturrilha}></input>
					</article>
					<article>
						<label>Tornozelo</label>
						<input {...register("tornozelo")} type="text" disabled defaultValue={avaliacao.tornozelo}></input>
					</article>
				</div>
			</div>
		</form>
	);
}
