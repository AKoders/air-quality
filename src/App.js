import React from 'react';
import './App.scss';
import HeroBlock from "./Component/HeroBlock/HeroBlock";
import Facts from "./Component/Factions/Facts";
import SectorsList from "./Component/SectorsList/SectorsList";
import Footer from "./Component/Footer/Footer";
import Air from "./Component/Air/Air";
function App() {

    const LogoPartners = [
        require ('./assets/shid_emozhl_logo.svg'),
        require ('./assets/ITN_logo.svg'),
        require ('./assets/GC_logo.svg'),


    ];
    const navigation_links=[
        {
            title: "Основные факты",
            href:  "#facts"
        },

        {
            title: "Индекс качества воздуха",
            href:  "#index_air"
        },

        {
            title: "Политика по уменьшению загрязнений",
            href:  "#pollution_policy"
        }


    ];
    const factsSlider=[
        {
            id:'1',
            imgUrl:require("./assets/slider/women-and-kids.jpg"),
            desc: "Женщины и дети – главные жертвы загрязнения воздуха"
        },

        {
            id:'2',
            imgUrl:require('./assets/slider/environment-protectors.jpg'),
            desc: "Защитники окружающей среды подвергаются преследованиям"
        },

        {
            id:'3',
            imgUrl:require('./assets/slider/air-contamination.jpg'),
            desc: "Загрязнение воздуха – нарушение прав человека"
        },

        {
            id:'4',
            imgUrl:require('./assets/slider/premature-death.jpg'),
            desc: "4,2 миллиона случаев преждевременной смерти людей из-за загрязнения атмосферного воздуха"
        },

        {
            id:'5',
            imgUrl:require('./assets/slider/total-cost.jpg'),
            desc: "Согласно оценкам, суммарный объем затрат в связи с загрязнением воздуха превышает 5 трлн долл. в год."
        }
    ];
    const sectors = [
        {
            name: "Промышленность",
            desc: "Чистые технологии, способствующие уменьшению выбросов из промышленных дымовых труб; улучшенная утилизация городских и сельскохозяйственных отходов, включая каптаж (улавливание) метана, выделяемого в местах утилизации отходов, в качестве варианта, альтернативного сжиганию (для использования в качестве биогаза)",
            imgUrl: require('./assets/sectors/industry.jpg')
        },

        {
            name: "Транспорт",
            desc: "Переход к чистым способам выработки энергии; уделение приоритетного внимания скоростному городскому транспорту, пешеходным и велосипедным сетям в городах, а также железнодорожным междугородным грузовым и пассажирским перевозкам; переход к использованию более чистых большегрузных дизельных транспортных средств и автомобилей с низким уровнем выбросов, а также более чистых видов топлива, включая топливо со сниженной концентрацией серы",
            imgUrl: require('./assets/sectors/transport.jpg')
        },

        {
            name: "Городское планирование",
            desc: "Улучшение энергетической эффективности зданий и обеспечение более зеленых и компактных и тем самым более энергоэффективных городов",
            imgUrl: require('./assets/sectors/city_planning.jpg'),
        },

        {
            name: "Энергия",
            desc: "Обеспечение доступа к недорогостоящим источникам энергии в быту для приготовления пищи, отопления и освещения",
            imgUrl: require('./assets/sectors/energy.jpg'),
        },

        {
            name: "Энергетика",
            desc: " Более широкое использование видов топлива с низким уровнем выбросов и возобновляемых источников энергии, не основанных на сжигании (таких как энергия солнца, ветра или гидроэнергия); комбинированная выработка тепла и энергии; и распределенная выработка энергии (например, энергетические минисистемы и размещаемые на крыше установки для выработки энергии из солнечной энергии)",
            imgUrl: require('./assets/sectors/energetics.jpg'),
        },

        {
            name: "Утилизация отходов",
            desc: "стратегии уменьшения отходов, сортировки отходов, рециклирования, повторного использования или переработки отходов; а также улучшенные методы биологической утилизации отходов, такие как анаэробная переработка отходов для производства биогаза, являются практически осуществимыми, недорогими альтернативными вариантами открытому сжиганию твердых отходов",
            imgUrl: require('./assets/sectors/disposal_of_waste.jpg')
        },

    ];


  return (
    <>
      <HeroBlock title="Качество атмосферного воздуха и здоровье" logos={LogoPartners}
                  links={navigation_links} />

        <Facts title="Основные факты" slides={factsSlider}/>

        <SectorsList title="Политика по уменьшению загрязнений" subtitle="Есть много примеров успешной политики по уменьшению загрязнения воздуха в таких секторах, как транспорт, городское планирование, энергетика и промышленность:"
                     items={sectors}/>
                    <Air/>

                     <Footer links={navigation_links} partners={LogoPartners}/>

    </>

  );
}

export default App;
