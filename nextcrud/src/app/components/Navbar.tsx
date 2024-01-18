import Link from "next/link"

export default function Navbar (){
    return (
        <>
            <nav className="bg-white border-gray-200 bg-violet-700	">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="https://z9v8z6k8.rocketcdn.me/wp-content/uploads/2022/01/logo-pc-dark-bg-notag-1.svg" className="h-8" alt="Flowbite Logo" />
                </a>
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                <ul className="font-medium flex flex-col p-4 md:p-0 mt-4  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 ">
                    <Link href='/'>
                        <li className="block py-2 px-3 text-white " aria-current="page">Add</li>
                    </Link>
                    <Link href='/show'>
                        <li className="block py-2 px-3 text-white " aria-current="page">All Note </li>
                    </Link>
                </ul>
                </div>
            </div>
            </nav>
        </>
    )
}