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

import Dolnoslaskie from '../../img/region/dolnoslaskie.png'

const fotoArray = [Szczecin, Olawa, Wroclaw, Walbrzych, Pila, Warszawa, Krakow, Katowice, Poznan, Swidnica, Brzeg, Kolobrzeg, Henrykow, Jelczlaskowice, Szklarskaporeba, Jaroslawiec];

const PreviewsContent = (props) => {

    const string = fotoArray.toString();

    const City = props.arrayContent.map(run => run.city).toString().toLowerCase().replace(/ą/g, 'a').replace(/Ą/g, 'A')
        .replace(/ć/g, 'c').replace(/Ć/g, 'C')
        .replace(/ę/g, 'e').replace(/Ę/g, 'E')
        .replace(/ł/g, 'l').replace(/Ł/g, 'L')
        .replace(/ń/g, 'n').replace(/Ń/g, 'N')
        .replace(/ó/g, 'o').replace(/Ó/g, 'O')
        .replace(/ś/g, 's').replace(/Ś/g, 'S')
        .replace(/ż/g, 'z').replace(/Ż/g, 'Z')
        .replace(/ź/g, 'z').replace(/Ź/g, 'Z')
        .replace(/-/g, '').replace(/ /g, '');

    const index = string.indexOf(`/${City}`)
    const wycinek = string.substring(index - 13, index + City.length + 14)
    const fotoCity = fotoArray.filter(foto => foto === `${wycinek}`);

    const oneRacing = props.arrayContent.map(run => (
        <div className="preview-content animation-preview-content" key={run.id} >
            <div style={{
                display: "flex"
            }}>
                <div style={{
                    flexBasis: "25%",
                    alignSelf: "center"
                }}>
                    <img className="animation-previews-img" src={Dolnoslaskie} alt={`gołdo miasta ${run.city}`} />
                </div>

                <div style={{
                    flexBasis: "50%"
                }}>
                    <p className="preview-content-city">{run.city} </p>
                    <p className="preview-content-date">{run.date.substring(8, 10)}.{run.date.substring(5, 7)}.{run.date.substring(0, 4)}r.</p> {/* zamiana formatu daty z tej z JSON 2019-02-12 na 12.02.2019 */}
                    <p className="preview-content-description">{run.description}</p>

                </div>

                <div style={{
                    flexBasis: "25%",
                    alignSelf: "center"
                }}>
                    <img className="animation-previews-img" src={fotoCity} alt={`gołdo miasta ${run.city}`} />
                </div>
            </div>


            <div className="preview-content-links">
                {run.webOrganizer && <div><a href={`${run.webOrganizer}`} rel="noopener">Strona organizatora</a></div>}
                {run.regulations && <div><a href={`${run.regulations}`} rel="noopener">Regulamin</a></div>}
                {run.records && <div><a href={`${run.records}`} rel="noopener">Zapisy</a></div>}
            </div>


            {run.fullDate && <div className="preview-content-wraper-item">
                <div><i className="fas fa-calendar-alt"></i></div>
                <div>{run.fullDate}</div>
            </div>}

            {run.place && <div className="preview-content-wraper-item">
                <div><i className="fas fa-map-marker-alt"></i></div>
                <div>{run.place}</div>
            </div>}

            {run.distance && <div className="preview-content-wraper-item">
                <div><i className="fas fa-route"></i></div>
                <div>{run.distance}</div>
            </div>}



            {run.route && <div className="preview-content-wraper-item">
                <div><i className="fas fa-road"></i></div>
                <div>{run.route}</div>
            </div>}

            {run.limit && <div className="preview-content-wraper-item">
                <div><i className="far fa-check-square"></i></div>
                <div>{run.limit}</div>
            </div>}

            {run.payment && <div className="preview-content-wraper-item">
                <div><i className="far fa-money-bill-alt"></i></div>
                <div>
                    {run.payment.payment1 && <p>{run.payment.payment1}</p>}
                    {run.payment.payment2 && <p>{run.payment.payment2}</p>}
                    {run.payment.payment3 && <p>{run.payment.payment3}</p>}
                    {run.payment.payment4 && <p>{run.payment.payment4}</p>}
                    {run.payment.payment5 && <p>{run.payment.payment5}</p>}
                </div>
            </div>}

            {run.bonus && <div className="preview-content-wraper-item">
                <div><i className="far fa-money-bill-alt"></i></div>
                <div>
                    {run.bonus.description && <p>{run.bonus.description}</p>}
                    {run.bonus.bonus1 && <p>{run.bonus.bonus1}</p>}
                    {run.bonus.bonus2 && <p>{run.bonus.bonus2}</p>}
                    {run.bonus.bonus3 && <p>{run.bonus.bonus3}</p>}
                    {run.bonus.bonus4 && <p>{run.bonus.bonus4}</p>}
                    {run.bonus.bonus5 && <p>{run.bonus.bonus5}</p>}
                </div>
            </div>}


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