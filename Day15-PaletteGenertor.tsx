import { useState } from 'react';

function generateRandomColor() {
    let colorCode = '#';
    for (let i = 0; i < 3; i++) {
        let color = Math.floor(Math.random() * 256)
            .toString(16)
            .padStart(2, '0');
        colorCode += color; // Each iteration generates 2 hex digits, so 3 iterations to get 6 digits hex code
    }
    return colorCode;
}

export default function App() {
    const [currentPalette, setCurrentPalette] = useState(null);
    const [savedPalettes, setsavedPalettes] = useState([]);

    const handleGenerate = () => {
        const colors = [];
        for (let i = 0; i < 5; i++) {
            colors.push(generateRandomColor());
        }
        setCurrentPalette(colors);
    };

    const handleSave = () => {
        const palettes = [...savedPalettes];
        palettes.push(currentPalette);
        setsavedPalettes(palettes);
    };

    const handleDelete = (i) => {
        const palettes = savedPalettes.filter((_, its) => its !== i);
        setsavedPalettes(palettes);
    };

    return (
        <>
            <style>{`
                body {
                    background-color: black;
                }
                .color-block {
                    position: relative;
                }
                .color-text {
                    position: absolute;
                    bottom: 2px;
                    left: 2px;
                    right: 2px;
                    font-size: 0.6rem;
                    color: white;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                }
            `}</style>
            <div className="container mx-auto text-center mt-8">
                <h1 className="text-4xl font-bold text-green-300 mb-4">Palette Generator</h1>
                <div className="mb-4">
                    <button
                        id="generate"
                        className="btn-generate bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                        onClick={handleGenerate}
                    >
                        Generate
                    </button>
                    {currentPalette && (
                        <button
                            id="save"
                            className="btn-save bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                            onClick={handleSave}
                        >
                            Save
                        </button>
                    )}
                </div>
                <div className="flex justify-center flex-wrap">
                    {currentPalette &&
                        currentPalette.map((color, i) => (
                            <div
                                key={i}
                                className="color-block w-12 h-12 flex items-center justify-center text-white m-2"
                                style={{ backgroundColor: color }}
                            >
                                <div className="color-text">{color}</div>
                            </div>
                        ))}
                </div>
                <div className="mt-8">
                    {savedPalettes.length !== 0 && (
                        <div className="saved-palettes-container bg-gray-900 p-4 rounded">
                            <h2 className="text-xl font-bold text-white mb-4">Saved Palettes</h2>
                            {savedPalettes.map((palette, i) => (
                                <div key={i} className="saved-palette mb-4">
                                    <div className="flex justify-center flex-wrap">
                                        {palette.map((color, j) => (
                                            <div
                                                key={j}
                                                className="color-block w-12 h-12 flex items-center justify-center text-white m-1"
                                                style={{ backgroundColor: color }}
                                            >
                                                <div className="color-text">{color}</div>
                                            </div>
                                        ))}
                                    </div>
                                    <button
                                        className="btn-delete bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                                        onClick={(e) => handleDelete(i)}
                                    >
                                        Delete
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
