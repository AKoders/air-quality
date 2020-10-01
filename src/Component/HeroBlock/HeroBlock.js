import React from 'react';
import './HeroBlock.scss';
const HeroBlock = ({ title, links, logos}) => {

    const LogoImage = logos.map((logoItems)=> <img src={logoItems} alt="partners-logo" className="hero-logoPartners-items"/>);

    const NavLinks = links.map((links)=> <a href={links.href} className="navigation-items">{links.title}</a>);


    return (
        <section className="hero">
        <div className="container">

            <div className="hero-logoPartners">
                {LogoImage}

        </div>

            <nav className="navigations">
                {NavLinks}
            </nav>

            <h1 className="hero-title">{title}</h1>
            <a href="#" className="hero-links">Отследить</a>

        </div>

        </section>
    );
};

export default HeroBlock;