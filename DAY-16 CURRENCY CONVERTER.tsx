import { useState } from 'react';

export default function App() {
    const [fromInput, setFromInput] = useState(null);
    const [toInput, setToInput] = useState(null);
    const [result, setResult] = useState(null);

    const handleConvert = () => {
        fetch('https://open.er-api.com/v6/latest/' + fromInput)
            .then((response) => response.json())
            .then((data) => {
                const rate = data.rates[toInput]; // Assuming EUR is the target currency
                const convertedValue = 1 * rate; // Convert 1 unit of USD to EUR
                setResult(convertedValue);
            });
    };

    const handleSwap = () => {
        setFromInput(toInput);
        setToInput(fromInput);
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-900">
            <h1 className="text-3xl font-bold mb-4 text-green-400 font-bold">CURRENCY CONVERTER</h1>
            <div className="p-4 bg-gray-800 rounded-lg shadow-lg flex flex-col items-center">
                <input
                    type="text"
                    id="from"
                    maxLength="3"
                    placeholder="From: e.g., USD"
                    value={fromInput}
                    onChange={(e) => setFromInput(e.target.value)}
                    className="border rounded py-2 px-3 mb-2 text-green font-bold"
                />
                <input
                    type="text"
                    id="to"
                    maxLength="3"
                    placeholder="To: e.g., EUR"
                    value={toInput}
                    onChange={(e) => setToInput(e.target.value)}
                    className="border rounded py-2 px-3 mb-4 text-green font-bold"
                />
                <div className="flex">
                    <button
                        id="swap"
                        onClick={handleSwap}
                        className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded mr-2"
                    >
                        Swap
                    </button>
                    <button
                        id="convert"
                        onClick={handleConvert}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Convert
                    </button>
                </div>
                <div id="currencyValue" className="mt-4 text-white font-bold">
                    {result}
                </div>
            </div>
        </div>
    );
}
