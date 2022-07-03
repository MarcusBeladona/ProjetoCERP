import './Resultados.css';
import { Table, thead, scope} from 'reactstrap';

export function Resultados() {
    return(
        <div className='container-r'>
            <div className='resultados'>
                        <Table borderless>
                            <thead>
                                <tr>
                                <th  className='topo'>
                                    Ganho de Massa
                                </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <th scope="row" className='texto-green'>
                                    + 15%
                                </th>
                                </tr>
                            </tbody>
                        </Table>
            </div>

            <div className='resultados'>
                        <Table borderless>
                            <thead>
                                <tr>
                                <th className='topo'>
                                   Perda de Gordura
                                </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <th scope="row" className='texto-red'>
                                    -15%
                                </th>
                                </tr>
                            </tbody>
                        </Table>
            </div>

            <br></br>
            <div className='resultados'>
                        <Table borderless>
                            <thead>
                                <tr>
                                <th  className='topo'>
                                    IMC
                                </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <th scope="row" className='texto-green'>
                                    27,1
                                </th>
                                </tr>
                            </tbody>
                        </Table>
            </div>


            <div className='resultados'>
                        <Table borderless>
                            <thead>
                                <tr>
                                <th  className='topo'>
                                    IAC
                                </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr >
                                <th scope="row" className='texto-green'>
                                    31
                                </th>
                                </tr>
                            </tbody>
                        </Table>
            </div>


        </div>
        
    )
}