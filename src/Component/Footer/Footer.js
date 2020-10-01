import React from 'react';
import './Footer.scss';

const Footer = ({partners,links}) => {
 const partnersLogotips=partners.map((logo, i)=><img key={i} src={logo} alt={'partners logotips'} className="footer-partner-items"/>);
   const navlinks = links.map((link, i)=> <a href={link.href} key={i} className={'footer-nav-links'}>{link.title}</a>)
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-partner">
                    {partnersLogotips}

                </div>

                <div className="footer-text-wrap">

                    <div className="footer-nav">
                    {navlinks}
                    </div>



                <p className="footer-nav-text">
                    Сайт был разработан<span className="text-color"> Алексеем Бугаковым</span> в учебных целях, в рамках образовательной программы IT nation. Дизайн сайта создан <span className="text-color">Валерией Бубырь</span>.
                </p>
                </div>


                <p className="footer-text">

                    2020, Все права защищены
                </p>

                <p className="footer-text">

                    Согласие на обработку персональных данных<br/>
                    Политика конфиденциальности
                </p>

        </div>
        </footer>

    );
};

export default Footer;