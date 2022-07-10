import axios from "axios";

export function axiosSign(dados) {
	return axios({
		method: "POST",
		url: "http://localhost:3010/admins/signin",
		data: dados,
	});
}

export function axiosPostAdmin(dados) {
	return axios({
		method: "POST",
		url: "http://localhost:3010/admins",
		data: dados,
	});
}

export function axiosPostAluno(token, dados) {
	return axios({
		method: "POST",
		url: "http://localhost:3010/alunos",
		headers: {
			token: token,
		},
		data: dados,
	});
}

export function axiosPostAvaliacao(token, dados) {
	return axios({
		method: "POST",
		url: "http://localhost:3010/avaliacao",
		headers: {
			token: token,
		},
		data: dados,
	});
}

export function axiosGetAlunos(token) {
	return axios({
		method: "GET",
		url: "http://localhost:3010/alunos",
		headers: {
			token: token,
		},
	});
}

export function axiosGetAlunoById(token, id) {
	return axios({
		method: "GET",
		url: "http://localhost:3010/alunos/" + id,
		headers: {
			token: token,
		},
	});
}

export function axiosGetAvaliacoes(token, id) {
	return axios({
		method: "GET",
		url: "http://localhost:3010/alunos/" + id + "/avaliacoes",
		headers: {
			token: token,
		},
	});
}

export function axiosGetAlunoByIdAndDelete(token, id) {
	return axios({
		method: "DELETE",
		url: "http://localhost:3010/alunos/" + id,
		headers: {
			token: token,
		},
	});
}

export function axiosGetAvaliacaoById(token, id) {
	return axios({
		method: "GET",
		url: "http://localhost:3010/avaliacao/" + id,
		headers: {
			token: token,
		},
	});
}

export function axiosGetAvaliacaoByIdAndDelete(token, id) {
	return axios({
		method: "DELETE",
		url: "http://localhost:3010/avaliacao/" + id,
		headers: {
			token: token,
		},
	});
}

export function axiosPutAluno(token, id, dados) {
	return axios({
		method: "PUT",
		url: "http://localhost:3010/alunos/" + id,
		headers: {
			token: token,
		},
		data: dados,
	});
}

export function axiosPutAvaliacao(token, id, dados) {
	return axios({
		method: "PUT",
		url: "http://localhost:3010/avaliacao/" + id,
		headers: {
			token: token,
		},
		data: dados,
	});
}
