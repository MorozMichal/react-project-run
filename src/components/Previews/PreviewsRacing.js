import React from 'react';

const PreviewsRacing = (props) => {
    //Metoda parse pobiera łańcuch znaków daty (na przykład: "Dec 25, 1995") i zwraca liczbę milisekund,
    // const aktualnaData = new Date().getTime()
    // const aktualnaData = new Date("2019-07-02").getTime()
    const aktualnaData = new Date().getTime()
    // console.log(aktualnaData)
    // console.log(props.racing.map(run => Date.parse(run.date)))
    //filtrujemy zeby pokazały sie wszyskie biegi bez tyh gdzie data juz minęła
    //w JSON data format rrrr-mm-dd
    //zamienić zeby pkazywało sie od dnia na stronie
    const racingDate = props.racing.filter(run => Date.parse(run.date) > aktualnaData);

    //posortowanie tablicy według daty
    racingDate.sort((a, b) => Date.parse(a.date) - Date.parse(b.date))

    const racingDateShow = racingDate.slice(0, 16)

    // const aa = racingDate.map(run => (
    //     `${run.date.substring(8, 10)}.${run.date.substring(5, 7)}.${run.date.substring(0, 4)}`
    // ))

    const racing = racingDateShow.map(run => (
        <div key={run.id} className="preview" onClick={() => props.click(run.id)}>
            <p>{run.city}</p>
            <p>{run.date.substring(8, 10)}.{run.date.substring(5, 7)}.{run.date.substring(0, 4)}</p> {/* zamiana formatu daty z tej z JSON 2019-02-12 na 12.02.2019 */}
            <p>{run.description}</p>
        </div>

    ))

    return (
        <>
            <div className="section-previews-all">
                {racing}
            </div>
        </>
    )
}

export default PreviewsRacing

