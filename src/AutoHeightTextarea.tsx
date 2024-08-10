import clsx from 'clsx';
import {AnimatePresence, motion, useMotionValue, Variant} from 'framer-motion';
import React, {ComponentProps, ForwardedRef, useEffect, useRef, useState} from 'react';

import styles from './textarea.module.scss';

interface IProps extends ComponentProps<'textarea'>{
    rows?: number
}

type TVariantKey = 'initial'|'show'|'exit'
export type TAnimationVariants = Record<TVariantKey, Variant>;



const AuthHeightTextarea = (props: IProps, ref?: ForwardedRef<HTMLTextAreaElement>) => {
    const mainRef = useRef<HTMLTextAreaElement>(null);
    const fakeRef = useRef<HTMLTextAreaElement>(null);
    const [isMount, setMount] = useState<boolean>(false);
    //
    // const x = useMotionValue(0);
    //
    // const animationVariants: TAnimationVariants = {
    //     initial: {transition: {type:'just', duration: '.3s'}},
    //     show: {height: `var(${x}}, auto)`, transition: {type:'keyframes', duration: '.1s'}},
    //     exit: {opacity: 0},
    // };


    useEffect(() => {
        setMount(true);
    }, []);

    useEffect(() => {
        if(ref){
            ref = mainRef;
        }

        if(mainRef.current && fakeRef.current){
            // x.set(fakeRef.current.scrollHeight);
            mainRef.current.style?.setProperty('--textarea-height', `${fakeRef.current.scrollHeight}px`);
        }
    }, [props.value]);




    return <div
        className={styles.root}
        // style={{visibility: isMount ? 'visible': 'hidden'}}
    >

        <textarea
            {...props as {}}
            ref={mainRef}
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




