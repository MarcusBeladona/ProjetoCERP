import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { axiosGetAvaliacaoById } from "../api/Request";
import { AuthContext } from "../App";
import "./PaginaImprimirAvaliacao.css";

export function PaginaImprimirAvaliacao() {
	return (
		<div className="PaginaImprimirAvaliacao">
			<div className="Conteudo">
				<div className="Area">
					<ImprimirAvaliacao></ImprimirAvaliacao>
				</div>
			</div>
		</div>
	);
}

function ImprimirAvaliacao() {
	const { id } = useParams();
	const token = useContext(AuthContext).tokenBody.token;
	const { register } = useForm();
	const [avaliacao, setAvaliacao] = useState("");
	const [aluno, setAluno] = useState("");
	const [admin, setAdmin] = useState("");

	useEffect(() => {
		axiosGetAvaliacaoById(token, id)
			.then(res => {
				setAvaliacao(res.data);
				setAluno(res.data.alunoId);
				setAdmin(res.data.avaliadorId);
			})
			.catch(err => {
				console.log(err);
				alert("Erro ao carregar avaliação, tente novamente.");
			});
		setTimeout(function () {
			window.print();
		}, 500);
	}, [token, id]);

	return (
		<section className="ImprimirAvaliacao" onClick={window.print}>
			<section className="sectionCard">
				<header>
					<h1>Aluno</h1>
				</header>
				<div className="Formulario">
					<h3>Dados Pessoais</h3>
					<div className="grid-2c">
						<article>
							<label>Nome</label>
							<input type="text" defaultValue={aluno.nome} />
						</article>
						<article>
							<label>Data de Nascimento</label>
							<input type="date" defaultValue={aluno.nascimento}></input>
						</article>
						<article>
							<label>Telefone</label>
							<input type="tel" defaultValue={aluno.telefone}></input>
						</article>
						<article>
							<label>CPF</label>
							<input type="text" defaultValue={aluno.cpf}></input>
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
			</section>

			<section className="sectionCard">
				<header>
					<h1>Avaliação</h1>
				</header>

				<div className="Formulario">
					<h3>Informações</h3>
					<div className="grid-3c">
						<article>
							<label>Avaliador</label>
							<input {...register("nome")} type="text" defaultValue={admin.nome} />
						</article>
						<article>
							<label>E-mail do Avaliador</label>
							<input {...register("email")} type="email" defaultValue={admin.email}></input>
						</article>
						<article>
							<label>Data da Avaliação</label>
							<input {...register("nascimento")} type="date" defaultValue={avaliacao.dataAvaliacao}></input>
						</article>
					</div>
					<h3>Bioimpedância</h3>
					<div className="grid-4c">
						<article>
							<label>Peso</label>
							<input type="text" defaultValue={avaliacao.peso} />
						</article>
						<article>
							<label>Altura</label>
							<input type="text" defaultValue={avaliacao.altura} />
						</article>
						<article>
							<label>IMC</label>
							<input type="text" defaultValue={avaliacao.imc}></input>
						</article>
						<article>
							<label>Gordura corporal</label>
							<input type="text" defaultValue={avaliacao.gorduraCorporal}></input>
						</article>
						<article>
							<label>Idade corporal</label>
							<input type="text" defaultValue={avaliacao.idadeCorporal}></input>
						</article>
						<article>
							<label>Gordura Visceral</label>
							<input type="text" defaultValue={avaliacao.gorduraVisceral}></input>
						</article>
						<article>
							<label>Músculo</label>
							<input type="text" defaultValue={avaliacao.musculo}></input>
						</article>
					</div>
					<h3>Tronco</h3>
					<div className="grid-3c">
						<article className="">
							<label>Torax</label>
							<input type="text" defaultValue={avaliacao.torax} />
						</article>
						<article className="">
							<label>Cintura</label>
							<input type="text" defaultValue={avaliacao.cintura} />
						</article>
						<article>
							<label>Abdômen</label>
							<input type="text" defaultValue={avaliacao.abdomen}></input>
						</article>
						<article>
							<label>Quadril</label>
							<input type="text" defaultValue={avaliacao.quadril}></input>
						</article>
						<article>
							<label>Cinturão escapular</label>
							<input type="text" defaultValue={avaliacao.cinturaoEscapular}></input>
						</article>
						<article>
							<label>Pescoço</label>
							<input type="text" defaultValue={avaliacao.pescoco}></input>
						</article>
					</div>

					<h3>Membros superiores</h3>
					<div className="grid-3c">
						<article>
							<label>Punho</label>
							<input type="text" defaultValue={avaliacao.punho} />
						</article>
						<article>
							<label>Antebraço</label>
							<input type="text" defaultValue={avaliacao.antebraco} />
						</article>
						<article>
							<label>Braço relaxado</label>
							<input type="text" defaultValue={avaliacao.bracoRelaxado}></input>
						</article>
						<article>
							<label>Braço contraído</label>
							<input type="text" defaultValue={avaliacao.bracoContraido}></input>
						</article>
						<article>
							<label>Envergadura</label>
							<input type="text" defaultValue={avaliacao.envergadura}></input>
						</article>
					</div>

					<h3>Membros inferiores</h3>
					<div className="grid-3c">
						<article>
							<label>Quadríceps proximal</label>
							<input type="text" defaultValue={avaliacao.quadricepsProximal} />
						</article>
						<article>
							<label>Quadríceps medial</label>
							<input type="text" defaultValue={avaliacao.quadricepsMedial} />
						</article>
						<article>
							<label>Quadríceps distal</label>
							<input type="text" defaultValue={avaliacao.quadricepsDistal}></input>
						</article>
						<article>
							<label>Panturrilha</label>
							<input type="text" defaultValue={avaliacao.panturrilha}></input>
						</article>
						<article>
							<label>Tornozelo</label>
							<input type="text" defaultValue={avaliacao.tornozelo}></input>
						</article>
					</div>
				</div>
			</section>
		</section>
	);
}
