import clsx from 'clsx';
import CSS from 'csstype';
import React, {ForwardedRef, useCallback, useEffect, useRef, useState} from 'react';

import styles from './textarea.module.scss';

interface IProps {
    id?: string
    name?: string
    style?: CSS.Properties
    className?: string
    onChange?: (value: string) => void
    value?: string
    defaultValue?: string
    placeholder?: string
}

const AuthHeightTextarea = ({
    className,
    style,
    id,
    name,
    onChange,
    value,
    defaultValue,
    placeholder,
}: IProps, ref?: ForwardedRef<HTMLTextAreaElement>) => {
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
    }, [value]);


    /**
     * OnChange
     */
    const handleOnChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
        if(onChange){
            onChange(e.target.value);
        }
    }, [onChange]);


    return <div
        className={clsx(styles.root, className)}
        style={{visibility: isMount ? 'visible': 'hidden'}}
    >
        <textarea
            ref={mainRef}
            className={styles.mainTextarea}
            id={id}
            name={name}
            defaultValue={defaultValue}
            placeholder={placeholder}
            style={style}
            value={value}
            onChange={handleOnChange}
        />

        <textarea
            ref={fakeRef}
            className={styles.fakeTextarea}
            onChange={handleOnChange}
            value={value}
            disabled
        />
    </div>;
};

export default React.forwardRef(AuthHeightTextarea);




