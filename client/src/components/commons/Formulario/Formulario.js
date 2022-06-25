import "./Formulario.css"
import React from "react"
import { Form, Row, Label, Input, Col} from 'reactstrap';

export function Formulario(){
    return(
     <div className="formm">
      <Form className="formulario">
      <h6 className="titulo">Informações pessoais</h6>
        <Row className="linha_01">
          <Col md={6}>
              <Label for="exemplo_nome">
                Nome <br></br>   
              </Label>
              <Input 
                className="inputt"
                id="nome"
                placeholder="Insira seu nome completo"
              />
          </Col>

        <Col md={3}>
          <Label for="exempo_data">
            Nascimento <br></br> 
          </Label>
          <Input
            className="inputt"
            id="data"
            placeholder=" DD/MM/AAAA"
            type="date"
          />
        </Col>

        <Col md={3}>
          <Label for="exempo_telefone">
            Telefone <br></br> 
          </Label>
          <Input
            className="inputt"
            id="telefone"
            placeholder=" (XX) X.XXXX-XXXX"
            
          />
        </Col>
        </Row>

        <Row className="linha">

        <Col md={6}>
            <Label for="exemplo_nome">
              CPF <br></br>   
            </Label>
            <Input 
              className="inputt"
              id="CPF"
              placeholder="000.000.000-00"
              type="number"
            />
        </Col>

        <Col md={6}>
        <Label for="exempo_data">
          RG <br></br> 
        </Label>
        <Input
          className="inputt"
          id="RG"
          placeholder=" Digite o RG"
        />
        </Col>
        </Row>

        <h6 className="titulo">Endereço</h6>

        <Row className="linha_01">

          <Col md={9}>
              <Label for="exemplo_nome">
                Rua <br></br>   
              </Label>
              <Input 
                className="inputt"
                id="rua"
                placeholder="Insira rua do cliente"
              />
          </Col>

          <Col md={3}>
          <Label for="exempo_data">
             Bairro <br></br> 
          </Label>
          <Input
            className="inputt"
            id="data"
            placeholder="Centro"
          />
          </Col>
          </Row>

          <Row className="linha">
          <Col md={4}>
              <Label for="exemplo_nome">
                Cidade <br></br>   
              </Label>
              <Input 
                className="inputt"
                id="nome"
                placeholder="Tabuleiro"
              />
          </Col>

        <Col md={4}>
          <Label for="exempo_data">
            Número <br></br> 
          </Label>
          <Input
            className="inputt"
            id="data"
            placeholder=" 123"
            type="number"
          />
        </Col>

        <Col md={4}>
          <Label for="exempo_telefone">
            CEP <br></br> 
          </Label>
          <Input
            className="inputt"
            id="telefone"
            placeholder=" 62960-000"
            type="number"
          />
        </Col>
        </Row>
      </Form>
     </div>)};