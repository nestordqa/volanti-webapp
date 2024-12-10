import React, { useEffect, useState } from 'react'
import { Layout } from '../layout/Layout'
import { Navigation } from '../layout/Navigation'
import useStore from '../../store/store';
import { FaEdit, FaTrash } from 'react-icons/fa';

export const CustomersTable = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 20;
    const { fetchCustomers, customers } = useStore();

    // Calcular los índices de los elementos a mostrar
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = customers?.slice(indexOfFirstItem, indexOfLastItem) ?? null; 

    // Cambiar de página
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    useEffect(() => {
        if (customers && customers.length) return;
        fetchCustomers();
    }, [fetchCustomers])
    return (
        <Layout>
            <div className="flex flex-col w-full h-full justify-start items-center">
                <Navigation />
                {
                    currentItems && currentItems.length &&
                    <div className="w-full h-full overflow-x-hidden p-4 flex justify-start items-center flex-col">
                        <h2 className='text-3xl mb-4 text-gray-300 font-bold'>Customers</h2>
                        <table className="min-w-full bg-transparent border border-gray-600">
                            <thead>
                                <tr className="bg-gray-900 text-gray-200 uppercase text-sm leading-normal">
                                    <th className="py-3 px-6 text-left">Alias</th>
                                    <th className="py-3 px-6 text-left">Es Empresa</th>
                                    <th className="py-3 px-6 text-left">Nombre</th>
                                    <th className="py-3 px-6 text-left">Teléfonos</th>
                                    <th className="py-3 px-6 text-left">Acciones</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-300 text-sm font-light">
                                {currentItems && currentItems.length && currentItems.map((item, index) => (
                                    <tr key={index} className="border-b border-gray-200 hover:bg-gray-700">
                                        <td className="py-3 px-6">{item.alias}</td>
                                        <td className="py-3 px-6">{item.is_company ? 'Sí' : 'No'}</td>
                                        <td className="py-3 px-6">{item.name}</td>
                                        <td className="py-3 px-6">
                                            {item.phones.map((phone, idx) => (
                                            <div key={idx}>{`${phone.country_code} ${phone.number}`}</div>
                                            ))}
                                        </td>
                                        <td className="py-3 px-6 flex space-x-8 ">
                                            <button className="text-red-500 hover:text-red-700">
                                                <FaTrash />
                                            </button>
                                            <button className="text-blue-500 hover:text-blue-700">
                                                <FaEdit />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className="flex justify-center mt-4">
                            {Array.from({ length: Math.ceil(customers.length / itemsPerPage) }, (_, index) => (
                                <button
                                    key={index}
                                    onClick={() => paginate(index + 1)}
                                    className={`mx-1 px-3 py-1 rounded ${currentPage === index + 1 ? 'bg-blue-800 text-white' : 'bg-gray-900 text-gray-300'}`}
                                >
                                    {index + 1}
                                </button>
                            ))}
                        </div>
                    </div>
                }
                {
                    !currentItems.length && <div className='w-full h-full flex justify-center items-center text-6xl'>No existen registros aún</div>
                }
            </div>
        </Layout>  
    )
}
