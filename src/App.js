import { useState } from 'react';
import './App.css';

function App() {
    const [result, setResult] = useState("");

    async function fetchInfo() {
        const url = `${process.env.REACT_APP_API_URL}/test`;
        const response = await fetch(url);
        const data = await response.json();
        setResult(data);
    }

    return (
        <div className='main'>
            <button onClick={fetchInfo}>Click</button>
            <h1>Result: {result}</h1>
        </div>
    );
}
export default App;