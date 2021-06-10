import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import Layout from '../../components/Layout';
import Card from '../../components/UI/Card';
import { signin, isLoggedInUser } from '../../actions';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import '../LoginPage/login.css';

/**
* @author
* @function LoginPage
**/

const LoginPage = (props) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);

  // useEffect(() => {
  //   if(!auth.authenticated){
  //     dispatch(isLoggedInUser())
  //   }
  // }, []);




  const userLogin = (e) => {
    e.preventDefault();

    if (email == "") {
      alert("Email is required");
      return;
    }
    if (password == "") {
      alert("Password is required");
      return;
    }

    dispatch(signin({ email, password }));

  }


  if (auth.authenticated) {
    return <Redirect to={`/`} />
  }



  return (

    <div className="pai">



      <div className="container34">

        <Form className="formulario" onSubmit={userLogin} >


          <h1 className="titulo2">Login</h1>


          <div>
            <h2 className="emailH2">Email</h2>
            <Form.Group controlId="formBasicEmail">
              <Form.Control className="email" type="email" placeholder="Informe seu email" name='email' onChange={(e) => setEmail(e.target.value)} value={email} required />
            </Form.Group>
          </div>

          <div>
            <h2 className="senhaH2">Senha</h2>
            <Form.Group controlId="formBasicPassword">
              <Form.Control className="senha" type="password" placeholder="Informe sua senha" name='senha' value={password}
                onChange={(e) => setPassword(e.target.value)} required />
            </Form.Group>
          </div>

          <div className="botao">
            <Button className='botao-logar' type='submit'>Logar</Button>
          </div>

        </Form>
      </div>
    </div>


  )

}

export default LoginPage