import React from 'react'

const PreviewsSearchMonth = (props) => {
    return (
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
    )

}

export default PreviewsSearchMonth