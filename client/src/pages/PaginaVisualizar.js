import "./PaginaVisualizar.css";

// import { Box03 } from "../components/Box_03/Box03";
// import { Box04 } from "../components/Box_04/Box04";
import { Sidebar } from "../components/Sidebar";
import { Navbar } from "../components/Navbar";
import { CheckLogin } from "../App";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export function PaginaVisualizar() {
  if (CheckLogin()) {
    return (
      <div className="PaginaVisualizar">
        <Navbar></Navbar>
        <div className="Conteudo">
          <Sidebar></Sidebar>
          <div className="Area">
            <VisualizarAluno></VisualizarAluno>
            <TabelaAvalicao></TabelaAvalicao>

            {/* <Box03></Box03> */}
            {/* <Box04></Box04> */}
          </div>
        </div>
      </div>
    );
  }
}

function VisualizarAluno() {
  const { register, handleSubmit } = useForm();
  return (
    <form onSubmit={handleSubmit()} className="Visualizar">
      <header>
        <h1>Visualizar Aluno</h1>
      </header>
      <div className="Formulario">
        <div className="DadosPessoais">
          <article className="grid-nome">
            <label>Nome</label>
            <input
              {...register("nome")}
              type="text"
              defaultValue="Zé Avelino de Souza"
              disabled
            />
          </article>
          <article>
            <label>Data de Nascimento</label>
            <input
              {...register("nascimento")}
              type="date"
              defaultValue="2002-06-12"
              disabled
            ></input>
          </article>
          <article>
            <label>Telefone</label>
            <input
              {...register("telefone")}
              type="tel"
              defaultValue="(88) 9.9999-9999"
              disabled
            ></input>
          </article>
          <article>
            <label>CPF</label>
            <input
              {...register("cpf")}
              type="text"
              defaultValue="999.999.999-22"
              disabled
            ></input>
          </article>
          <article>
            <label>RG</label>
            <input
              {...register("rg")}
              type="text"
              defaultValue="2332212309"
              disabled
            ></input>
          </article>
        </div>

        <div className="DadosEndereco">
          <article className="grid-rua">
            <label>Rua</label>
            <input
              {...register("rua")}
              type="text"
              defaultValue="Rua São Jão"
              disabled
            />
          </article>
          <article className="grid-bairro">
            <label>Bairro</label>
            <input
              {...register("bairro")}
              type="text"
              defaultValue="Centro"
              disabled
            ></input>
          </article>
          <article className="grid-cidade">
            <label>Cidade</label>
            <input
              {...register("cidade")}
              type="text"
              defaultValue="Tabuleiro do Norte - CE"
              disabled
            ></input>
          </article>
          <article>
            <label>Número</label>
            <input
              {...register("numero")}
              type="text"
              defaultValue="987"
              disabled
            ></input>
          </article>
          <article>
            <label>CEP</label>
            <input
              {...register("cep")}
              type="text"
              defaultValue="63900-000"
              disabled
            ></input>
          </article>
        </div>
      </div>
      {/* <footer>
        <button className="button-outlined">Voltar</button>
        <button type="submit" className="button-success">
          Salvar
        </button>
      </footer> */}
    </form>
  );
}

function TabelaAvalicao() {
  const navigate = useNavigate();

  const lista = [
    {
      avaliador: "Hermes",
      data: "10/07/2022",
      tipo: "Musculação"
    },
    {
      avaliador: "Hermes",
      data: "28/02/2022",
      tipo: "Musculação"
    },
  ];

  const itens = [];

  for (const [index, pessoa] of lista.entries()) {
    itens.push(
      <tr key={index + 1}>
        <th scope="Tabela-Row">{index + 1}</th>
        <td>{pessoa.avaliador}</td>
        <td>{pessoa.data}</td>
        <td className="Tabela-Tipo">{pessoa.tipo}</td>
        <td className="Tabela-Botoes">
          <button className="c-success" onClick={() => navigate("/visualizarAvaliacao")}>
            Visualizar
          </button>
          <button
            className="c-primary"
            onClick={() => navigate("/editarAvaliacao")}
          >
            Editar
          </button>
          <button className="c-warning" onClick={() => console.log("não")}>
            Excluir
          </button>
        </td>
      </tr>
    );
  }

  return (
    <table className="TabelaAvaliacao">
      <thead>
        <tr>
          <th></th>
          <th>Avaliador</th>
          <th>Data de avaliação</th>
          <th>Tipo de avaliação</th>
          <th className="Tabela-Botoes">Ações</th>
        </tr>
      </thead>
      <tbody>{itens}</tbody>
    </table>
  );
}
