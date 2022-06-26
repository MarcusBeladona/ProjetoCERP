import "./FichaDisable.css"
import React from "react"
import { Form, Row, Label, Input, Col} from 'reactstrap';

export function FichaAvaliacaoDisable(){
    return(
     <div className="formm">
      <Form className="formulario">
      <h6 className="titulo">Esta é sua avaliação de Antroprometrica</h6>
      
      <br></br>  
      <h3><b>Biopendência</b></h3>
        <Row className="linha_01">
          <Col md={6}>
              <Label for="exemplo_nome">
                Peso <br></br>   
              </Label>
              <Input 
                className="inputt"
                id="nome"
                placeholder="65kg"
                type="number"
                disabled
              />
          </Col>

          <Col md={6}>
              <Label for="exemplo_nome">
                Altura <br></br>   
              </Label>
              <Input 
                className="inputt"
                id="nome"
                placeholder="1.67"
                type="number"
                disabled
              />
          </Col>

        <Col md={6}>
          <Label for="exempo_data">
            IMC (BMI) <br></br> 
          </Label>
          <Input
            className="inputt"
            id="data"
            placeholder="67.1"
            type="number"
            disabled
          />
        </Col>

        <Col md={6}>
          <Label for="exempo_telefone">
            Gordura Corporal <br></br> 
          </Label>
          <Input
            className="inputt"
            id="telefone"
            placeholder=" 45%"
            type="number"
            disabled
            
          />
        </Col>
        
        <Col md={6}>
        <Label for="exempo_data">
          Idade Corporal<br></br> 
        </Label>
        <Input
          className="inputt"
          id="RG"
          placeholder="45"
          number="number"
          disabled
        />
        </Col>

        <Col md={6}>
        <Label for="exempo_data">
          Gordura Visceral<br></br> 
        </Label>
        <Input
          className="inputt"
          id="RG"
          placeholder="43%"
          number="number"
          disabled
        />
        </Col>


        <Col md={6}>
        <Label for="exempo_data">
         Músculo<br></br> 
        </Label>
        <Input
          className="inputt"
          id="RG"
          placeholder="33%"
          number="number"
          disabled
        />
        </Col>

        </Row>

        
        <br></br>  
        <h3><b>Tronco</b></h3>

        <Row className="linha">

        <Col md={6}>
            <Label for="exemplo_nome">
              Tórax <br></br>   
            </Label>
            <Input 
              className="inputt"
              id="CPF"
              placeholder="59cm"
              type="number"
              disabled
            />
        </Col>

        <Col md={6}>
        <Label for="exempo_data">
          Cintura <br></br> 
        </Label>
        <Input
          className="inputt"
          id="RG"
          placeholder="31cm"
          disabled
        />
        </Col>

        <Col md={6}>
        <Label for="exempo_data">
          Abdômen <br></br> 
        </Label>
        <Input
          className="inputt"
          id="RG"
          placeholder="42cm"
          disabled
        />
        </Col>

        <Col md={6}>
        <Label for="exempo_data">
          Quadril <br></br> 
        </Label>
        <Input
          className="inputt"
          id="RG"
          placeholder="55cm"
          disabled
        />
        </Col>


        <Col md={6}>
        <Label for="exempo_data">
          Cinturão Escapular <br></br> 
        </Label>
        <Input
          className="inputt"
          id="RG"
          placeholder="67cm"
          disabled
        />
        </Col>

        <Col md={6}>
        <Label for="exempo_data">
          Pescoço <br></br> 
        </Label>
        <Input
          className="inputt"
          id="RG"
          placeholder="25cm"
          disabled
        />
        </Col>
        </Row>

        <br></br>  
        <h3><b>Membros Superiores</b></h3>
        <Row className="linha_01">
          <Col md={6}>
              <Label for="exemplo_nome">
                Punho<br></br>   
              </Label>
              <Input 
                className="inputt"
                id="rua"
                placeholder="9cm"
                disabled
              />
          </Col>

          <Col md={6}>
          <Label for="exempo_data">
             Antebraço<br></br> 
          </Label>
          <Input
            className="inputt"
            id="data"
            placeholder="17cm"
            disabled
          />
          </Col>
          </Row>

          <Row className="linha">
          <Col md={6}>
              <Label for="exemplo_nome">
                Braço -  Biceps relaxados <br></br>   
              </Label>
              <Input 
                className="inputt"
                id="nome"
                placeholder="28cm"
                disabled
              />
          </Col>
        <Col md={6}>
          <Label for="exempo_data">
            Braço - Biceps contraídos <br></br> 
          </Label>
          <Input
            className="inputt"
            id="data"
            placeholder="37cm"
            type="number"
            disabled
          />
        </Col>
        <Col md={6}>
          <Label for="exempo_telefone">
            Envergadura <br></br> 
          </Label>
          <Input
            className="inputt"
            id="telefone"
            placeholder="52cm"
            type="number"
            disabled
          />
        </Col>
        </Row>

        <br></br>  
        <h3><b>Membros Inferiores</b></h3>
        <Row className="linha_01">
          <Col md={6}>
              <Label for="exemplo_nome">
                Quadriceps proximal<br></br>   
              </Label>
              <Input 
                className="inputt"
                id="rua"
                placeholder="46cm"
                disabled
              />
          </Col>

          <Col md={6}>
          <Label for="exempo_data">
             Quadriceps medial<br></br> 
          </Label>
          <Input
            className="inputt"
            id="data"
            placeholder="67cm"
            disabled
          />
          </Col>
          </Row>

          <Row className="linha">
          <Col md={6}>
              <Label for="exemplo_nome">
                Quadriceps distal<br></br>   
              </Label>
              <Input 
                className="inputt"
                id="nome"
                placeholder="48cm"
                disabled
              />
          </Col>
        <Col md={6}>
          <Label for="exempo_data">
            Panturrilha <br></br> 
          </Label>
          <Input
            className="inputt"
            id="data"
            placeholder="37cm"
            type="number"
            disabled
          />
        </Col>
        <Col md={6}>
          <Label for="exempo_telefone">
            Tornozelo <br></br> 
          </Label>
          <Input
            className="inputt"
            id="telefone"
            placeholder="32cm"
            type="number"
            disabled
          />
        </Col>
        </Row>


      </Form>
     </div>)};