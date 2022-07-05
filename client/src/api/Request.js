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

export function axiosPutAluno(token, dados) {
  return axios({
    method: "PUT",
    url: "http://localhost:3010/alunos",
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
