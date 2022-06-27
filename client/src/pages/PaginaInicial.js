// Sistema
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../App"; 
import "./PaginaInicial.css";

// Componentes
import { Navbar } from "../components/Navbar";

import { Box } from "../components/Box/Box";
import { Sidebar } from "../components/Sidebar";
// import { Tabela } from "../components/Tabela/Tabela";

export function PaginaInicial() {
  const user = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (user.tokenBody.token === "null") {
      alert("É necessário entrar na sua conta.");
      navigate("/login");
    }
  }, [user.tokenBody.token, navigate]);

  return (
    <div className="PaginaIncial">
      <Navbar></Navbar>
      <div className="conteudo">
        <Sidebar></Sidebar>
        <div className="boox">
          <Box></Box>
        </div>
      </div>
    </div>
  );
}
