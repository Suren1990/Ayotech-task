import { useEffect, useState } from 'react';
import './App.css';
import Fields from './Components/Fields/Fields';
import Form from './Components/Form/Form';
import HoveredSquares from './Components/HoveredSquares/HoveredSquares';

function App() {
  const OPTIONS_API = 'http://demo1030918.mockable.io';

  const [options, setOptions] = useState();
  const [fields, setFields] = useState(5);
  const [optionsErr, setOptionsErr] = useState(null);
  const [fieldsArr, setFieldsArr] = useState([]);

  useEffect(() => {

    const getOptions = async () => {
      try {
        const response = await fetch(OPTIONS_API);
        if (!response.ok) throw Error('Did not get options');
        const optionList = await response.json();
        setOptions(optionList);
        setOptionsErr(null);
      } catch (err) {
        setOptionsErr(err.message);
      }
    }

    getOptions();

  }, [])

  const startClick = (e) => {
    e.preventDefault();
    paintFields(fields);
  }

  const paintFields = (count) => {
    const allFieldsCount = count * count;
    const fieldsItemArr = [];

    for (let i = 1, row = 1, col = 1; i <= allFieldsCount; i++) {

      let fieldItem = {
        id: i,
        checked: false,
        row: row,
        coloumn: col,
      }

      if (col <= count) {
        col++
      }

      if (i % count === 0) {
        fieldItem['row'] = row;
        row++;
        col = 1;
      }

      fieldsItemArr.push(fieldItem);
    }

    setFieldsArr(fieldsItemArr);
  }

  const itemChecked = (id) => {
    const checkedItem = fieldsArr.map((item) => item.id === id
      ? { ...item, checked: !item.checked }
      : item);

    setFieldsArr(checkedItem);
  }

  return (
    <div className="App">
      <main>
        {options && !optionsErr &&
          <div className='form_fileds'>
            <Form options={options} setFields={setFields} startClick={startClick} />
            {fieldsArr.length > 0 &&
              <Fields fieldsArr={fieldsArr} itemChecked={itemChecked} />
            }
          </div>
        }
        {optionsErr && <h3>{optionsErr}</h3>}
        <HoveredSquares fieldsArr={fieldsArr} />
      </main>
    </div>
  );
}

export default App;
