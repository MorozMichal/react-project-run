import React from 'react';

const PreviewsSearch = (props) => {
    const yearNow = new Date().getFullYear();
    return (
        <div className="section-previews-search">
            <div className="select">
                <select name="month" value={props.month} onChange={props.inputMonth}>
                    <option value="00">Najbliższe</option>
                    <option disabled>----------</option>

                    <option value="01">Styczeń</option>
                    <option value="02">Luty</option>
                    <option value="03">Marzec</option>
                    <option value="04">Kwiecień</option>
                    <option value="05">Maj</option>
                    <option value="06">Czerwiec</option>
                    <option value="07">Lipiec</option>
                    <option value="08">Sierpień</option>
                    <option value="09">Wrzesień</option>
                    <option value="10">Październik</option>
                    <option value="11">Listopad</option>
                    <option value="12">Grudzień</option>
                </select>
                <select name="year" value={props.year} onChange={props.inputMonth} disabled={props.disabled}>
                    <option value={yearNow}>{yearNow}</option>
                    <option value={yearNow + 1}>{yearNow + 1}</option>
                </select>
                <select name="region" value={props.region} onChange={props.inputMonth}>
                    <option value="all">Wszystkie</option>
                    <option disabled>----------</option>
                    <option value="dolnośląskie">Dolnośląskie</option>
                    <option value="kujawsko-pomorskie">Kujawsko-Pomorskie</option>
                    <option value="lubelskie">Lubelskie</option>
                    <option value="lubuskie">Lubuskie</option>
                    <option value="łódzkie">Łódzkie</option>
                    <option value="małopolskie">Małopolskie</option>
                    <option value="mazowieckie">Mazowieckie</option>
                    <option value="opolskie">Opolskie</option>
                    <option value="podkarpackie">Podkarpackie</option>
                    <option value="podlaskie">Podlaskie</option>
                    <option value="pomorskie">Pomorskie</option>
                    <option value="śląskie">Śląskie</option>
                    <option value="świętorzyskie">Świętorzyskie</option>
                    <option value="warmińsko-mazurskie">Warmińsko-Mazurskie</option>
                    <option value="wielkopolskie">Wielkopolskie</option>
                    <option value="zachodniopomorskie">Zachodniopomorskie</option>
                </select>
            </div>
            <div className="checkbox">
                <label>42km<input name="check42km" type="checkbox" onChange={props.checked} checked={props.check42km} /></label>
                <label>21km<input name="check21km" type="checkbox" onChange={props.checked} checked={props.check21km} /></label>
                <label>10km<input name="check10km" type="checkbox" onChange={props.checked} checked={props.check10km} /></label>
            </div>
        </div>

    )
}

export default PreviewsSearch
