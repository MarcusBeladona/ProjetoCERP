import "./PaginaEditarAluno.css";
import { Sidebar } from "../components/Sidebar";
import { Navbar } from "../components/Navbar";

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
            <EditarAvaliacao></EditarAvaliacao>
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
      .then((res) => {
        console.log(res);
      })
      .catch((e) => alert(e));
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
            <input
              {...register("nome")}
              type="text"
              defaultValue="Zé Avelino"
            />
          </article>
          <article>
            <label>Data de Nascimento</label>
            <input
              {...register("nascimento")}
              type="date"
              defaultValue="2002-06-12"
            ></input>
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

function EditarAvaliacao() {
  const { register, handleSubmit } = useForm();
  //   const token = useContext(AuthContext).tokenBody.token;

  return (
    <form onSubmit={handleSubmit()} className="EditarAvaliacao">
      <header>
        <h1>Editar Avaliação</h1>
      </header>
      <div className="Formulario">
        <h3>Bioimpedância</h3>
        <div className="Bioimpedancia">
          <article className="grid-peso">
            <label>Peso</label>
            <input {...register("peso")} type="text" defaultValue="56kg" />
          </article>
          <article className="grid-altura">
            <label>Altura</label>
            <input {...register("altura")} type="text" defaultValue="1.65cm" />
          </article>
          <article>
            <label>IMC</label>
            <input {...register("imc")} type="text" defaultValue="21.5"></input>
          </article>
          <article>
            <label>Gordura corporal</label>
            <input {...register("gordura-corporal")} type="text"></input>
          </article>
          <article>
            <label>Idade corporal</label>
            <input {...register("idade-corporal")} type="text"></input>
          </article>
          <article>
            <label>Gordura Visceral</label>
            <input {...register("gordura-visceral")} type="text"></input>
          </article>
          <article>
            <label>Músculo</label>
            <input {...register("musculo")} type="text"></input>
          </article>
        </div>
        <h3>Tronco</h3>
        <div className="Tronco">
          <article className="grid-torax">
            <label>Torax</label>
            <input {...register("torax")} type="text" defaultValue="56kg" />
          </article>
          <article className="grid-cintura">
            <label>Cintura</label>
            <input {...register("cintura")} type="text" defaultValue="1.65cm" />
          </article>
          <article>
            <label>Abdômen</label>
            <input
              {...register("abdomen")}
              type="text"
              defaultValue="21.5"
            ></input>
          </article>
          <article>
            <label>Quadril</label>
            <input {...register("quadril")} type="text"></input>
          </article>
          <article>
            <label>Cinturão escapular</label>
            <input {...register("cinturao-escapular")} type="text"></input>
          </article>
          <article>
            <label>Pescoço</label>
            <input {...register("pescoco")} type="text"></input>
          </article>
        </div>

        <h3>Membros superiores</h3>
        <div className="MembrosSuperiores">
          <article className="grid-punho">
            <label>Punho</label>
            <input {...register("punho")} type="text" defaultValue="56kg" />
          </article>
          <article className="grid-antebraco">
            <label>Antebraço</label>
            <input
              {...register("antebraco")}
              type="text"
              defaultValue="1.65cm"
            />
          </article>
          <article>
            <label>Braço relaxado</label>
            <input
              {...register("braco-relaxado")}
              type="text"
              defaultValue="21.5"
            ></input>
          </article>
          <article>
            <label>Braço contraído</label>
            <input {...register("braco-contraido")} type="text"></input>
          </article>
          <article>
            <label>Envergadura</label>
            <input {...register("envergadura")} type="text"></input>
          </article>
        </div>

		<h3>Membros inferiores</h3>
		<div className="MembrosInferiores">
          <article className="grid-quadriceps-proximal">
            <label>Quadríceps proximal</label>
            <input {...register("quadriceps-proximal")} type="text" defaultValue="56kg" />
          </article>
          <article className="grid-quadriceps-medial">
            <label>Quadríceps medial</label>
            <input
              {...register("quadriceps-medial")}
              type="text"
              defaultValue="1.65cm"
            />
          </article>
          <article>
            <label>Quadríceps distal</label>
            <input
              {...register("quadriceps distal")}
              type="text"
              defaultValue="21.5"
            ></input>
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
      <footer>
        <button className="button-outlined">Voltar</button>
        <button type="submit" className="button-success">
          Salvar
        </button>
      </footer>
    </form>
  );
}
