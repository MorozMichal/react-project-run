import React from 'react'

const PreviewsContent = (props) => {

    const oneRacing = props.arrayContent.map(run => (

        <div className="preview-content animation-preview-content" key={run.id} >
            <p>{run.city}</p>
            <p>{run.date.substring(8, 10)}.{run.date.substring(5, 7)}.{run.date.substring(0, 4)}</p> {/* zamiana formatu daty z tej z JSON 2019-02-12 na 12.02.2019 */}
            <p>{run.description}</p>
            <p><a href={`${run.webOrganizer}`} rel="noopener">Strona organizatora</a></p>
            <p><a href={`${run.regulations}`} rel="noopener">Regulamin</a></p>
            <p><a href={`${run.records}`} rel="noopener">Zapisy</a></p>

            <div className="preview-content-wraper-item">
                <div>termin:</div>
                <div>{run.fullDate}</div>
            </div>
            <div className="preview-content-wraper-item">
                <div>miejsce:</div>
                <div>{run.place}</div>
            </div>
            <div className="preview-content-wraper-item">
                <div>dystans:</div>
                <div>{run.distance}</div>
            </div>
            <div className="preview-content-wraper-item">
                <div>limit:</div>
                <div>{run.limit}</div>
            </div>
            <div className="preview-content-wraper-item">
                <div>trasa:</div>
                <div>{run.route}</div>
            </div>
            <div className="preview-content-wraper-item">
                <div>opłata:</div>
                <div>
                    <p>{run.payment.payment1}</p>
                    <p>{run.payment.payment2}</p>
                </div>
            </div>
            {run.webOrganizer && <p><a href={`${run.webOrganizer}`} rel="noopener">Strona organizatora</a></p>}
            {run.regulations && <p><a href={`${run.regulations}`} rel="noopener">Regulamin</a></p>}
            {run.records && <p><a href={`${run.records}`} rel="noopener">Zapisy</a></p>}
            {run.fullDate && <p>Termin: {run.fullDate}</p>}
            {run.place && <p>Miejsce: {run.place}</p>}
            {run.distance && <p>Dystans: {run.distance}</p>}
            {run.limit && <p>limit uczestników: {run.limit}</p>}
            {run.route && <p>Trasa: {run.route}</p>}
            {run.payment && <p>Opłata startowa: {run.payment}</p>}
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