import React, { useEffect } from 'react'
import { Layout } from '../layout/Layout'
import { Navigation } from '../layout/Navigation'
import useStore from '../../store/store';

export const CustomersTable = () => {
    const { fetchCustomers, customers } = useStore();

    useEffect(() => {
        // if (customers && customers.length) return;
        fetchCustomers();
        console.log(customers);
    }, [fetchCustomers])
    return (
        <Layout>
            <div className="flex flex-col w-full h-full justify-start items-center">
                <Navigation />
                <div className='bg-slate-700 flex flex-col w-full h-full p-4 text-white'>
                    Holis
                </div>
            </div>
        </Layout>  
    )
}
