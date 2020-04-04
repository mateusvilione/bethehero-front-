import React from "react";
import { Link } from "react-router-dom";

import { FiArrowLeft } from "react-icons/fi";

import "./styles.css";

import logoImg from "../../assets/logo.svg";

export default function NewIncident() {
    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="" />

                    <h1>Cadastrar novo caso</h1>
                    <p>
                        Descreva o caso detalhadamente para encontrar um herói para resolver isso.
                    </p>

                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color="#E01041" />
                            Voltar para Home
                    </Link>

                </section>

                <form>
                    <input type="text" placeholder="Tipo do caso"/>
                    <textarea placeholder="Descrição"/>
                    <input type="number" placeholder="Valor em reais"/>

                    <button type="submit" className="button">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}