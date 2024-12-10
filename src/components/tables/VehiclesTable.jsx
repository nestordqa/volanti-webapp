import React from 'react'
import { Layout } from '../layout/Layout'
import { Navigation } from '../layout/Navigation'

export const VehiclesTable = () => {
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
