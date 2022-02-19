import React from 'react';

const HoveredSquares = ({ fieldsArr }) => {

    return (
        <div className='hovered_squares'>
            <h3>Hovered Squares</h3>
            {fieldsArr.map((item) => item.checked &&
                <div key={item.id}>row {item.row} col {item.coloumn}</div>
            )}
        </div>
    );
};

export default HoveredSquares;