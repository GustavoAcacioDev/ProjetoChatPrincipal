import React from 'react';
import { } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './index.css';
import { ArrowBarLeft, ChatRight, Person } from 'react-bootstrap-icons';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../actions';

const Menu = () => {

    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();

    return (


        <div className='tt'>

            <nav class="sidebar-navigation">

                <ul>


                    <p className="cor">B<br />R<br /> Q </p>
                    <p className="espa">_______</p>


                    <li>
                        <Person color=" #f5f6f8" size={35} />
                        <span class="tooltip">Perfil</span>
                    </li>
                    <li>
                        <ChatRight color=" #f5f6f8" size={35} />
                        <span class="tooltip">Atendimento</span>
                    </li>

                    

                </ul>
                <ul className="logout">



                    {
                        auth.authenticated ?

                            <Link class="tooltip" to={'#'} onClick={() => {
                                dispatch(logout(auth.uid))
                            }}><ArrowBarLeft color=" #f5f6f8" size={35} /></Link>
                            : null
                    }


                </ul>

            </nav>

        </div>


    )


}


export default Menu;







