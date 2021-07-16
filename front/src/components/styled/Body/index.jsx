import styled from "styled-components"
import React, {useEffect, useRef, useState} from "react"
import {ContextMessenger} from "./ContextMessenger"
import BodyContext from "./BodyContext";

const StyledBody = styled.div`
    width: 100%;
    height: calc(100vh - 80px);
    overflow: hidden;
    background: #586670;
    display: grid;
    grid-column-gap: 15px;
    grid-template-columns: 1fr 12fr 1fr;
    grid-template-areas: ". content .";
`
const StyledMessenger = styled.div`
    height: calc(100% - 65px);
    margin-top: 15px;
    margin-bottom: 50px;
    overflow: hidden;
    grid-area: content;
    display: grid;
    grid-template-columns: 9fr 3fr;
    background: #d7dfe7;
`

const Body = ({children}) => {
    const messengerRef = useRef()

    return (
        <StyledBody>
            <StyledMessenger ref={messengerRef}>
                <BodyContext parentRef={messengerRef}>
                    {children}
                </BodyContext>
            </StyledMessenger>
        </StyledBody>
    )
}

export default Body