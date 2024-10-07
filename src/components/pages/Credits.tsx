// src/CreditsPage.js

import React from 'react';
import "../../styles/Credits.css";
import home from "../../assets/images/home.png"
import { useNavigate } from 'react-router-dom';

const Credits: React.FC = () => {
    const navigate = useNavigate()
    return (
        <div className="credits-page">
            <h1 className="credits-title">CREDITS</h1>
            <div className="credits-content">
                <section className="credits-section">
                <br/>
                <h2>Team</h2>
                    <br/>
                    <ul>
                        <li><strong>Gabriel Freitas Pinheiro - @freitaspinhe (Instagram)</strong></li>
                        <br/>
                        <li><strong>Duda Bauermann Cremm</strong> - @dudacremmf (Instagram)</li>
                        <br/>
                        <li><strong>Lucas Gabriel Monteiro da Costa - @lucasg.fregolent (Instagram)</strong></li>
                        <br/>
                        <li><strong>Gustavo Ferreira Gitzel</strong> - @gustavogitzel (Instagram)</li>
                        <br/>
                        <li><strong>Pietro Grazzioli Golfeto - @pietrogolfeto (Instagram)</strong></li>
                        <br/>
                        <li><strong>Gustavo Moraes</strong> - @moraguma (Twitter)</li>
                </ul>
                </section>
            </div>
            <div className='home-container' onClick={() => navigate("/home")}>
                <img src={home} alt="HOME" className='go-home' />
                <p>Return Home</p>
            </div>
        </div>
    );
    };

export default Credits;
