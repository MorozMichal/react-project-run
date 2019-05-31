


<div className="test">
    <div className="test1">    {run.place && <div className="preview-content-wraper-item">
        <div><i className="fas fa-map-marker-alt"></i></div>
        <div>{run.place}</div>
    </div>}</div>
    <div className="test2">  {run.fullDate && <div className="preview-content-wraper-item">
        <div><i className="fas fa-calendar-alt"></i></div>
        <div>{run.fullDate}</div>
    </div>}</div>


    <div className="test3">   {run.distance && <div className="preview-content-wraper-item">
        <div><i className="fas fa-route"></i></div>
        <div>{run.distance}</div>
    </div>}</div>
    <div className="test4">4</div>
    <div className="test5">
        {/* <div className="preview-content-links"> */}
        {run.webOrganizer && <div><a href={`${run.webOrganizer}`} rel="noopener">Strona organizatora</a></div>}
        {run.regulations && <div><a href={`${run.regulations}`} rel="noopener">Regulamin</a></div>}
        {run.records && <div><a href={`${run.records}`} rel="noopener">Zapisy</a></div>}
        {/* </div> */}
    </div>
    <div className="test6">      {run.route && <div className="preview-content-wraper-item">
        <div><i className="fas fa-road"></i></div>
        <div>{run.route}</div>
    </div>}</div>
    <div className="test7">    {run.limit && <div className="preview-content-wraper-item">
        <div><i className="far fa-check-square"></i></div>
        <div>{run.limit}</div>
    </div>}</div>
    <div className="test8">
        {run.payment && <div className="preview-content-wraper-item">
            <div><i className="far fa-money-bill-alt"></i></div>
            <div>
                {run.payment.payment1 && <p>{run.payment.payment1}</p>}
                {run.payment.payment2 && <p>{run.payment.payment2}</p>}
                {run.payment.payment3 && <p>{run.payment.payment3}</p>}
                {run.payment.payment4 && <p>{run.payment.payment4}</p>}
                {run.payment.payment5 && <p>{run.payment.payment5}</p>}
            </div>
        </div>}</div>
    <div className="test9">
        {run.bonus && <div className="preview-content-wraper-item">
            <div><i className="far fa-money-bill-alt"></i></div>
            <div>
                {run.bonus.description && <p>{run.bonus.description}</p>}
                {run.bonus.bonus1 && <p>{run.bonus.bonus1}</p>}
                {run.bonus.bonus2 && <p>{run.bonus.bonus2}</p>}
                {run.bonus.bonus3 && <p>{run.bonus.bonus3}</p>}
                {run.bonus.bonus4 && <p>{run.bonus.bonus4}</p>}
                {run.bonus.bonus5 && <p>{run.bonus.bonus5}</p>}
            </div>
        </div>}</div>
</div>