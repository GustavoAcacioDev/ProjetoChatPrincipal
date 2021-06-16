import React, { useState, useEffect } from 'react';
import { } from 'react-bootstrap';
import { auth, firestore } from 'firebase';
import './index.css';
import Menu from '../../components/Menu/index';
import { PersonCircle, Clock, Chat } from 'react-bootstrap-icons';
import { useDispatch, useSelector } from 'react-redux';
import jwt_decode from "jwt-decode";
import { listagemUsuarios, getRealtimeUsers } from '../../actions';


const PerfilAtendente = (props) => {

    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);
    const user = useSelector(state => state.user);
    const [chatStarted, setChatStarted] = useState(false);
    const [chatUser, setChatUser] = useState('');
    const [cpf, setCpf] = useState('');
    const [message, setMessage] = useState('');
    const [userUid, setUserUid] = useState(null);
    let unsubscribe;



    useEffect(() => {

        unsubscribe = dispatch(getRealtimeUsers(auth.uid))
            .then(unsubscribe => {
                return unsubscribe;
            })
            .catch(error => {
                console.log(error);
            })




    }, []);

    useEffect(() => {
        return () => {
            //cleanup
            unsubscribe.then(f => f()).catch(error => console.log(error));

        }
    }, []);

    




    return (

        <div className="ContainerPrincipal2" >

            <Menu />

            <div className="Container1">
                <div className="Titulo">
                    <p className='titulo'>Perfil Atendente</p>
                </div>
                <hr style={{ width: "100%" }}></hr>

                <div className="Container2">
                    <div className="centro">
                        {/* div que engloba as infomações do  perfil do atendente */}
                        <div style={{ height: "30vh", width: "80vw", backgroundColor: "white", borderRadius: "10px", marginTop: "1%" }}>

                            <div>

                                <div className="">
                                    <p style={{ marginLeft: "6%", paddingTop: "2%" }}>  <PersonCircle
                                        className='all'
                                        color="black"
                                        filter="invert(.4)"
                                        size={40} /><Clock style={{ marginLeft: "6%", marginRight: "1%", }} className='all' color="black" size={15} />| Horário de inicio: 8:00 | Horário de término: 18:00 </p>
                                    <hr style={{ width: "70vw", filter: 'invert(.8)', border: '1px solid #000' }} />
                                </div>

                            </div>

                            <div className="">
                                <p style={{ marginLeft: "6%" }}>Nome: { }</p>
                                <p style={{ marginLeft: "6%" }}>Email: gustavo@email.com </p>
                            </div>

                        </div>

                        {/* div que engloba as chamadas realizadas pelo atendente */}
                        <div style={{ marginTop: '2%' }}>

                            <div style={{ height: "48vh", width: "80vw", backgroundColor: "white", borderRadius: "10px", }}>
                                <div style={{ display: "flex", marginLeft: "5%" }}>
                                    <Chat style={{ marginTop: "1%" }} className='all' color="black" filter="invert(.4)" size={40} />
                                    <p style={{ fontSize: "20px", marginLeft: "1%" }}>Chamados</p>
                                </div>
                                <div style={{ marginLeft: "3%", alignItems: "center", marginTop: "1%" }} className="info-chamadas">

                                    <p style={{ marginLeft: "6%", }}>Título</p>
                                    <ul style={{ display: "flex", listStyle: "none", alignItems: "center" }}>
                                        <li style={{ marginLeft: "-200%", }}>Cliente</li>
                                        <li style={{ marginLeft: "130%" }}>Data</li>
                                    </ul>

                                </div>

                                <div style={{ marginLeft: "3%", alignItems: "center", marginTop: "2%" }} className="info-chamadas-result">

                                    <p style={{ marginLeft: "2%", }}>Problema com conta</p>
                                    <ul style={{ display: "flex", listStyle: "none", alignItems: "center" }}>
                                        <li style={{ marginLeft: "-80%", }}>Eduardo</li>
                                        <li style={{ marginLeft: "55%" }}>10/06/2020</li>
                                    </ul>

                                </div>
                                <hr style={{ maxWidth: "75vw" }}></hr>
                                <div style={{ marginLeft: "3%", alignItems: "center", marginTop: "1%" }} className="info-chamadas-result">

                                    <p style={{ marginLeft: "2%", }}>Problema com conta</p>
                                    <ul style={{ display: "flex", listStyle: "none", alignItems: "center" }}>
                                        <li style={{ marginLeft: "-80%" }}>Matheus</li>
                                        <li style={{ marginLeft: "55%" }}>10/06/2020</li>
                                    </ul>

                                </div>
                                <hr style={{ maxWidth: "75vw" }}></hr>
                                <div style={{ marginLeft: "3%", alignItems: "center", marginTop: "1%" }} className="info-chamadas-result">

                                    <p style={{ marginLeft: "2%", }}>Problema com conta</p>
                                    <ul style={{ display: "flex", listStyle: "none", alignItems: "center" }}>
                                        <li style={{ marginLeft: "-80%", }}>Samanta</li>
                                        <li style={{ marginLeft: "55%" }}>10/06/2020</li>
                                    </ul>

                                </div>
                                <hr style={{ maxWidth: "75vw" }}></hr>

                            </div>


                        </div>

                    </div>
                </div>

            </div>



        </div>


    );
}


export default PerfilAtendente