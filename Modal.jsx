export default function Modal({isModalOpen, setIsModalOpen, children}){
    if(!isModalOpen) return null ;
    return(
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-md">
                <button className="absolute top-4 right-4 text-gray-300 text-3xl" onClick={() => setIsModalOpen(false)}>
                    &times;
                </button>
                {children}
            </div>
        </div>
    )
}