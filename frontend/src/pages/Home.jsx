import React from 'react'
import { Link } from 'react-router-dom'

const Home = ({ homeNavigate }) => {


    return (
        <div className='h-[89vh]'>
            <nav className="bg-white shadow p-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold font-sans text-sky-800 cursor-pointer" onClick={homeNavigate}>Article Feed</h1>
                <div className="space-x-4">
                    <Link to="/upload" className="text-white text-[16px] bg-sky-800 px-4 py-2 shadow rounded-lg hover:text-blue-100">
                        Upload
                    </Link>
                    <Link to="/feed" className="text-white text-[16px] bg-sky-800 px-4 py-2 shadow rounded-lg hover:text-blue-100">
                        Feed
                    </Link>
                </div>
            </nav>

            <div className='flex items-center justify-center h-full  w-full'>
                <div className='text-center p-10'>
                    <h1 className='text-5xl font-bold mb-4 text-sky-800'>Welcome to Article Feed</h1>
                    <p className='text-xl text-gray-600 mb-6'>Upload and explore articles seamlessly.</p>
                </div>
            </div>
        </div>
    )
}

export default Home