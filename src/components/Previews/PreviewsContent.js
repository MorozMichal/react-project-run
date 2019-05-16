import React from 'react';
import Foto from '../../img/city/szczecin.png'

const foto

const PreviewsContent = (props) => {

    const oneRacing = props.arrayContent.map(run => (

        <div className="preview-content animation-preview-content" key={run.id} >
            <img src={Foto} alt="miasto" />
            <p className="preview-content-city">{run.city} </p>
            <p className="preview-content-date">{run.date.substring(8, 10)}.{run.date.substring(5, 7)}.{run.date.substring(0, 4)}</p> {/* zamiana formatu daty z tej z JSON 2019-02-12 na 12.02.2019 */}
            <p className="preview-content-description">{run.description}</p>
            {run.webOrganizer && <p><a href={`${run.webOrganizer}`} rel="noopener">Strona organizatora</a></p>}
            {run.regulations && <p><a href={`${run.regulations}`} rel="noopener">Regulamin</a></p>}
            {run.records && <p><a href={`${run.records}`} rel="noopener">Zapisy</a></p>}

            {run.fullDate && <div className="preview-content-wraper-item">
                <div><i class="fas fa-calendar-alt"></i></div>
                <div>{run.fullDate}</div>
            </div>}
            {run.place && <div className="preview-content-wraper-item">
                <div><i class="fas fa-map-marker-alt"></i></div>
                <div>{run.place}</div>
            </div>}
            {run.distance && <div className="preview-content-wraper-item">
                <div><i class="fas fa-route"></i></div>
                <div>{run.distance}</div>
            </div>}
            {run.limit && <div className="preview-content-wraper-item">
                <div><i class="far fa-check-square"></i></div>
                <div>{run.limit}</div>
            </div>}
            {run.route && <div className="preview-content-wraper-item">
                <div><i class="fas fa-road"></i></div>
                <div>{run.route}</div>
            </div>}
            {run.payment && <div className="preview-content-wraper-item">
                <div><i class="far fa-money-bill-alt"></i></div>
                <div>
                    {run.payment.payment1 && <p>{run.payment.payment1}</p>}
                    {run.payment.payment2 && <p>{run.payment.payment2}</p>}
                    {run.payment.payment3 && <p>{run.payment.payment3}</p>}
                    {run.payment.payment4 && <p>{run.payment.payment4}</p>}
                    {run.payment.payment5 && <p>{run.payment.payment5}</p>}
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