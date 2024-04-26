import React, { useState } from 'react';

function App() {
  const [nameInput, setNameInput] = useState('');
  const [nameList, setNameList] = useState([]);
  const [pickedList, setPickedList] = useState([]);
  const [pickedName, setPickedName] = useState('');
  const [showDialog, setShowDialog] = useState(false);

  const handleInputChange = (e) => {
    setNameInput(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addNameToList();
    }
  };

  const addNameToList = () => {
    if (nameInput.trim() !== '') {
      setNameList([...nameList, nameInput]);
      setNameInput('');
    }
  };

  const pickRandomName = () => {
    if (nameList.length > 0) {
      const randomIndex = Math.floor(Math.random() * nameList.length);
      const pickedName = nameList[randomIndex];
      setPickedName(pickedName);
      setShowDialog(true);
      setTimeout(() => {
        setShowDialog(false);
        setPickedList([...pickedList, pickedName]);
        setNameList(nameList.filter(name => name !== pickedName));
      }, 2000);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-3xl font-bold mb-4">Random Name Picker</h1>
      <div className="flex items-center mb-4">
        <input
          type="text"
          id="nameInput"
          value={nameInput}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          placeholder="Enter a name..."
          className="py-2 px-4 border border-gray-300 rounded mr-2"
        />
        <button onClick={addNameToList} className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600">
          Add Name
        </button>
      </div>
      <div id="nameList" className="mb-4">
        {nameList.map((name, index) => (
          <span className="bg-gray-200 py-1 px-2 rounded mr-2 mb-2" key={index}>{name}</span>
        ))}
      </div>
      <button id="pick" onClick={pickRandomName} className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600">
        Pick a Name
      </button>
      {showDialog && (
        <div id="nameDialog" className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded p-4">
            <span className="text-2xl font-bold text-gray-800 mb-2">Picked Name: {pickedName}</span>
            <button onClick={() => setShowDialog(false)} className="py-1 px-3 bg-blue-500 text-white rounded hover:bg-blue-600">Close</button>
          </div>
        </div>
      )}
      <div id="pickedList" className="mt-4">
        {pickedList.map((name, index) => (
          <span className="bg-gray-200 py-1 px-2 rounded mr-2 mb-2" key={index}>{name}</span>
        ))}
      </div>
    </div>
  );
}

export default App;
