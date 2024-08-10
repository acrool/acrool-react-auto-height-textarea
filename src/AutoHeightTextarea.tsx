import clsx from 'clsx';
import React, {ComponentProps, ForwardedRef, useEffect, useRef, useState} from 'react';

import styles from './textarea.module.scss';

interface IProps extends ComponentProps<'textarea'>{
}

const AuthHeightTextarea = (props: IProps, ref?: ForwardedRef<HTMLTextAreaElement>) => {
    const mainRef = useRef<HTMLTextAreaElement>(null);
    const fakeRef = useRef<HTMLTextAreaElement>(null);
    const [isMount, setMount] = useState<boolean>(false);


    useEffect(() => {
        setMount(true);
    }, []);

    useEffect(() => {
        if(ref){
            ref = mainRef;
        }

        if(mainRef.current && fakeRef.current){
            mainRef.current.style?.setProperty('--textarea-height', `${fakeRef.current.scrollHeight}px`);
        }
    }, [props.value]);




    return <div
        className={styles.root}
        style={{visibility: isMount ? 'visible': 'hidden'}}
    >
        <textarea
            ref={mainRef}
            className={clsx(styles.mainTextarea, props.className)}
            {...props}
        />

        <textarea
            ref={fakeRef}
            className={styles.fakeTextarea}
            value={props.value}
            readOnly
        />
    </div>;
};

export default React.forwardRef(AuthHeightTextarea);




