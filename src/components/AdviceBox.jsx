import { useEffect, useState } from 'react';
function AdviceBox() {
const [advice, setAdvice] = useState('');
const [loading, setLoading] = useState(true);
const [error, setError] = useState('');
const getAdvice = async () => {
try {
setLoading(true);
setError('');
const response = await fetch('https://api.adviceslip.com/advice');
if (!response.ok) {
throw new Error('Error al obtener el consejo.');
}
const data = await response.json();
setAdvice(data.slip.advice);
} catch (error) {
setError('No se pudo cargar el consejo desde la API.');
} finally {
setLoading(false);
}
};
useEffect(() => {
getAdvice();
}, []);
return (
<section className="card advice">
<h2>Consejo desde API</h2>
{loading && <p>Cargando consejo...</p>}
{error && <p className="error">{error}</p>}
{!loading && !error && <p>"{advice}"</p>}
<button onClick={getAdvice}>Obtener otro consejo</button>
</section>
);
}
export default AdviceBox;