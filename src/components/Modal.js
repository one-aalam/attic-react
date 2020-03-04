import React, { useRef, useState, useCallback, useEffect } from 'react';
import ReactDOM from 'react-dom';
import useEscKeyDown from '../hooks/useEscKeyDown';
import useOnOutsideClick from '../hooks/useOnOutsideClick';

const Modal = ({ isOpen: _IsOpen , onClose, title, render, link, aside, showCloseIcon = true, showCloseBtn = true }) => {
    const [stateIsOpen, setStateOpen] = useState(false);
    const isControlled = typeof _IsOpen === 'boolean';
    const isOpen = isControlled ? _IsOpen : stateIsOpen;

    const $modalRef = useRef();
    const $modalOverlayRef = useRef();

    const closeModal = useCallback(() => {
        if (!isControlled) {
            setStateOpen(false);
        } else {
            onClose();
        }
      }, [ isControlled, onClose ]);

    useOnOutsideClick($modalRef, closeModal, isOpen, $modalOverlayRef);
    useEscKeyDown(closeModal, isOpen);

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => document.body.style.overflow = 'visible';
    }, [ isOpen ]);

    return (
        <React.Fragment>
        {!isControlled && link({ open: () => setStateOpen(true) })}
        {isOpen &&
            ReactDOM.createPortal(<div
                 role="dialog" aria-labelledby="modal_label" aria-modal="true" aria-hidden={!isOpen}
                 className="modal transition-opacity duration-75 ease-in w-full h-full top-0 left-0 flex items-center justify-center z-50 fixed overflow-x-hidden overflow-y-auto">
                {/* Modal: Overlay */}
                <div ref={$modalOverlayRef} className="modal-overlay absolute w-full min-h-full bg-gray-900 opacity-50"></div>
                 {/* Modal: Container */}
                <div ref={$modalRef} className={
                    (aside ? 'min-h-screen align-middle absolute top-0 right-0 ' : 'rounded ') +
                    "modal-container bg-white w-11/12 md:max-w-md mx-auto shadow-lg z-50 overflow-y-auto"}>
                    {/* Modal: Container (Esc) */}
                    <div onClick={closeModal} className="modal-close absolute top-0 right-0 cursor-pointer flex flex-col items-center mt-4 mr-4 text-white text-sm z-50">
                        <svg className="fill-current text-white" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                            <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                        </svg>
                        <span className="text-sm">(Esc)</span>
                    </div>

                    {/* Modal: Content */}
                    <div className={
                        (aside ? 'min-h-screen ' : '') +
                        "modal-content py-4 text-left px-6 flex flex-col h-full"}>
                        {/* Modal: Content Title */}
                        <div className="flex flex-none justify-between items-center pb-3">
                            {title && <h3 className="text-2xl font-display font-bold" id="modal_label">{title}</h3>}
                            {showCloseIcon &&
                            <div onClick={closeModal} className="modal-close cursor-pointer z-50">
                                <svg className="fill-current text-black" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                                    <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                                </svg>
                            </div>}
                        </div>

                        {/* Modal: Content Body */}
                        <div className="flex-grow whitespace-pre-wrap text-lg">
                            { render({ close: closeModal }) }
                        </div>

                        {/* Modal: Content Footer */}
                        { showCloseBtn &&
                            <Modal.Footer close={closeModal} showClose={showCloseBtn} />
                        }
                    </div>
                </div>
            </div>,
            $root
            )}
    </React.Fragment>
)}

const Footer = ({ close, showClose = true, closeBtnLabel = 'dismiss', children }) => (
    <div className="flex flex-none justify-end pb-2 font-display">
        {showClose && <button onClick={close} className="px-4 bg-transparent p-3 rounded-lg text-indigo-500 hover:bg-gray-100 hover:text-indigo-400 mr-2">{closeBtnLabel}</button>}
        {children}
    </div>
)

Modal.Footer = Footer;

const $root = document.getElementById('root');

export default Modal;