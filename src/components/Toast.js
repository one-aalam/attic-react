import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import pubsub from 'pubsub-js';
import uniqueId from  'lodash.uniqueid';


const Toast = () => {
    const [toasts, setToasts] = useState([]);

    useEffect(() => {
        const addToast = ({ type = 'success', title, message, duration = 5 }) => {
            const id = uniqueId('toast-');
            setToasts(prevToasts => [ ...prevToasts, { id, type, title, message }])
            if (duration) {
                setTimeout(() => removeToast(id), duration * 1000);
            }
        };
        pubsub.subscribe('toast', addToast)
        return () => {
            pubsub.unsubscribe('toast');
        };
    }, [])

    const removeToast = id => setToasts(currToasts => currToasts.filter(
        toast => toast.id !== id
    ));

    return (
        <div className="z-50 fixed" style={{ right: 30, top: 50 }}>
            <TransitionGroup>
                {
                    toasts.map(toast => (
                        <CSSTransition key={toast.id} classNames="attic-toast" timeout={200}>
                            <div className="w-64 h-20 mb-4 p-3 rounded shadow-sm bg-indigo-600 text-white" key={toast.id} type={toast.type} onClick={() => removeToast(toast.id)}>
                                <button>close</button>
                                {toast.title && <span>{toast.title}</span>}
                                {toast.message && <span>{toast.message}</span>}
                            </div>
                        </CSSTransition>
                    ))
                }
            </TransitionGroup>
        </div>
    );
}

export default Toast;