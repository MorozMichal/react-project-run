import React from 'react'

const PreviewsContent = (props) => {

    const oneRacing = props.arrayContent.map(run => (

        <div className="preview-content animation-preview-content" key={run.id} >
            <p>{run.city}</p>
            <p>{run.date.substring(8, 10)}.{run.date.substring(5, 7)}.{run.date.substring(0, 4)}</p> {/* zamiana formatu daty z tej z JSON 2019-02-12 na 12.02.2019 */}
            <p>{run.description}</p>
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