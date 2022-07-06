import { useForm } from "react-hook-form";
import { Navbar } from "../components/Navbar";
// import { Sidebar } from "../components/Sidebar";
import "./PaginaVisualizarAvaliacao.css";

export function PaginaVisualizarAvaliacao() {
  return (
    <div className="PaginaVisualizarAvaliacao">
      <Navbar></Navbar>
      <div className="Conteudo">
        {/* <Sidebar></Sidebar> */}
        <div className="Area">
          <VisualizarAvaliacao></VisualizarAvaliacao>
        </div>
      </div>
    </div>
  );
}

function VisualizarAvaliacao() {
  const { register, handleSubmit } = useForm();

  return (
    <form onSubmit={handleSubmit()} className="VisualizarAvaliacao">
      <header>
        <h1>Visualizar Avaliação</h1>
      </header>
      <div className="Formulario">
        <h3>Bioimpedância</h3>
        <div className="Bioimpedancia">
          <article className="grid-peso">
            <label>Peso</label>
            <input
              {...register("peso")}
              type="text"
              defaultValue="56kg"
              disabled
            />
          </article>
          <article className="grid-altura">
            <label>Altura</label>
            <input
              {...register("altura")}
              type="text"
              defaultValue="1.65cm"
              disabled
            />
          </article>
          <article>
            <label>IMC</label>
            <input
              {...register("imc")}
              type="text"
              defaultValue="21.5"
              disabled
            ></input>
          </article>
          <article>
            <label>Gordura corporal</label>
            <input
              {...register("gordura-corporal")}
              type="text"
              defaultValue="23%"
              disabled
            ></input>
          </article>
          <article>
            <label>Idade corporal</label>
            <input
              {...register("idade-corporal")}
              type="text"
              defaultValue="8"
              disabled
            ></input>
          </article>
          <article>
            <label>Gordura Visceral</label>
            <input
              {...register("gordura-visceral")}
              type="text"
              defaultValue="20%"
              disabled
            ></input>
          </article>
          <article>
            <label>Músculo</label>
            <input
              {...register("musculo")}
              type="text"
              defaultValue="31%"
              disabled
            ></input>
          </article>
        </div>
        <h3>Tronco</h3>
        <div className="Tronco">
          <article className="grid-torax">
            <label>Torax</label>
            <input
              {...register("torax")}
              type="text"
              defaultValue="34cm"
              disabled
            />
          </article>
          <article className="grid-cintura">
            <label>Cintura</label>
            <input
              {...register("cintura")}
              type="text"
              defaultValue="30cm"
              disabled
            />
          </article>
          <article>
            <label>Abdômen</label>
            <input
              {...register("abdomen")}
              type="text"
              defaultValue="34%"
              disabled
            ></input>
          </article>
          <article>
            <label>Quadril</label>
            <input
              {...register("quadril")}
              type="text"
              defaultValue="40cm"
              disabled
            ></input>
          </article>
          <article>
            <label>Cinturão escapular</label>
            <input
              {...register("cinturao-escapular")}
              type="text"
              defaultValue="20cm"
              disabled
            ></input>
          </article>
          <article>
            <label>Pescoço</label>
            <input
              {...register("pescoco")}
              type="text"
              defaultValue="23cm"
              disabled
            ></input>
          </article>
        </div>

        <h3>Membros superiores</h3>
        <div className="MembrosSuperiores">
          <article className="grid-punho">
            <label>Punho</label>
            <input
              {...register("punho")}
              type="text"
              defaultValue="10cm"
              disabled
            />
          </article>
          <article className="grid-antebraco">
            <label>Antebraço</label>
            <input
              {...register("antebraco")}
              type="text"
              defaultValue="20cm"
              disabled
            />
          </article>
          <article>
            <label>Braço relaxado</label>
            <input
              {...register("braco-relaxado")}
              type="text"
              defaultValue="28cm"
              disabled
            ></input>
          </article>
          <article>
            <label>Braço contraído</label>
            <input
              {...register("braco-contraido")}
              type="text"
              defaultValue="30cm"
              disabled
            ></input>
          </article>
          <article>
            <label>Envergadura</label>
            <input
              {...register("envergadura")}
              type="text"
              defaultValue="20cm"
              disabled
            ></input>
          </article>
        </div>

        <h3>Membros inferiores</h3>
        <div className="MembrosInferiores">
          <article className="grid-quadriceps-proximal">
            <label>Quadríceps proximal</label>
            <input
              {...register("quadriceps-proximal")}
              type="text"
              defaultValue="49cm"
              disabled
            />
          </article>
          <article className="grid-quadriceps-medial">
            <label>Quadríceps medial</label>
            <input
              {...register("quadriceps-medial")}
              type="text"
              defaultValue="45cm"
              disabled
            />
          </article>
          <article>
            <label>Quadríceps distal</label>
            <input
              {...register("quadriceps distal")}
              type="text"
              defaultValue="40cm"
              disabled
            ></input>
          </article>
          <article>
            <label>Panturrilha</label>
            <input
              {...register("panturrilha")}
              type="text"
              defaultValue="27cm"
              disabled
            ></input>
          </article>
          <article>
            <label>Tornozelo</label>
            <input
              {...register("tornozelo")}
              type="text"
              defaultValue="19cm"
              disabled
            ></input>
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
