import React from 'react';

const PreviewsRacing = (props) => {
    //Metoda parse pobiera łańcuch znaków daty (na przykład: "Dec 25, 1995") i zwraca liczbę milisekund,
    const currentDate = new Date().getTime()

    //Filtrowanie tablicy w celu usunięcia biegów których data juz upłynęła
    const racingDate = props.racing.filter(run => Date.parse(run.date) > currentDate);

    //Sortowanie tablicy wszystkich biegów według daty od najbliższej do najdalszej
    racingDate.sort((a, b) => Date.parse(a.date) - Date.parse(b.date))

    //Wycięcie z tablicy wszystkich biegów - 16 pierwszych
    const racingDateShow = racingDate.slice(0, 16)

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

