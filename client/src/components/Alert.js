import "./Alert.css";
import xFill from "../util/x-fill.svg";

export function Alert(props) {
	if (props.active) {
		return (
			<section className="Alert">
				<section className="modal">
					<section className="header">
						<h2>{props.titulo}</h2>
						<p className="t-title">{props.texto}</p>
					</section>
					<section className="buttons-area">
						<button className="button-text">Cancelar</button>
						<button className="button-primary">Continuar</button>
					</section>
					<button className="return-Button">
						<img src={xFill} alt="Close" />
					</button>
				</section>
			</section>
		);
	}
}
