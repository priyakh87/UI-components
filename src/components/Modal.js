import { useEffect } from "react";
import { createPortal } from "react-dom";
import { IoMdCloseCircle } from "react-icons/io";
function Modal({children,onClose,actionBar}){

    useEffect(()=>{
        document.body.classList.add('overflow-hidden');
        return ()=>{
            document.body.classList.remove('overflow-hidden')
        }
    },[])

//createPortal(children, domNode, key?) // syntax
    return createPortal(
    <div className="relative max-w-screen-md">
        <div onClick={onClose} className="fixed inset-0 bg-gray-300 opacity-80"></div>
        <div className="fixed inset-40 p-10 bg-white w-1/2 m-auto">
            <div className="flex justify-end"><IoMdCloseCircle onClick={onClose} className="text-lg cursor-pointer"/></div>
            <div className="flex flex-col h-full justify-between">
            {children}
            <div className="flex justify-end">{actionBar}</div>
            
            </div>
        </div>
    </div>,document.querySelector('.modal-container'))
}

export default Modal