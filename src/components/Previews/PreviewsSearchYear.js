import React from 'react'

const PreviewsSearchYear = (props) => {
    const yearNow = new Date().getFullYear();
    return (
        <select name="year" value={props.year} onChange={props.inputMonth} disabled={props.disabled}>
            <option value={yearNow}>{yearNow}</option>
            <option value={yearNow + 1}>{yearNow + 1}</option>
        </select>
    )

}

export default PreviewsSearchYear