import React, { useState } from 'react';
import axios from 'axios';
import { CircularProgress } from '@mui/material';
import { Save as SaveIcon } from '@mui/icons-material';

const UploadCSV = () => {
    // Estados para manejar el archivo, carga, respuesta de la API, errores y mensajes
    const apiUrl = process.env.REACT_APP_API_URL;
    const [file, setFile] = useState(null);
    const [fileLoading, setFileLoading] = useState(false);
    const [respuestaApi, setRespuestaApi] = useState(null);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    // Maneja el cambio de archivo y simula un retraso en la carga
    const handleFileChange = (e) => {
        setFileLoading(true);
        const selectedFile = e.target.files[0];
        setTimeout(() => {
            setFile(selectedFile);
            setFileLoading(false);
        }, 2000);
    };

    // Maneja el envío del formulario y realiza la solicitud a la API
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!file) return; // Verifica que haya un archivo seleccionado

        setLoading(true);
        setError(false);
        setMessage('');
        
        const formData = new FormData();
        formData.append('file', file); // Agrega el archivo al FormData

        try {
            // Realiza la solicitud POST a la API
            const response = await axios.post(`${apiUrl}/import`, formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
                timeout: 120000,
            });

            // Actualiza el estado con la respuesta de la API
            setRespuestaApi(response.data.dataAnalyzed);
            setMessage(response.data.message);
        } catch (error) {
            // Maneja errores y actualiza el estado correspondiente
            setError(true);
            setMessage(error.response ? `Error: ${error.response.data.message}` : 'Error al conectar con la API');
        } finally {
            setLoading(false); // Desactiva el estado de carga al finalizar
        }
    };

    return (
        <div className="flex items-center justify-center h-screen w-screen bg-gray-800">
            <div className="bg-white p-8 rounded-lg shadow-lg w-1/3 h-1/3">
                <h1 className="text-3xl font-bold mb-4 text-center text-gray-700">Subir CSV</h1>
                <form onSubmit={handleSubmit} className="flex flex-col">
                    <input
                        type="file"
                        accept=".csv" // Acepta solo archivos CSV
                        onChange={handleFileChange} // Llama a la función al cambiar el archivo
                        required
                        className="mb-4 border border-gray-300 rounded p-2 text-center"
                    />
                    {fileLoading && <CircularProgress size={96} color='inherit' className="mb-4 absolute top-[45%] left-[47.5%] z-50" />}
                    <button
                        type="submit"
                        className={`flex items-center justify-center bg-blue-500 text-white font-semibold py-2 rounded transition duration-200 
                            ${loading || !file ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'}`}
                        disabled={loading || !file} // Deshabilita el botón si está cargando o no hay archivo
                    >
                        {loading ? (
                            <CircularProgress size={24} color="inherit" />
                        ) : (
                            <>
                                <SaveIcon className="mr-2" />
                                Subir
                            </>
                        )}
                    </button>
                </form>
                {message && (
                    <p className={`mt-4 text-center ${error ? 'text-red-500' : 'text-green-700 font-bold'}`}>
                        {message}
                        {/* // Muestra el mensaje de éxito o error */}
                    </p>
                )}
                {respuestaApi && (
                    <ul className='w-5/6'>
                        <li><b>Entradas analizadas correctamente: </b>{respuestaApi.ok}</li>
                        <li><b>Entradas analizadas con errores: </b>{respuestaApi.notOk}</li>
                    </ul>
                )}
            </div>
        </div>
    );
};

export default UploadCSV;