import React from 'react';

export default ({localEvent}) => {
    return (
        <tr className="event">
            <td>{ localEvent.description }</td>
            <td>{ `${localEvent.summary.substring(0, 80)}...` }</td>
            <td>{ localEvent.date }
            </td>
            <td>{ localEvent.type.description }</td>
            <td>{ new Intl.NumberFormat('en-CA', {
                    style: 'currency',
                    currency: 'CAD'
                }).format(localEvent.price) }
            </td>
        </tr>
    );
}