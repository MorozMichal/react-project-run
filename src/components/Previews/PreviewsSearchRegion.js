import React from 'react'

const PreviewsSearchRegion = (props) => {
    return (
        <select name="region" value={props.region} onChange={props.inputMonth}>
            <option value="all">Wszystkie</option>
            <option disabled>----------</option>
            <option value="dolnośląskie">Dolnośląskie</option>
            <option value="kujawsko-pomorskie">Kujawsko-Pom.</option>
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
            <option value="świętokrzyskie">Świętokrzyskie</option>
            <option value="warmińsko-mazurskie">Warmińsko-Maz.</option>
            <option value="wielkopolskie">Wielkopolskie</option>
            <option value="zachodniopomorskie">Zachodniopom.</option>
        </select>
    )

}

export default PreviewsSearchRegion