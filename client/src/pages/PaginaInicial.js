// Sistema
import { useNavigate } from "react-router-dom";
import { AuthContext, CheckLogin } from "../App";
import "./PaginaInicial.css";

// Componentes
import { Navbar } from "../components/Navbar";
import { axiosGetAlunoByIdAndDelete, axiosGetAlunos } from "../api/Request";
import { useContext, useEffect, useState } from "react";

export function PaginaInicial() {
  if (CheckLogin()) {
    return (
      <div className="PaginaInicial">
        <Navbar></Navbar>
        <div className="Conteudo">
          <div className="Area">
            <Tabela></Tabela>
          </div>
        </div>
      </div>
    );
  }
}

function Tabela() {
  const navigate = useNavigate();
  const token = useContext(AuthContext).tokenBody.token;
  const [lista, setLista] = useState([]);

  useEffect(() => {
    axiosGetAlunos(token)
      .then((res) => {
        setLista(res.data);
      })
      .catch((e) => {
        alert("Falha ao carregar alunos, tente novamente.");
        console.log(e);
      });
  }, [token]);

  function deleteAluno(id) {
    axiosGetAlunoByIdAndDelete(token, id)
      .then((res) => {
        alert("Aluno excluído com sucesso.");
        window.location.reload();
      })
      .catch((e) => {
        alert("Algo deu errado ao excluir, tente novamente.");
        console.log(e);
      });
  }

  const itens = [];

  for (const [index, pessoa] of lista.entries()) {
    // Corrgindo data de matricula
    const dataSplit = pessoa.dataMatricula.split("-");
    const data = `${dataSplit[2]}/${dataSplit[1]}/${dataSplit[0]}`;

    // Códgo da lista
    itens.push(
      <tr key={index + 1}>
        <th scope="Tabela-Row">{index + 1}</th>
        <td>{pessoa.nome}</td>
        <td>{data}</td>
        <td className="Tabela-Objetivo">{pessoa.objetivo}</td>
        <td className="Tabela-Horario">{pessoa.horario}</td>
        <td className="Tabela-Botoes">
          <button
            className="c-success"
            onClick={() => navigate("/visualizarAluno/" + pessoa._id)}
          >
            Visualizar
          </button>
          <button
            className="c-primary"
            onClick={() => navigate("/editarAluno/" + pessoa._id)}
          >
            Editar
          </button>
          <button className="c-warning" onClick={() => deleteAluno(pessoa._id)}>
            Excluir
          </button>
        </td>
      </tr>
    );
  }

  return (
    <div>
      <header className="header">
        <h1>Alunos </h1>
        <button
          className="button-primary"
          onClick={() => navigate("/cadastro")}
        >
          Adicionar Aluno
        </button>
      </header>

      <table className="Tabela">
        <thead>
          <tr>
            <th></th>
            <th>Nome</th>
            <th>Data de Matrícula</th>
            <th>Objetivo</th>
            <th>Horário</th>
            <th className="Tabela-Botoes">Ações</th>
          </tr>
        </thead>
        <tbody>{itens}</tbody>
      </table>
    </div>
  );
}
