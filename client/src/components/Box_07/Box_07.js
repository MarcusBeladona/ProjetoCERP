export function Box07() {
	return (
		<div className="Box07">
			<header>
				<h1>Editar Alunos</h1>
			</header>
			<Formulario></Formulario>
			<footer>
				<button className="button-outlined">Voltar</button>
				<button className="button-primary c-success" style={{ color: "white" }}>
					Salvar
				</button>
			</footer>
		</div>
	);
}

function Formulario() {
	return <div className="Formulario"></div>;
}
