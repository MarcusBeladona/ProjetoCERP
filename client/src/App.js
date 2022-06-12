import "./util/styles/global.css";
import "./util/styles/typos.css";
import "./util/styles/colors.css";

import { LoginPage } from "./pages/LoginPage";
import './App.css';
import React from 'react';
import {Button} from 'reactstrap'
import { PaginaInicial } from './components/commons/pages/PaginaInicial/PaginaInicial';
import { Navbar } from './components/commons/Navbar/Navbar';
import { NavbarLateral } from './components/commons/NavbarLateral/NavbarLateral';
import { Box } from './components/commons/Box/Box';


function App() {
	return (
		<div>
			<LoginPage></LoginPage>
			<PaginaInicial></PaginaInicial>
		</div>
	) 

}

export default App;
