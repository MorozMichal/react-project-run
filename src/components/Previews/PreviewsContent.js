import React from 'react'

const PreviewsContent = (props) => {

    const oneRacing = props.arrayContent.map(run => (

        <div key={run.id}>
            <h1>{run.city}</h1>
            <p>{run.city}</p>
            <p>{run.date}</p>
            <p>{run.description}</p>
            <p><a href={`${run.webOrganizer}`} target="_blank">Strona organizatora</a></p>
            <p><a href={`${run.regulations}`} target="_blank">Regulamin</a></p>
            <p><a href={`${run.records}`} target="_blank">Zapisy</a></p>
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
                <h2>widok poszczególnych biegów</h2>
                {oneRacing}
            </div>
        </>
    )
}

export default PreviewsContent