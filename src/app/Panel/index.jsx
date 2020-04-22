import React, {useEffect} from 'react';
import Typed from 'typed.js';

import {getPanelMessage} from './helpers/get-panel-message';

import './styles.css';

export const Panel = () => {
    let ref = null;

    useEffect(() => {
        const typed = new Typed(ref, {
            strings: getPanelMessage(),
            typeSpeed: 20,
            backSpeed: 30,
            backDelay: 5000,
            loop: true
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div className='panel'>
            <span
                style={{ whiteSpace: 'pre' }}
                ref={(el) => ref = el}
            />
        </div>
    );
};
