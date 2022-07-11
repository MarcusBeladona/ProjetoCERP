import axios from "axios";

export function axiosSign(dados) {
	return axios({
		method: "POST",
		url: "https://back-projeto-cerp.herokuapp.com/admins/signin",
		data: dados,
	});
}

export function axiosPostAdmin(dados) {
	return axios({
		method: "POST",
		url: "https://back-projeto-cerp.herokuapp.com/admins",
		data: dados,
	});
}

export function axiosPostAluno(token, dados) {
	return axios({
		method: "POST",
		url: "https://back-projeto-cerp.herokuapp.com/alunos",
		headers: {
			token: token,
		},
		data: dados,
	});
}

export function axiosPostAvaliacao(token, dados) {
	return axios({
		method: "POST",
		url: "https://back-projeto-cerp.herokuapp.com/avaliacao",
		headers: {
			token: token,
		},
		data: dados,
	});
}

export function axiosGetAlunos(token) {
	return axios({
		method: "GET",
		url: "https://back-projeto-cerp.herokuapp.com/alunos",
		headers: {
			token: token,
		},
	});
}

export function axiosGetAlunoById(token, id) {
	return axios({
		method: "GET",
		url: "https://back-projeto-cerp.herokuapp.com/alunos/" + id,
		headers: {
			token: token,
		},
	});
}

export function axiosGetAvaliacoes(token, id) {
	return axios({
		method: "GET",
		url: "https://back-projeto-cerp.herokuapp.com/alunos/" + id + "/avaliacoes",
		headers: {
			token: token,
		},
	});
}

export function axiosGetAlunoByIdAndDelete(token, id) {
	return axios({
		method: "DELETE",
		url: "https://back-projeto-cerp.herokuapp.com/alunos/" + id,
		headers: {
			token: token,
		},
	});
}

export function axiosGetAvaliacaoById(token, id) {
	return axios({
		method: "GET",
		url: "https://back-projeto-cerp.herokuapp.com/avaliacao/" + id,
		headers: {
			token: token,
		},
	});
}

export function axiosGetAvaliacaoByIdAndDelete(token, id) {
	return axios({
		method: "DELETE",
		url: "https://back-projeto-cerp.herokuapp.com/avaliacao/" + id,
		headers: {
			token: token,
		},
	});
}

export function axiosPutAluno(token, id, dados) {
	return axios({
		method: "PUT",
		url: "https://back-projeto-cerp.herokuapp.com/alunos/" + id,
		headers: {
			token: token,
		},
		data: dados,
	});
}

export function axiosPutAvaliacao(token, id, dados) {
	return axios({
		method: "PUT",
		url: "https://back-projeto-cerp.herokuapp.com/avaliacao/" + id,
		headers: {
			token: token,
		},
		data: dados,
	});
}
