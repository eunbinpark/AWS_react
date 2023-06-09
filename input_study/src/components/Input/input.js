/** @jsxImportSource @emotion/react */
import { getValue } from "@testing-library/user-event/dist/utils";
import React from "react";
import * as S from "./style";

function Input({ value, type, placeholder, inputRef }) {
    return (
        <input 
            css={S.style}
            type={type} 
            placeholder={placeholder} 
            defaultValue={value}
            ref={inputRef}
        />
    );
}

export default Input;