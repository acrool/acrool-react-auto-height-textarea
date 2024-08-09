import React, {ForwardedRef, useCallback, useMemo} from 'react';
import styled, {css} from 'styled-components';



export interface IProps {
    title?: string
    value?: string
    onChange: (value: string) => void
    onChangeCapture: () => void
    name?: string
    disabled?: boolean
    errorMessage?: string
    remarkMessage?: string
    placeholder?: string
    isSearchEnable?: boolean
    isAvatarEnable?: boolean
    isLink?: boolean
    ref?: any
}


/**
 * 下拉選單元件
 *
 * @param style
 * @param disabled 是否禁用
 * @param value
 * @param ref
 */
const Textarea = ({
    disabled = false,
    value,
    onChange,
    onChangeCapture,
    placeholder,
    isAvatarEnable = false,
    isLink = false,
}: IProps, ref?: ForwardedRef<HTMLTextAreaElement>) => {



    const handleOnChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
        onChange(e.target.value);
    }, []);



    return <TextareaRoot
        ref={ref}
        onInput={handleOnChange}
        onChangeCapture={onChangeCapture}
        disabled={disabled}
        value={value}
    />;
};


/**
 * Auto Height Textarea
 * @param args
 */
const Auto Height Textarea = <V extends null>(args: IProps) => {
    const {placeholder, value, onChange, isAvatarEnable, isSearchEnable} = args;




    return <div>

    </div>;
};

export default Auto Height Textarea;


const TextareaRoot = styled.textarea`
  //overflow: hidden;
  overflow-wrap: break-word;
  //border: none;
  background: rgba(0, 0, 0, 0);
  color: rgb(244, 244, 244);
  width: 100%;
  //padding: 9px 0 11px 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";

  //border: 0 !important;
  box-shadow: none !important;
  font-size: 14px;
  resize: none;
  border: 1px solid #646cff;
  background-color: #6b6c7a;
`;


const Text = styled.div<{
    isPlaceholderValue: boolean,
}>`
    ${props => props.isPlaceholderValue && css`
      color: #6c757d;
    `}
`;


const ArrowDownIcon = styled.div`
    flex: 0 0 auto;
    margin-left: 5px;
`;


const Select2Root = styled.button<{
    disabled?: boolean,
    isLink?: boolean,
    isFocus?: boolean,
}>`
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;

    //height: var(--form-height);
    height: 100%;

    width: 100%;

    font-size: 14px;
    color: var(--form-color);

    font-weight: 400;
    line-height: 21px;

    background: 0 0;
    background-clip: padding-box;

    border-radius: .25rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    margin-bottom: 0;
    border: 1px solid #444;
    padding: 1px 10px;


    ${props => props.isLink && css`
        height: auto;
        padding: 0;
        border: none;
    `}

    ${props => props.isFocus && css`
        box-shadow: 0 0 0 0.2rem rgb(0 123 255 / 25%);
    `}


    ${props => props.disabled && css`
        opacity: .7;
        pointer-events: none;
    `}
`;
