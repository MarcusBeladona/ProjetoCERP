import "./FormularioBloc.css"
import React from "react"
import { Form, Row, Label, Input, Col} from 'reactstrap';

export function FormularioBloc(){
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
                placeholder="Ruan Gabriel Lopes e Souza"
                disabled
              />
          </Col>

        <Col md={3}>
          <Label for="exempo_data">
            Nascimento <br></br>
          </Label>
          <Input
            className="inputt"
            id="text"
            placeholder=" 18/03/2002"
            type="date"
            disabled
          />
        </Col>

        <Col md={3}>
          <Label for="exempo_telefone">
            Telefone <br></br>
          </Label>
          <Input
            className="inputt"
            id="telefone"
            placeholder=" (99) 9.9999-9999"
            disabled
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
              placeholder="111.111.111-11"
              type="number"
              disabled
            />
        </Col>

        <Col md={6}>
        <Label for="exempo_data">
          RG <br></br>
        </Label>
        <Input
          className="inputt"
          id="RG"
          placeholder=" 1234567890"
          disabled
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
                placeholder="Rua Cinco"
                disabled
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
            disabled
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
                disabled
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
            disabled
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
            disabled
          />
        </Col>
        </Row>
      </Form>
     </div>)};