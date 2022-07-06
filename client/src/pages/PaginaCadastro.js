import "./PaginaCadastro.css";
import { Navbar } from "../components/Navbar";
// import { Sidebar } from "../components/Sidebar";
// import { Box02 } from "../components/Box_02/Box02";
import { useForm } from "react-hook-form";
import { axiosPostAluno } from "../api/Request";
import { useContext } from "react";
import { AuthContext } from "../App";
// import { AuthContext } from "../App";
// import { useContext } from "react";

export function PaginaCadastro() {
  return (
    <div className="PaginaCadastro">
      <Navbar></Navbar>
      <div className="Conteudo">
        {/* <Sidebar></Sidebar> */}
        <div className="Area">
          <Cadastro></Cadastro>
        </div>
      </div>
    </div>
  );
}

function Cadastro() {
  const { register, handleSubmit } = useForm();
  const token = useContext(AuthContext).tokenBody.token;

  function cadastrarAluno(data) {
    console.log(data);
    axiosPostAluno(token, data)
      .then((res) => {
        alert("Aluno adicionado com sucesso.");
      })
      .catch((e) => {
        alert("Confira se todos os campos foram preenchidos corretamente.");
        console.log(e);
      });
  }

  return (
    <form onSubmit={handleSubmit(cadastrarAluno)} className="Cadastro">
      <header>
        <h1>Cadastrar aluno</h1>
      </header>
      <div className="Formulario">
        <h3>Dados Pessoais</h3>
        <div className="grid-2c">
          <article>
            <label>Nome</label>
            <input {...register("nome")} type="text" />
          </article>
          <article>
            <label>Data de Nascimento</label>
            <input {...register("nascimento")} type="date"></input>
          </article>
          <article>
            <label>Telefone</label>
            <input {...register("telefone")} type="tel"></input>
          </article>
          <article>
            <label>CPF</label>
            <input {...register("cpf")} type="text"></input>
          </article>
        </div>

        <h3>Endereço</h3>
        <div className="grid-3c">
          <article>
            <label>Rua</label>
            <input {...register("rua")} type="text" />
          </article>
          <article>
            <label>Número</label>
            <input {...register("numero")} type="text"></input>
          </article>
          <article>
            <label>Bairro</label>
            <input {...register("bairro")} type="text"></input>
          </article>
          <article>
            <label>Cidade</label>
            <input {...register("cidade")} type="text"></input>
          </article>
          <article>
            <label>Estado</label>
            <input {...register("estado")} type="text"></input>
          </article>
          <article>
            <label>CEP</label>
            <input {...register("cep")} type="text"></input>
          </article>
        </div>

        <h3>Matrícula</h3>
        <div className="grid-3c">
          <article>
            <label>Data de Matrícula</label>
            <input {...register("dataMatricula")} type="date"></input>
          </article>
          <article>
            <label>Objetivo</label>
            <input {...register("objetivo")} type="text"></input>
          </article>
          <article>
            <label>Horário</label>
            <input {...register("horario")} type="time"></input>
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
