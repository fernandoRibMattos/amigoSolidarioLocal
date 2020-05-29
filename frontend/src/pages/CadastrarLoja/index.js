import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
//import { FiArrowLeft } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import img_hgs from '../../assests/hgs.png';
import img_willian from '../../assests/Wilian_Logo.png';

import api from '../../services/api';

import './stylesCadLoja.css';

export default function CadastrarLoja() {
    const [loja, setLoja] = useState('');
    const [descricao, setDescricao] = useState('');
    const [telefone, setTelefone] = useState('');
    const [endereco, setEndereco] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [facebook, setFacebook] = useState('');
    const [instagram, setInstagram] = useState('');

    const history = useHistory();

    async function handleCadastar(e) {
        e.preventDefault();
        const ordenacao = 5;
        const grupo_nome = 'INDEFINIDO';
        const chave = "12345678"
        const data = {
            loja,
            descricao,
            telefone,
            whatsapp,
            facebook,
            instagram,
            endereco,
            ordenacao,
            grupo_nome,
            chave,
        }

        try {
            const response = await api.post('/lojas', data);

            alert(`${response.data.msg}`);

            history.push('/');
        } catch (err) {
            alert('Erro no cadastro, tente novamente.'+  err.message);
        }
    }


    return (

        <div >
            <div id="topo">
                <p id="descTopo">Rancharia Solidária</p>
            </div>
            <div className="cadloja-container">
                <div className="cadloja-content">
                    <section>
                        <h1>Cadastre seu Anuncio</h1>
                        <p>O Cadastro passará por validação e será disponibilizado no site em até 24 horas</p>
                        <p>Qualquer duvida, entre em contato pelo<br></br> <a className="t-whats" target="_blank" rel="noopener noreferrer" href='https://api.whatsapp.com/send?phone=5511941369637'>
                            Whatsapp <FaWhatsapp className="t-whats" size={15} alt="Whatsapp:" /> (11) 94136-9637</a></p>
                        <center>
                            <Link className="link-nodecoration" to='/'><button className="btnvoltar" >Voltar</button></Link>
                        </center>
                    </section>
                    <form onSubmit={handleCadastar}>
                        <input placeholder="Nome Fantasia" value={loja} onChange={e => setLoja(e.target.value)} />
                        <textarea placeholder="Informações sobre produtos e serviços prestados" value={descricao} onChange={e => setDescricao(e.target.value)} />
                        <input placeholder="Telefone" value={telefone} onChange={e => setTelefone(e.target.value)} />
                        <input placeholder="Endereço" value={endereco} onChange={e => setEndereco(e.target.value)} />
                        <input placeholder="Whatsapp" value={whatsapp} onChange={e => setWhatsapp(e.target.value)} />
                        <input placeholder="facebook" value={facebook} onChange={e => setFacebook(e.target.value)} />
                        <input placeholder="Instagram" value={instagram} onChange={e => setInstagram(e.target.value)} />
                        <button className="btncad" type="submit"> Cadastrar</button>
                    </form>
                </div>
            </div>
            <div id="footer1">
                <div id="apoio">
                    <p>APOIO:</p>
                </div>
                <div id="hgs">
                    <a href="https://www.hgssistemas.com/" target="_blank" rel="noopener noreferrer"> <img src={img_hgs} alt="HGS Sistemas" /> </a>
                </div>
                <div id="capelli">
                    <img src={img_willian} alt="Willian Capelli" />
                </div>
            </div>
            <div id="footer2">
                <p>Desenvolvido por Fernando Ribeiro de Mattos - Whatsapp <a className="myWhats" href="https://api.whatsapp.com/send?phone=5511941369637" rel="noopener noreferrer" target="_blank"> (11) 94136-9637</a></p>
            </div>
        </div>
    );
}