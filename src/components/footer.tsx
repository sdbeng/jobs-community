//write a fotter component that will display the footer of the page. It has the copyrigth information and the social media links

const Footer = () => {
    return (
        <footer className="bg-[#f4f2eb] border-t border-gray-300">
            <div className="container mx-auto py-4">
                <div className="flex justify-between items-center">
                    <div>
                        <p>&copy; 2024 Jobs Community</p>
                    </div>
                    <div>
                        <a href="https://x.com/sergb_appdev" target="_blank" rel="noreferrer">
                            <span className="sr-only">X</span>
                            <svg
                                className="h-6 w-6 fill-current text-blue-500 hover:text-blue-700"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                            >
                                <path d="M23.954 4.569c-.885.389-1.839.653-2.834.773 1.018-.611 1.8-1.574 2.165-2.723-.951.564-2.005.974-3.128 1.2-.896-.958-2.174-1.56-3.59-1.56-2.722 0-4.93 2.209-4.93 4.93 0 .386.044.76.129 1.118-4.097-.206-7.728-2.164-10.16-5.14-.424.723-.666 1.562-.666 2.464 0 1.704.867 3.208 2.184 4.08-.805-.025-1.56-.247-2.217-.616v.06c0 2.385 1.693 4.374 3.946 4.827-.413.112-.849.171-1.296.171-.317 0-.625-.031-.927-.089.626 1.953 2.445 3.377 4.598 3.415-1.682 1.319-3.81 2.104-6.117 2.104-.398 0-.79-.023-1.175-.068 2.179 1.398 4.768 2.217 7.557 2.217 9.054 0 13.999-7.496 13.999-13.986 0-.212-.005-.424-.014-.633.962-.696 1.8-1.566 2.459-2.555z" />
                            </svg>
                        </a>
                        
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer