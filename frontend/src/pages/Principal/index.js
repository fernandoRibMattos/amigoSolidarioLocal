import React , { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
//import { FiSearch } from 'react-icons/fi';
import { FaMapMarkedAlt, FaPhoneVolume, FaWhatsapp, FaFacebookF, FaInstagram } from 'react-icons/fa';
import img_fundo from '../../assests/imagem-fundo.png';
import img_hgs from '../../assests/hgs.png';
import img_willian from '../../assests/Wilian_Logo.png';

import '../Principal/stylesPrincipal.css';

import api from '../../services/api';

export default function Principal() {
  const [lojas, setLojas] = useState([]);
  const [grupo, setGrupos] = useState("");
  const [selectGrupo, setSelectGrupo] = useState([]);

  useEffect(() => {
    api.get('/lojas/'+grupo, {})
      .then(response => { setLojas(response.data); })
  }, [grupo]);

  useEffect(() => {
    api.get('/grupos/', {})
      .then(response => { setSelectGrupo(response.data); })
  }, []);

  function handleSelect(e) {
    e.preventDefault();

    setGrupos(e.target.value);
  }

  return (
    <div id="main">
      <div id="content-main">
        <div id="content">
          <div id="page">
            <div id="topo">
              <p id="descTopo">Rancharia Solidária</p>
            </div>
            <div id="description">
              <img src={img_fundo} alt="" className="imagemFundo">
              </img>
            </div>
            <div id="panel">
              <div id="buttons">
                <center>
                  <Link id="btncadastrar" to="/cadastro">Cadastrar novo <br></br> Anuncio</Link>
                </center>
              </div>
              <div id="locate">
                <select name="filterRamo" id="filterRamo" onChange={(e) => handleSelect(e)}>
                  <option selected value="">TODOS OS RAMOS</option>
                  {selectGrupo.map(grupoCon => ( 
                    <option value={grupoCon.id}>{grupoCon.descricao}</option>
                  ))}
                </select>

              </div>
            </div>
            <div id="details">
              <ul>
                {lojas.map(loja => (
                  <li>
                    <div className="ticket">
                      <center>
                        <p className="t-ramo">{loja.grupo_nome}</p>
                        <p className="t-empresa"> <strong>{loja.loja}</strong></p>
                        <pre className="t-descricao">{loja.descricao}</pre>
                        <br></br>
                        {loja.telefone ?
                          <p className="t-telefone"><FaPhoneVolume size={16} alt="Telefone:" />{loja.telefone}</p> : <span></span>
                        }

                        {loja.endereco ?
                          <p className="t-endereco"><FaMapMarkedAlt size={16} alt="Endereço:" /><a className="t-endereco" target="_blank" rel="noopener noreferrer" href={'https://www.google.com/maps?q=' + loja.endereco}>
                            {loja.endereco}
                          </a></p> : <span></span>
                        }

                        <div className="midiasSociais">
                          {loja.whatsapp ?
                          <p><a className="t-whats" target="_blank" rel="noopener noreferrer" href={'https://api.whatsapp.com/send?phone=55' + loja.whatsapp}>
                            <FaWhatsapp className="t-whats" size={35} alt="Whatsapp:" /><br></br>Whatsapp</a></p>
                          : <span></span>}
                          {loja.instagram ?
                          <p><a className="t-insta" target="_blank" rel="noopener noreferrer" href={'' + loja.instagram}>
                            <FaInstagram className="t-insta" size={35} alt="Instagram:" /><br></br>Instagram</a></p>
                            : <span></span>}
                            {loja.facebook ?
                          <p><a className="t-face" target="_blank" rel="noopener noreferrer" href={'' + loja.facebook}>
                            <FaFacebookF className="t-face" size={35} alt="Facebook:" /><br></br>Facebook</a></p>
                            : <span></span>}
                        </div>
                      </center>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div id="footer1">
              <div id="apoio">
                <p>APOIO:</p>
              </div>
              <div id="hgs">
                <a href="https://www.hgssistemas.com/" target="_blank" rel="noopener noreferrer"> <img src={img_hgs} alt="HGS Sistemas"/> </a>
              </div>
              <div id="capelli">
                <img src={img_willian} alt="Willian Capelli"/>
              </div>
            </div>
            <div id="footer2">
              <p>Desenvolvido por Fernando Ribeiro de Mattos - Whatsapp <a className="myWhats" href="https://api.whatsapp.com/send?phone=5511941369637" rel="noopener noreferrer" target="_blank"> (11) 94136-9637</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
