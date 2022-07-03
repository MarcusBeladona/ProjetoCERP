import "./FormularioBloc.css";
import React from "react";
// import { Form, Row, Label, Input, Col } from "reactstrap";
import { useForm } from "react-hook-form";

export function FormularioBloc() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="infos">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h6 className="titulo">Informações pessoais</h6>
        <h4>Nome:</h4>
        <input
          {...register("nome")}
          type="text"
          placeholder="Ruan Gabriel Lopes e Souza"
          disabled
        ></input>
        <h4>Data de Nascimento:</h4>D
        <input
          {...register("data")}
          type="text" // botar data aqui
          placeholder="13/05/2000"
          disabled
        ></input>
        Telefone:
        <input
          {...register("telefone")}
          type="text"
          placeholder="(88) 99345-3456"
          disabled
        ></input>
        {/* </div> */}
        CPF:
        <input
          {...register("cpf")}
          type="text"
          placeholder="987.567.987-44"
          disabled
        ></input>
        RG:
        <input
          {...register("rg")}
          type="text"
          placeholder="2777021678"
          disabled
        ></input>
        <h6 className="titulo">Endereço</h6>
        Rua:
        <input
          {...register("rua")}
          type="text"
          placeholder="Rua São João"
          disabled
        ></input>
        Número:
        <input
          {...register("numero")}
          type="text"
          placeholder="675"
          disabled
        ></input>
        Bairro:
        <input
          {...register("bairro")}
          type="text"
          placeholder="Centro"
          disabled
        ></input>
        Cidade:
        <input
          {...register("cidade")}
          type="text"
          placeholder="Quixadá"
          disabled
        ></input>
        CEP:
        <input
          {...register("cep")}
          type="text"
          placeholder="64800-000"
          disabled
        ></input>
      </form>
    </div>

    // <div className="formm">
    //   <Form className="formulario">
    //     <h6 className="titulo">Informações pessoais</h6>
    //     <Row className="linha">
    //       <Col md={6}>
    //         <Label for="exemplo_nome">
    //           Nome <br></br>
    //         </Label>
    //         <Input
    //           className="inputt"
    //           id="nome"
    //           placeholder="Ruan Gabriel Lopes e Souza"
    //           disabled
    //         />
    //       </Col>

    //       <Col md={3}>
    //         <Label for="exempo_data">
    //           Nascimento <br></br>
    //         </Label>
    //         <Input
    //           className="inputt"
    //           id="text"
    //           placeholder=" 18/03/2002"
    //           type="date"
    //           disabled
    //         />
    //       </Col>

    //       <Col md={3}>
    //         <Label for="exempo_telefone">
    //           Telefone <br></br>
    //         </Label>
    //         <Input
    //           className="inputt"
    //           id="telefone"
    //           placeholder=" (99) 9.9999-9999"
    //           disabled
    //         />
    //       </Col>

    //       <Col md={6}>
    //         <Label for="exemplo_nome">
    //           CPF <br></br>
    //         </Label>
    //         <Input
    //           className="inputt"
    //           id="CPF"
    //           placeholder="111.111.111-11"
    //           type="number"
    //           disabled
    //         />
    //       </Col>
    //     </Row>

    //     <Row className="linha">
    //       <Col md={6}>
    //         <Label for="exempo_data">
    //           RG <br></br>
    //         </Label>
    //         <Input
    //           className="inputt"
    //           id="RG"
    //           placeholder=" 1234567890"
    //           disabled
    //         />
    //       </Col>
    //     </Row>

    //     <h6 className="titulo">Endereço</h6>

    //     <Row className="linha">
    //       <Col md={9}>
    //         <Label for="exemplo_nome">
    //           Rua <br></br>
    //         </Label>
    //         <Input
    //           className="inputt"
    //           id="rua"
    //           placeholder="Rua Cinco"
    //           disabled
    //         />
    //       </Col>

    //       <Col md={3}>
    //         <Label for="exempo_data">
    //           Bairro <br></br>
    //         </Label>
    //         <Input className="inputt" id="data" placeholder="Centro" disabled />
    //       </Col>
    //       <Col md={4}>
    //         <Label for="exemplo_nome">
    //           Cidade <br></br>
    //         </Label>
    //         <Input
    //           className="inputt"
    //           id="nome"
    //           placeholder="Tabuleiro"
    //           disabled
    //         />
    //       </Col>
    //     </Row>

    //     <Row className="linha">
    //       <Col md={4}>
    //         <Label for="exempo_data">
    //           Número <br></br>
    //         </Label>
    //         <Input
    //           className="inputt"
    //           id="data"
    //           placeholder=" 123"
    //           type="number"
    //           disabled
    //         />
    //       </Col>

    //       <Col md={4}>
    //         <Label for="exempo_telefone">
    //           CEP <br></br>
    //         </Label>
    //         <Input
    //           className="inputt"
    //           id="telefone"
    //           placeholder=" 62960-000"
    //           type="number"
    //           disabled
    //         />
    //       </Col>
    //     </Row>
    //   </Form>
    // </div>
  );
}
