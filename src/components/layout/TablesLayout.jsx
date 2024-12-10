import React from 'react'
import { Layout } from './layout/Layout'
import { Navigation } from './layout/Navigation'

export const TablesLayout = ({ children }) => {
    return (
        <Layout>
            <div className="flex flex-col w-full h-full justify-start items-center">
                <Navigation />
                <div className='bg-slate-500 flex flex-col w-full h-full'>
                    {children}
                </div>
            </div>
        </Layout>  
    )
}
