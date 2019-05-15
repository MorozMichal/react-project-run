import React from 'react';

const PreviewsArrow = (props) => {
    return (
        <div className="section-previews-banner">
            <i onClick={props.clickIcon} className={`fas ${props.icon} animation-previews-button`}></i>
        </div>
    )

}

export default PreviewsArrow