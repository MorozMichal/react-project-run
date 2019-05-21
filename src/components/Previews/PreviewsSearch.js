import React from 'react';

const PreviewsSearch = (props) => {
    const yearNow = new Date().getFullYear();
    return (
        <div className="section-previews-search">
            <select name="month" value={props.month} onChange={props.inputMonth}>
                <option value="0">Najbliższe</option>
                <option value="00-01">Styczeń</option>
                <option value="00-02">Luty</option>
                <option value="00-03">Marzec</option>
                <option value="00-04">Kwiecień</option>
                <option value="00-05">Maj</option>
                <option value="00-06">Czerwiec</option>
                <option value="00-07">Lipiec</option>
                <option value="00-08">Sierpień</option>
                <option value="00-09">Wrzesień</option>
                <option value="00-10">Październik</option>
                <option value="00-11">Listopad</option>
                <option value="00-12">Grudzień</option>
            </select>
            <select name="year" value={props.year} onChange={props.inputMonth} disabled={props.disabled}>
                <option value={"all"}>all</option>
                <option value={"2019"}>{yearNow}</option>
                <option value={"2020"}>{yearNow + 1}</option>
            </select>
            <select name="region" value={props.region} onChange={props.inputMonth}>
                <option value="all">Wszystkie</option>
                <option value="00-dolnośląskie">Dolnośląskie</option>
                <option value="00-kujawsko-pomorskie">Kujawsko-Pomorskie</option>
                <option value="00-lubelskie">Lubelskie</option>
                <option value="00-lubuskie">Lubuskie</option>
                <option value="00-łódzkie">Łódzkie</option>
                <option value="00-małopolskie">Małopolskie</option>
                <option value="00-mazowieckie">Mazowieckie</option>
                <option value="00-opolskie">Opolskie</option>
                <option value="00-podkarpackie">Podkarpackie</option>
                <option value="00-podlaskie">Podlaskie</option>
                <option value="00-pomorskie">Pomorskie</option>
                <option value="00-śląskie">Śląskie</option>
                <option value="00-świętorzyskie">Świętorzyskie</option>
                <option value="00-warmińsko-mazurskie">Warmińsko-Mazurskie</option>
                <option value="00-wielkopolskie">Wielkopolskie</option>
                <option value="00-zachodniopomorskie">Zachodniopomorskie</option>
            </select>
        </div>
    )
}

export default PreviewsSearch
