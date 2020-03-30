import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import './styles.css';
import logoImg from '../../assets/logo.svg';
import {FiArrowLeft} from 'react-icons/fi';

import api from '../../services/api';

export default function NewIncident(){
    const [title ,setTitle] = useState('');
    const [description ,setDescription] = useState('');
    const [value ,setValue] = useState('');

    const history = useHistory();
    const ongId = localStorage.getItem('ongId');
    

    async function handleNewIncident(e){
        e.preventDefault();
        const data = {
            title,
            description,
            value,
        };
        try{
            await api.post('incidents', data, {
                headers: {
                    Authorization: ongId,
                }
            })

            history.push('/profile');
        }catch(err){
            alert('Error ao cadastrar caso, tente novamente')

        }


    }
    return(
        <div className="new-incident-container">
        <div className="content">
            <section>
                <img src={logoImg} alt="Be the Hero"/>

                <h1>Cadastrar novo caso.</h1>
                <p>Descrevo o caso detalhadamente para encontrar um heroi para resolver isso.</p>

                <Link className="back-link" to="/profile">
                <FiArrowLeft size={16} color="#E02041" />
                Voltar para Home.
            </Link>
            </section>
            <form>
                <input 
                    placeholder="Titulo do caso"
                    value={title}
                    onChange={e =>setTitle(e.target.value)}
                />
                <textarea  
                    placeholder="Descrição"
                    value={description}
                    onChange={e =>setDescription(e.target.value)}
                />
                <input 
                    placeholder="Valor em reais"
                    value={value}
                    onChange= { e =>setValue(e.target.value)}
                />
                <button onClick={handleNewIncident}className="button" type="submit">Cadastrar</button> 
             </form>
             
        </div>
    </div>
    );
}