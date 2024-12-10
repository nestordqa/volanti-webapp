import React, { useEffect, useState } from 'react'
import { Layout } from '../layout/Layout'
import { Navigation } from '../layout/Navigation'
import useStore from '../../store/store';
import { showQuestion } from '../../utils/alerts';
import { FaEdit, FaTrash } from 'react-icons/fa';

export const VehiclesTable = () => {
    // Estado para gestionar la página actual de la tabla
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 20; // Número de elementos a mostrar por página
    const { fetchVehicles, vehicles, deleteVehicle } = useStore(); // Desestructuración de métodos y estado del store

    // Calcular los índices de los elementos a mostrar según la página actual
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = vehicles?.slice(indexOfFirstItem, indexOfLastItem) ?? null; 

    // Función para cambiar la página actual
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // Función para eliminar un registro de vehiculo
    const deleteRecord = (id) => {
        showQuestion(
            '¡Atención!',
            'Estás por eliminar este registro, ¿Deseas continuar?'
        )
        .then(async (alert) => {
            if (alert.isConfirmed) {
                await deleteVehicle(id); // Llamar a deleteVehicle si se confirma
                return;
            } else {
                return; // No hacer nada si se cancela
            }
        });
    };

    // Función para actualizar un registro de vehiculo (actualmente solo imprime en consola)
    const updateRecord = (id) => {
        console.log(`TODO: Funcionalidad para actualizar registro: ${id}`);
    };

    // Obtener citas cuando el componente se monta o cuando cambian los vehiculos
    useEffect(() => {
        if (vehicles && vehicles.length) return; // Si ya se han obtenido los vehiculos, no hacer nada
        fetchVehicles();
    }, [vehicles, fetchVehicles]);
    return (
        <Layout>
            <div className="flex flex-col w-full h-full justify-start items-center">
                <Navigation />
                {
                    currentItems && currentItems.length > 0 && // Verificar si hay elementos actuales para mostrar
                    <div className="w-full h-full overflow-x-hidden p-4 flex justify-start items-center flex-col">
                        <h2 className='text-3xl mb-4 text-gray-300 font-bold'>Vehicles</h2>
                        <table className="min-w-full bg-transparent border border-gray-600">
                            <thead>
                                <tr className="bg-gray-900 text-gray-200 uppercase text-sm leading-normal">
                                    <th className="py-3 px-6 text-left">Brand</th>
                                    <th className="py-3 px-6 text-left">Model</th>
                                    <th className="py-3 px-6 text-left">Plate</th>
                                    <th className="py-3 px-6 text-left">Client</th>
                                    <th className="py-3 px-6 text-left">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-300 text-sm font-light">
                                {currentItems.map((item, index) => ( // Mapear los elementos actuales para mostrarlos
                                    <tr key={index} className="border-b border-gray-200 hover:bg-gray-700">
                                        <td className="py-3 px-6">{item.brand}</td>
                                        <td className="py-3 px-6">{item.model}</td>
                                        <td className="py-3 px-6">{item.plate}</td>
                                        <td className="py-3 px-6">
                                            {item.customer.name}
                                        </td>
                                        <td className="py-3 px-6 flex space-x-8 ">
                                            <button className="text-red-500 hover:text-red-700" onClick={() => deleteRecord(item.id)}>
                                                <FaTrash /> {/* Icono para la acción de eliminar */}
                                            </button>
                                            <button className="text-blue-500 hover:text-blue-700" onClick={() => updateRecord(item.id)}>
                                                <FaEdit /> {/* Icono para la acción de editar */}
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className="flex justify-center mt-4">
                            {Array.from({ length: Math.ceil(vehicles.length / itemsPerPage) }, (_, index) => ( // Crear botones de paginación
                                <button
                                    key={index}
                                    onClick={() => paginate(index + 1)} // Cambiar de página al hacer clic en el botón
                                    className={`mx-1 px-3 py-1 rounded ${currentPage === index + 1 ? 'bg-blue-800 text-white' : 'bg-gray-900 text-gray-300'}`}
                                >
                                    {index + 1} {/* Mostrar número de página */}
                                </button>
                            ))}
                        </div>
                    </div>
                }
                {
                    !currentItems.length && <div className='w-full h-full flex justify-center items-center text-6xl text-gray-300'>´There are not vehicles yet!</div> // Mensaje cuando no hay registros
                }
            </div>
        </Layout>  
    )
}
