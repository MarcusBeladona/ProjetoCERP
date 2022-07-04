import { useForm } from "react-hook-form";
import { Navbar } from "../components/Navbar";
// import { Sidebar } from "../components/Sidebar";
import "./PaginaEditarAvaliacao.css";

export function PaginaEditarAvaliacao() {
  return (
    <div className="PaginaEditarAvaliacao">
      <Navbar></Navbar>
      <div className="Conteudo">
        {/* <Sidebar></Sidebar> */}
        <div className="Area">
          <EditarAvaliacao></EditarAvaliacao>
        </div>
      </div>
    </div>
  );
}

function EditarAvaliacao() {
  const { register, handleSubmit } = useForm();

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
            <input
              {...register("gordura-corporal")}
              type="text"
              defaultValue="23%"
            ></input>
          </article>
          <article>
            <label>Idade corporal</label>
            <input
              {...register("idade-corporal")}
              type="text"
              defaultValue="8"
            ></input>
          </article>
          <article>
            <label>Gordura Visceral</label>
            <input
              {...register("gordura-visceral")}
              type="text"
              defaultValue="20%"
            ></input>
          </article>
          <article>
            <label>Músculo</label>
            <input
              {...register("musculo")}
              type="text"
              defaultValue="31%"
            ></input>
          </article>
        </div>
        <h3>Tronco</h3>
        <div className="Tronco">
          <article className="grid-torax">
            <label>Torax</label>
            <input {...register("torax")} type="text" defaultValue="34cm" />
          </article>
          <article className="grid-cintura">
            <label>Cintura</label>
            <input {...register("cintura")} type="text" defaultValue="30cm" />
          </article>
          <article>
            <label>Abdômen</label>
            <input
              {...register("abdomen")}
              type="text"
              defaultValue="34%"
            ></input>
          </article>
          <article>
            <label>Quadril</label>
            <input
              {...register("quadril")}
              type="text"
              defaultValue="40cm"
            ></input>
          </article>
          <article>
            <label>Cinturão escapular</label>
            <input
              {...register("cinturao-escapular")}
              type="text"
              defaultValue="20cm"
            ></input>
          </article>
          <article>
            <label>Pescoço</label>
            <input
              {...register("pescoco")}
              type="text"
              defaultValue="23cm"
            ></input>
          </article>
        </div>

        <h3>Membros superiores</h3>
        <div className="MembrosSuperiores">
          <article className="grid-punho">
            <label>Punho</label>
            <input {...register("punho")} type="text" defaultValue="10cm" />
          </article>
          <article className="grid-antebraco">
            <label>Antebraço</label>
            <input {...register("antebraco")} type="text" defaultValue="20cm" />
          </article>
          <article>
            <label>Braço relaxado</label>
            <input
              {...register("braco-relaxado")}
              type="text"
              defaultValue="28cm"
            ></input>
          </article>
          <article>
            <label>Braço contraído</label>
            <input
              {...register("braco-contraido")}
              type="text"
              defaultValue="30cm"
            ></input>
          </article>
          <article>
            <label>Envergadura</label>
            <input
              {...register("envergadura")}
              type="text"
              defaultValue="20cm"
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
            />
          </article>
          <article className="grid-quadriceps-medial">
            <label>Quadríceps medial</label>
            <input
              {...register("quadriceps-medial")}
              type="text"
              defaultValue="45cm"
            />
          </article>
          <article>
            <label>Quadríceps distal</label>
            <input
              {...register("quadriceps distal")}
              type="text"
              defaultValue="40cm"
            ></input>
          </article>
          <article>
            <label>Panturrilha</label>
            <input
              {...register("panturrilha")}
              type="text"
              defaultValue="27cm"
            ></input>
          </article>
          <article>
            <label>Tornozelo</label>
            <input
              {...register("tornozelo")}
              type="text"
              defaultValue="19cm"
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
