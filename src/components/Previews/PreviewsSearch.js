import React from 'react';
import PreviewsSearchMonth from './PreviewsSearchMonth'
import PreviewsSearchYear from './PreviewsSearchYear'
import PreviewsSearchRegion from './PreviewsSearchRegion';

const PreviewsSearch = (props) => {
    return (
        <div className="section-previews-search">
            <div className="select">
                <PreviewsSearchMonth
                    month={props.month}
                    inputMonth={props.inputMonth}
                />
                <PreviewsSearchYear
                    year={props.year}
                    inputMonth={props.inputMonth}
                    disabled={props.disabled}
                />
                <PreviewsSearchRegion
                    region={props.region}
                    inputMonth={props.inputMonth}
                />
            </div>
        </div>
    )
}

export default PreviewsSearch
