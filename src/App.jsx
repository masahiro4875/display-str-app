import { useState } from 'react'

function App() {
    const [inputValue, setInputValue] = useState('')
    const [submittedValue, setSubmittedValue] = useState('')

    // event handler
    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmittedValue(inputValue);
    }

    const inputStyle = {
        padding: '10px',
        borderRadius: '4px',
        border: '1px solid #ccc',
        width: '100%',
        boxSizing: 'border-box'
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', padding: '40px', backgroundColor: '#f0f2f5', minHeight: '100vh' }}>
            <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', width: '100%', maxWidth: '500px' }}>
                <form onSubmit={handleSubmit}>
                    <h2 style={{ textAlign: 'center', color: '#333', marginBottom: '20px' }}>文字を入力してください</h2>

                    <input value={inputValue} onChange={handleChange} style={inputStyle}></input>
                    <div style={{ gridColumn: '1 / span 2', marginTop: '10px' }}>
                        <button type="submit" style={{ width: '100%', padding: '12px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}>
                            登録
                        </button>
                        <div>{submittedValue}</div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default App
