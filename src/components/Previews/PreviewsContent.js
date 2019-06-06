import React from 'react';

import Szczecin from '../../img/city/szczecin.png';
import Olawa from '../../img/city/olawa.png'
import Wroclaw from '../../img/city/wroclaw.png'
import Walbrzych from '../../img/city/walbrzych.png'
import Pila from '../../img/city/pila.png'
import Warszawa from '../../img/city/warszawa.png'
import Krakow from '../../img/city/krakow.png'
import Katowice from '../../img/city/katowice.png'
import Poznan from '../../img/city/poznan.png'
import Swidnica from '../../img/city/swidnica.png'
import Brzeg from '../../img/city/brzeg.png'
import Kolobrzeg from '../../img/city/kolobrzeg.png'
import Henrykow from '../../img/city/henrykow.png'
import Jelczlaskowice from '../../img/city/jelczlaskowice.png'
import Szklarskaporeba from '../../img/city/szklarskaporeba.png'
import Jaroslawiec from '../../img/city/jaroslawiec.png'
import Bydgoszcz from '../../img/city/bydgoszcz.png';
import Lublin from '../../img/city/lublin.png';
import Gorzowwielkopolski from '../../img/city/gorzowwielkopolski.png';
import Lodz from '../../img/city/lodz.png';
import Rzeszow from '../../img/city/rzeszow.png';
import Bialystok from '../../img/city/bialystok.png';
import Gdansk from '../../img/city/gdansk.png';
import Kielce from '../../img/city/kielce.png';
import Elblag from '../../img/city/elblag.png'


import Dolnoslaskie from '../../img/region/dolnoslaskie.png'
import Kujawskopomorskie from '../../img/region/kujawskopomorskie.png'
import Lodzkie from '../../img/region/lodzkie.png'
import Lubelskie from '../../img/region/lubelskie.png'
import Lubuskie from '../../img/region/lubuskie.png'
import Malopolskie from '../../img/region/malopolskie.png'
import Mazowieckie from '../../img/region/mazowieckie.png'
import Opolskie from '../../img/region/opolskie.png'
import Podkarpackie from '../../img/region/podkarpackie.png'
import Podlaskie from '../../img/region/podlaskie.png'
import Pomorskie from '../../img/region/pomorskie.png'
import Slaskie from '../../img/region/slaskie.png'
import Swietokrzyskie from '../../img/region/swietokrzyskie.png'
import Warminskomazurskie from '../../img/region/warminskomazurskie.png'
import Wielkopolskie from '../../img/region/wielkopolskie.png'
import Zachodniopomorskie from '../../img/region/zachodniopomorskie.png'

const CityImagesArray = [Szczecin, Olawa, Wroclaw, Walbrzych, Pila, Warszawa, Krakow, Katowice, Poznan, Swidnica, Brzeg, Kolobrzeg, Henrykow, Jelczlaskowice, Szklarskaporeba, Jaroslawiec, Bydgoszcz, Lublin, Gorzowwielkopolski, Lodz, Rzeszow, Bialystok, Gdansk, Kielce, Elblag];

const RegionImagesArray = [Dolnoslaskie, Kujawskopomorskie, Lodzkie, Lubelskie, Lubuskie, Malopolskie, Mazowieckie, Opolskie, Podkarpackie, Podlaskie, Pomorskie, Slaskie, Swietokrzyskie, Warminskomazurskie, Wielkopolskie, Zachodniopomorskie]

const PreviewsContent = (props) => {

    const stringCity = CityImagesArray.toString();
    const stringRegion = RegionImagesArray.toString();

    const City = props.arrayContent.map(run => run.city).toString().toLowerCase()
        .replace(/ą/g, 'a').replace(/Ą/g, 'A')
        .replace(/ć/g, 'c').replace(/Ć/g, 'C')
        .replace(/ę/g, 'e').replace(/Ę/g, 'E')
        .replace(/ł/g, 'l').replace(/Ł/g, 'L')
        .replace(/ń/g, 'n').replace(/Ń/g, 'N')
        .replace(/ó/g, 'o').replace(/Ó/g, 'O')
        .replace(/ś/g, 's').replace(/Ś/g, 'S')
        .replace(/ż/g, 'z').replace(/Ż/g, 'Z')
        .replace(/ź/g, 'z').replace(/Ź/g, 'Z')
        .replace(/-/g, '').replace(/ /g, '');

    const Region = props.arrayContent.map(run => run.region).toString().toLowerCase()
        .replace(/ą/g, 'a').replace(/Ą/g, 'A')
        .replace(/ć/g, 'c').replace(/Ć/g, 'C')
        .replace(/ę/g, 'e').replace(/Ę/g, 'E')
        .replace(/ł/g, 'l').replace(/Ł/g, 'L')
        .replace(/ń/g, 'n').replace(/Ń/g, 'N')
        .replace(/ó/g, 'o').replace(/Ó/g, 'O')
        .replace(/ś/g, 's').replace(/Ś/g, 'S')
        .replace(/ż/g, 'z').replace(/Ż/g, 'Z')
        .replace(/ź/g, 'z').replace(/Ź/g, 'Z')
        .replace(/-/g, '').replace(/ /g, '');

    const indexCity = stringCity.indexOf(`/${City}`)
    const indexRegion = stringRegion.indexOf(`/${Region}`)

    const wycinekCity = stringCity.substring(indexCity - 13, indexCity + City.length + 14)
    const wycinekRegion = stringRegion.substring(indexRegion - 13, indexRegion + Region.length + 14)

    const cityImage = CityImagesArray.filter(foto => foto === `${wycinekCity}`);
    const regionImage = RegionImagesArray.filter(foto => foto === `${wycinekRegion}`);

    const oneRacing = props.arrayContent.map(run => (
        <div className="preview-content animation-preview-content" key={run.id} >
            <div className="preview-content-header">
                <div className="preview-content-header-map">
                    <img className="animation-previews-img" src={regionImage} alt={`mapa wojewodztwa ${run.region}`} />
                </div>
                <div className="preview-content-header-city">
                    <p className="preview-content-city">{run.city}</p>
                    <p className="preview-content-date">{run.date.substring(8, 10)}.{run.date.substring(5, 7)}.{run.date.substring(0, 4)}r.</p> {/* zamiana formatu daty z tej z JSON 2019-02-12 na 12.02.2019 */}
                    <p className="preview-content-description">{run.description}</p>
                </div>
                <div className="preview-content-header-emblem">
                    <img className="animation-previews-img" src={cityImage} alt={`gołdo miasta ${run.city}`} />
                </div>
            </div>
            <div className="preview-content-wrapper-run">
                <div className="preview-content-run-place">
                    <p>{run.fullDate}</p>
                    <i className="fas fa-map-marker-alt"></i>
                    <p>{run.place}</p>
                </div>
                <div className="preview-content-run-route">
                    <p>dystans</p>
                    <p>{run.distance}</p>
                    <i className="fas fa-road"></i>
                    <p>{run.route}</p>
                </div>
                <div className="preview-content-run-payment">
                    <p>limit startujących</p>
                    <p>{run.limit}</p>
                    <p><i className="far fa-money-bill-alt"></i></p>
                    {run.payment.payment1 && <p>{run.payment.payment1}</p>}
                    {run.payment.payment2 && <p>{run.payment.payment2}</p>}
                    {run.payment.payment3 && <p>{run.payment.payment3}</p>}
                    {run.payment.payment4 && <p>{run.payment.payment4}</p>}
                    {run.payment.payment5 && <p>{run.payment.payment5}</p>}
                </div>
                <div className="preview-content-run-links">
                    {run.webOrganizer && <div><a href={`${run.webOrganizer}`} rel="noopener">Strona organizatora</a></div>}
                    {run.regulations && <div><a href={`${run.regulations}`} rel="noopener">Regulamin</a></div>}
                    {run.records && <div><a href={`${run.records}`} rel="noopener">Zapisy</a></div>}
                </div>
                <div className="preview-content-run-bonus">
                    {run.bonus.description && <p>{run.bonus.description}</p>}
                    {run.bonus.bonus1 && <p><i className="fas fa-check"></i>{run.bonus.bonus1}</p>}
                    {run.bonus.bonus2 && <p><i className="fas fa-check"></i>{run.bonus.bonus2}</p>}
                    {run.bonus.bonus3 && <p><i className="fas fa-check"></i>{run.bonus.bonus3}</p>}
                    {run.bonus.bonus4 && <p><i className="fas fa-check"></i>{run.bonus.bonus4}</p>}
                    {run.bonus.bonus5 && <p><i className="fas fa-check"></i>{run.bonus.bonus5}</p>}
                </div>
            </div>
        </div>
    ))
    return (
        <>
            <div className="section-previews-content">
                {oneRacing}
            </div>
        </>
    )
}

export default PreviewsContent