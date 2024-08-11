import clsx from 'clsx';
import React, {ComponentProps, ForwardedRef, useEffect, useRef, useState} from 'react';

import styles from './textarea.module.scss';

interface IProps extends ComponentProps<'textarea'>{
    rows?: number
}

const AuthHeightTextarea = (props: IProps, ref?: ForwardedRef<HTMLTextAreaElement>) => {
    const mainRef = useRef<HTMLTextAreaElement|null>(null);
    const fakeRef = useRef<HTMLTextAreaElement>(null);


    // useEffect(() => {
    //     setMount(true);
    // }, []);

    useEffect(() => {
        if(mainRef.current && fakeRef.current){
            mainRef.current.style?.setProperty('--textarea-height', `${fakeRef.current.scrollHeight}px`);
        }
    }, [props.value]);




    return <div
        className={styles.root}
        // style={{visibility: isMount ? 'visible': 'hidden'}}
    >
        <textarea
            {...props}
            ref={node => {
                mainRef.current = node;
                if (typeof ref === 'function') {
                    ref(node);
                } else if (ref) {
                    ref.current = node;
                }
            }}
            className={clsx(styles.mainTextarea, props.className)}
            aria-multiline="false"
            aria-readonly="false"
            spellCheck="false"
        />

        <div aria-hidden={true}>
            <textarea
                ref={fakeRef}
                className={clsx(styles.fakeTextarea, props.className)}
                aria-multiline="false"
                aria-readonly="false"
                spellCheck="false"
                value={props.value}
                rows={props.rows}
                readOnly
            />    
        </div>
        
    </div>;
};

export default React.forwardRef(AuthHeightTextarea);




