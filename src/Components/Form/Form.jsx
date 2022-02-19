import React from 'react';

const Form = ({ options, setFields, startClick }) => {

    const opetionItems = Object.keys(options);

    return (
        <form className='form' onSubmit={(e) => startClick(e)}>
            <select onChange={(e) => setFields(e.target.value)}>
                    <option defaultValue hidden>Choose mode</option>
                {opetionItems.map((item, index) => (
                    <option
                        key={index}
                        value={options[item]["field"]}
                    >
                        {`${item} ${options[item]["field"]}`}
                    </option>
                ))}
            </select>
            <button>Start</button>
        </form>
    );
};

export default Form;