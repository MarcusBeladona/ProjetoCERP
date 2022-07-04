import "./PaginaCadastro.css";
import { Navbar } from "../components/Navbar";
// import { Sidebar } from "../components/Sidebar";
// import { Box02 } from "../components/Box_02/Box02";
import { useForm } from "react-hook-form";
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
  // const token = useContext(AuthContext).tokenBody.token;

  return (
    <form onSubmit={handleSubmit()} className="Cadastro">
      <header>
        <h1>Cadastrar aluno</h1>
      </header>
      <div className="Formulario">
        <div className="DadosPessoais">
          <article className="grid-nome">
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
