import React from 'react';

const HoveredSquares = ({ fieldsArr }) => {

    return (
        <div className='hovered_squares'>
            <h3>Hovered Squares</h3>
            <div className="hovered_squares_items">
                {fieldsArr.map((item) => item.checked &&
                    <p key={item.id}>row {item.row} col {item.coloumn}</p>
                )}
            </div>
        </div>
    );
};

export default HoveredSquares;