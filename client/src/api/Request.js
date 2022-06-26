import axios from "axios";

export function axiosSign(dados) {
	return axios({
		method: "POST",
		url: "http://localhost:3010/admins/signin",
		data: dados,
	});
}
