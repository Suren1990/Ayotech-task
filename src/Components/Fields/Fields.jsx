import React from 'react';

const Fields = ({ fieldsArr, itemChecked }) => {

    const fieldsArrCount = fieldsArr.length;

    return (
        <div className='fields_wrap'>
            {fieldsArr.map((item) => (
                <div key={item.id}
                    className={`field_item ${fieldsArrCount === 100 ? "field_item_100" : fieldsArrCount === 225 ? "field_item_225" : ""}${item.checked ? " item_checked" : ""}`}
                    onMouseEnter={() => itemChecked(item.id)}
                >
                </div>
            ))}
        </div>
    );
};

export default Fields;