import React, { useState } from 'react'

function App() {
	const [fromUnit, setFromUnit] = useState('centimeters')
	const [toUnit, setToUnit] = useState('inches')
	const [fromValue, setFromValue] = useState('')
	const [outputValue, setOutputValue] = useState('')

	const handleReverseUnits = () => {
		// Swap the "From" and "To" units
		setFromUnit(toUnit)
		setToUnit(fromUnit)
	}

	const handleConvert = () => {
		// Conversion logic
		const conversionFactor = {
			centimeters: {
				inches: 0.393701,
				miles: 0.00000621371,
				feet: 0.0328084,
				kilometers: 0.00001,
				meters: 0.01
			},
			inches: {
				centimeters: 2.54,
				miles: 0.00001578282828283,
				feet: 0.0833333,
				kilometers: 0.0000254,
				meters: 0.0254
			},
			miles: {
				centimeters: 160934,
				inches: 63360,
				feet: 5280,
				kilometers: 1.60934,
				meters: 1609.34
			},
			feet: {
				centimeters: 30.48,
				inches: 12,
				miles: 0.000189394,
				kilometers: 0.0003048,
				meters: 0.3048
			},
			kilometers: {
				centimeters: 100000,
				inches: 39370.1,
				miles: 0.621371,
				feet: 3280.84,
				meters: 1000
			},
			meters: {
				centimeters: 100,
				inches: 39.3701,
				miles: 0.000621371,
				feet: 3.28084,
				kilometers: 0.001
			}
		}

		const result =
			parseFloat(fromValue) * conversionFactor[fromUnit][toUnit]

		// Display result with 3 decimal places
		setOutputValue(result.toFixed(3))
	}

	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
			<h1 className="text-3xl font-bold mb-4">Distance Converter</h1>
			<div className="flex items-center">
				<label className="mr-2">From:</label>
				<select
					value={fromUnit}
					id="fromUnit"
					onChange={(e) => setFromUnit(e.target.value)}
					className="bg-gray-800 text-green-300 p-2 mr-2 rounded-md"
				>
					<option value="centimeters">Centimeters</option>
					<option value="inches">Inches</option>
					<option value="miles">Miles</option>
					<option value="feet">Feet</option>
					<option value="kilometers">Kilometers</option>
					<option value="meters">Meters</option>
				</select>
				<label className="mr-2">To:</label>
				<select
					value={toUnit}
					id="toUnit"
					onChange={(e) => setToUnit(e.target.value)}
					className="bg-gray-800 text-yellow-300 p-2 mr-2 rounded-md"
				>
					<option value="centimeters">Centimeters</option>
					<option value="inches">Inches</option>
					<option value="miles">Miles</option>
					<option value="feet">Feet</option>
					<option value="kilometers">Kilometers</option>
					<option value="meters">Meters</option>
				</select>
				<input
					type="number"
					id="fromValue"
					value={fromValue}
					onChange={(e) => setFromValue(e.target.value)}
					className="bg-gray-800 text-green p-2 mr-2 rounded-md"
				/>
				<div className="flex flex-col items-center mt-4">
					<button
						onClick={handleConvert}
						className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2"
					>
						Convert
					</button>
					<button
						onClick={handleReverseUnits}
						className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
					>
						Reverse
					</button>
				</div>
			</div>
			<div id="outputValue" className="bg-gray-800 text-green-300 p-2 mr-2 rounded-md">
			Value : 
				{outputValue}
			</div>
		</div>
	)
}

export default App
