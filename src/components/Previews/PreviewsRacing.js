import React from 'react'

const PreviewsRacing = (props) => {

    const data = new Date().toLocaleDateString()
    console.log(data)

    const racingDate = props.racing.filter(run => run.date > data)

    const racing = racingDate.map(run => (

        <div key={run.id} className="preview" onClick={() => props.click(run.id)}>
            <p>{run.city}</p>
            <p>{run.date}</p>
            <p>{run.description}</p>
        </div>
    ))

    return (
        <>
            <div className="section-previews-racing">
                <div className="section-previews-all">
                    {racing}
                </div>
            </div>
        </>
    )
}

export default PreviewsRacing