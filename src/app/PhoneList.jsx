import React from 'react';


export const PhoneList = props => <>

<ul className="list-group">
    <li className="list-group-item bg-info"></li>
        {
        props.phoneNumbers.map((x, i) => 
        <li className="list-group-item ">
            {x.number}
            <span class = "badge badge-info float-right">
                {x.type}
            </span>
    </li>)
    }

</ul>

</>