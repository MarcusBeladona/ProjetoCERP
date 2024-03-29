import "./TabelaAvaliacao.css";
import React from "react";
import { Button } from "reactstrap";
import { useNavigate } from "react-router-dom";

export function TabelaAvaliacao() {
  const navigate = useNavigate();

  return (
    <div>
      <table className="tabela">
        <thead>
          <tr>
            <th></th>
            <th>Avaliador</th>
            <th>Data de Avaliação</th>
            <th>Tipo de Avaliação</th>

            <th>Ações</th>
          </tr>
        </thead>

        <tbody className="body-tabela">
          <tr className="inicio-tabela">
            <th scope="row">1</th>
            <td>Hermes</td>
            <td>03/07/2020</td>
            <td className="objetivo">
              <div className="card-objetivo">Antropométrica</div>
            </td>

            <td className="botoes">
              <Button
                outline
                color="primary"
                className="visuall"
                onClick={() => {
                  navigate("/visualizarAvaliacao");
                }}
              >
                Visualizar
              </Button>
              <Button
                outline
                color="warning"
                className="editt"
                onClick={() => {
                  navigate("/editarAvaliacao");
                }}
              >
                Editar
              </Button>
              <Button color="danger" className="delett">
                Excluir
              </Button>
            </td>
          </tr>

          <tr className="inicio-tabela">
            <th scope="row">1</th>
            <td>Hermes</td>
            <td>03/07/2020</td>
            <td className="objetivo">
              <div className="card-objetivo">Par-q</div>
            </td>

            <td className="botoes">
              <Button outline color="primary" className="visuall">
                Visualizar
              </Button>
              <Button outline color="warning" className="editt">
                Editar
              </Button>
              <Button color="danger" className="delett">
                Excluir
              </Button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
