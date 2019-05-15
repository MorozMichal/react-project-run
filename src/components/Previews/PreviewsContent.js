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
            <p>Termin: {run.fullDate}</p>
            <p>Miejsce: {run.place}</p>
            <p>Dystans: {run.distance}</p>
            <p>limit uczestników: {run.limit}</p>
            <p>Trasa: {run.route}</p>
            <p>Opłata startowa: {run.payment}</p>
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