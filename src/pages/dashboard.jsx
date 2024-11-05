import React, { useState, useEffect } from 'react';
import NewWorkSpace from '../components/newWorkSpace';

const Dashboard = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [isModalOpen, setModalOpen] = useState(false);

    // Load theme from local storage or set default
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.documentElement.classList.add('dark');
            setDarkMode(true);
        }
    }, []);

    // Toggle dark mode and save to local storage
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.documentElement.classList.toggle('dark'); // Toggle the 'dark' class on html element
        localStorage.setItem('theme', darkMode ? 'light' : 'dark'); // Update theme in local storage
    };

    return (
        <>
            <div className="flex min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100">
                {/* Sidebar with Workspaces */}
                <aside className="bg-gray-100 dark:bg-gray-800 shadow-md w-44 p-4 flex flex-col">
                    <div className="flex-grow">
                        <h2 className="text-xl font-bold text-green-500 mb-4">Ghaznix Form</h2>

                        {/* Navigation Links */}
                        <h3 className="text-md font-semibold text-gray-700 dark:text-gray-300 mb-2">Navigation</h3>
                        <nav className="space-y-2 mb-4">
                            <a href="#" className="block py-2 px-3 text-gray-700 dark:text-gray-300 text-sm hover:bg-gray-200 dark:hover:bg-gray-700 rounded">Home</a>
                            <a href="#" className="block py-2 px-3 text-gray-700 dark:text-gray-300 text-sm hover:bg-gray-200 dark:hover:bg-gray-700 rounded">Analytics</a>
                            <a href="#" className="block py-2 px-3 text-gray-700 dark:text-gray-300 text-sm hover:bg-gray-200 dark:hover:bg-gray-700 rounded">Settings</a>
                        </nav>

                        {/* Workspace Section */}
                        <h3 className="text-md font-semibold text-gray-700 dark:text-gray-300 mb-2">Workspaces</h3>
                        <nav className="space-y-2">
                            <button className="block w-full text-left py-2 px-3 text-gray-700 dark:text-gray-300 text-sm hover:bg-gray-200 dark:hover:bg-gray-700 rounded">Workspace 1</button>
                            <button className="block w-full text-left py-2 px-3 text-gray-700 dark:text-gray-300 text-sm hover:bg-gray-200 dark:hover:bg-gray-700 rounded">Workspace 2</button>
                            <button className="block w-full text-left py-2 px-3 text-gray-700 dark:text-gray-300 text-sm hover:bg-gray-200 dark:hover:bg-gray-700 rounded">Workspace 3</button>
                            <button onClick={() => setModalOpen(true)} className="block w-full text-left py-2 px-3 text-green-500 dark:text-green-500 text-sm hover:bg-gray-200 dark:hover:bg-gray-700 rounded font-semibold">+ Add Workspace</button>
                        </nav>
                    </div>

                    {/* Dark Mode Toggle Icon at the Bottom */}
                    <button
                        onClick={toggleDarkMode}
                        className="flex items-center justify-center p-2 rounded-full transition duration-300 ease-in-out hover:bg-gray-300 dark:hover:bg-gray-700"
                    >
                        {darkMode ? (
                            // Dark Mode Icon
                            <>
                                <svg width="24px" height="24px" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="100" cy="100" r="94.147" fill="#e4e2dc"></circle> <clipPath id="a"> <circle cx="100" cy="100" r="94.147"></circle> </clipPath> <g clip-path="url(#a)"> <path d="M173.111-46.282l59.723 39.66 25.005 67.189-19.264 69.056-56.174 44.544-71.628 3.018-59.723-39.66-25.005-67.189L45.308 1.28l56.174-44.544 71.629-3.018z" fill="#f6f4ef"></path> </g> <path d="M158.551 135.006l-4.072 2.503 6.822 5.83 1.8-4.404-4.55-3.929zM116.907 69.037l-6.653 4.089 11.145 9.525 2.941-7.195-7.433-6.419zM67.138 119.523l-4.542 2.791 7.61 6.503 2.007-4.912-5.075-4.382zM80.286 37.068l4.825-3.028-8.193-6.873-2.097 5.268 5.465 4.633zM143.466 148.273l5.198-3.261-8.826-7.403-2.259 5.674 5.887 4.99z" fill="#e4e2dc" fill-rule="nonzero"></path> <path d="M163.108 73.155l2.628 13.525-12.051 6.679-10.076-9.398 5.824-12.486 13.675 1.68zM83.672 53.684l-7.194 20.408-21.332-.919-5.99-20.976 17.63-12.045 16.886 13.532zM91.359 125.589l-5.626-25.934 22.927-13.364 19.794 17.674-10.692 24.288-26.403-2.664zM35.02 112.946l-3.955-14.875 12.902-8.012 11.929 9.923-5.53 14.145-15.346-1.181zM104.602 180.886l-15.004-13.214 8.155-17.962 20.044 2.111 4.233 19.268-17.428 9.797z" fill="#e4e2dc"></path> </g></svg>
                                <span className='ps-2'>Dark</span>
                            </>
                        ) : (
                            // Light Mode Icon
                            <>
                                <svg width="24px" height="24px" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--twemoji" preserveAspectRatio="xMidYMid meet" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#FFAC33" d="M16 2s0-2 2-2s2 2 2 2v2s0 2-2 2s-2-2-2-2V2zm18 14s2 0 2 2s-2 2-2 2h-2s-2 0-2-2s2-2 2-2h2zM4 16s2 0 2 2s-2 2-2 2H2s-2 0-2-2s2-2 2-2h2zm5.121-8.707s1.414 1.414 0 2.828s-2.828 0-2.828 0L4.878 8.708s-1.414-1.414 0-2.829c1.415-1.414 2.829 0 2.829 0l1.414 1.414zm21 21s1.414 1.414 0 2.828s-2.828 0-2.828 0l-1.414-1.414s-1.414-1.414 0-2.828s2.828 0 2.828 0l1.414 1.414zm-.413-18.172s-1.414 1.414-2.828 0s0-2.828 0-2.828l1.414-1.414s1.414-1.414 2.828 0s0 2.828 0 2.828l-1.414 1.414zm-21 21s-1.414 1.414-2.828 0s0-2.828 0-2.828l1.414-1.414s1.414-1.414 2.828 0s0 2.828 0 2.828l-1.414 1.414zM16 32s0-2 2-2s2 2 2 2v2s0 2-2 2s-2-2-2-2v-2z"></path><circle fill="#FFAC33" cx="18" cy="18" r="10"></circle></g></svg>
                                <span className='ps-2'>Light</span>
                            </>
                        )}
                    </button>
                </aside>

                {/* Main Content Area */}
                <main className="flex-grow overflow-y-auto p-4" style={{ height: '100vh', overflowY: 'scroll' }}>
                    {/* Header */}
                    <header className="flex justify-between items-center">
                        <div>
                            <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">Workspace 1</h1>
                            <p className="text-gray-600 dark:text-gray-400 text-sm pb-2">Manage forms and view analytics for Workspace 1</p>
                        </div>
                        <button className="bg-green-500 text-gray-100 text-sm px-3 py-1.5 rounded shadow hover:bg-green-600">+ New Form</button>
                    </header>

                    {/* Analytics Section */}
                    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pb-2">
                        {/* Analytics Card 1 */}
                        <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded shadow-md">
                            <h3 className="text-md font-semibold text-gray-700 dark:text-gray-300">Total Forms</h3>
                            <p className="text-2xl font-bold mt-1 text-gray-900 dark:text-gray-100">8</p>
                        </div>
                        {/* Analytics Card 2 */}
                        <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded shadow-md">
                            <h3 className="text-md font-semibold text-gray-700 dark:text-gray-300">Total Responses</h3>
                            <p className="text-2xl font-bold mt-1 text-gray-900 dark:text-gray-100">528</p>
                        </div>
                        {/* Analytics Card 3 */}
                        <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded shadow-md">
                            <h3 className="text-md font-semibold text-gray-700 dark:text-gray-300">Conversion Rate</h3>
                            <p className="text-2xl font-bold mt-1 text-gray-900 dark:text-gray-100">67%</p>
                        </div>
                    </section>

                    {/* Forms List for Selected Workspace */}
                    <section>
                        <h2 className="text-lg font-semibold mb-2 text-gray-700 dark:text-gray-300">Forms in Workspace 1</h2>
                        <div className="bg-gray-100 dark:bg-gray-800 shadow-md rounded">
                            <table className="w-full table-auto text-sm">
                                <thead >
                                    <tr className="bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-left">
                                        <th className="py-2 px-3">Form Title</th>
                                        <th className="py-2 px-3">Responses</th>
                                        <th className="py-2 px-3">Created</th>
                                        <th className="py-2 px-3">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-t border-gray-300 dark:border-gray-600">
                                        <td className="py-2 px-3 text-gray-700 dark:text-gray-100">Customer Feedback</td>
                                        <td className="py-2 px-3 text-gray-700 dark:text-gray-100">45</td>
                                        <td className="py-2 px-3 text-gray-700 dark:text-gray-100">2023-09-15</td>
                                        <td className="py-2 px-3">
                                            <span className="bg-green-100 dark:bg-green-700 text-green-600 dark:text-green-400 px-2 py-0.5 rounded-full text-xs">Active</span>
                                        </td>
                                    </tr>
                                    <tr className="border-t border-gray-300 dark:border-gray-600">
                                        <td className="py-2 px-3 text-gray-700 dark:text-gray-100">User Satisfaction Survey</td>
                                        <td className="py-2 px-3 text-gray-700 dark:text-gray-100">112</td>
                                        <td className="py-2 px-3 text-gray-700 dark:text-gray-100">2023-09-10</td>
                                        <td className="py-2 px-3">
                                            <span className="bg-green-100 dark:bg-green-700 text-green-600 dark:text-green-400 px-2 py-0.5 rounded-full text-xs">Active</span>
                                        </td>
                                    </tr>
                                    <tr className="border-t border-gray-300 dark:border-gray-600">
                                        <td className="py-2 px-3 text-gray-700 dark:text-gray-100">Product Feedback</td>
                                        <td className="py-2 px-3 text-gray-700 dark:text-gray-100">67</td>
                                        <td className="py-2 px-3 text-gray-700 dark:text-gray-100">2023-08-22</td>
                                        <td className="py-2 px-3">
                                            <span className="bg-red-100 dark:bg-red-700 text-red-600 dark:text-red-300 px-2 py-0.5 rounded-full text-xs">Inactive</span>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </section>
                </main>
            </div>

            <NewWorkSpace isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
        </>
    );
};

export default Dashboard;
