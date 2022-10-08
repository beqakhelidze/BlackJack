import React from "react"
import { Group } from '@mantine/core';

interface Props{
    children:React.ReactNode
}

const SideButtons:React.FC<Props> = ({children}) =>{
    return (
        <Group style={{flexDirection:"column", margin:"20px"}}>
            {children}
        </Group>
    )
}

export default SideButtons;