import React, { useState, useEffect } from 'react';
import axios from 'axios';
import style from './InfoPerfilEmpresa.module.css';
import IconeEndereco from "../../utils/assets/icones/navigationIcon.png";
import Mapa from '../mapa/Mapa'; 

const InfoPerfilEmpresa = ({ logo, nomeEmpresa, breveDesc, contratos, endereco, descricao }) => {
    const [location, setLocation] = useState(null);

    useEffect(() => {
        const fetchLocation = async () => {
            try {
                const encodedAddress = encodeURIComponent(endereco);
                const apiKey = 'AIzaSyBnao4_rr2zTrVFpnpDzwL_EvlguKM6wts';
                const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${apiKey}`);
                
                if (response.data.results && response.data.results.length > 0) {
                    console.log("Geocode response:", response.data.results);
                    setLocation(response.data.results[0].geometry.location);
                } else {
                    console.error("Sem resultados para o endereço");
                }
            } catch (error) {
                console.error("Error fetching location:", error);
            }
        };

        fetchLocation();
    }, [endereco]);

    return (
        <div id={style["container"]}>
            <section id={style["areaEmpresaTopo"]}>
                <div id={style["divLogo"]}>
                    <img src={logo} alt="Imagem da logo do perfil" />
                </div>
                <div id={style["areaDesc"]}>
                    <div id={style["nomeEmpresa"]}>{nomeEmpresa}</div>
                    <div id={style["BreveDesc"]}>{breveDesc}</div>
                    <div id={style["contratos"]}>
                        {`+${contratos} contratos`}
                    </div>
                </div>
                <div id={style["endereco"]}>
                    <div>
                        <img src={IconeEndereco} alt="icone para simbolizar a busca do endereço" />
                    </div>
                    <p>{endereco}</p>
                </div>
            </section>
            <section id={style["areaBaixo"]}>
                <div id={style["descricao"]}>
                    <div id={style["btnChat"]}>
                        <button>Chat</button>
                    </div>
                    <div id={style["descricaoEmpresa"]}>
                        <p>{descricao}</p>
                    </div>
                </div>
                <div id={style["mapa"]}>
                    {location ? <Mapa endereco={location} /> : <p>Carregando localização...</p>}
                </div>
            </section>
        </div>
    );
};

export default InfoPerfilEmpresa;
