import React, { useEffect, useState } from "react";
import { useContextHelper } from "../Context"
import { Coins } from "../Helpers";
import {
    Chips,
    Chip,
    Button,
    Box,
    Drawer,
    useMantineTheme
} from '@mantine/core';

const ChooseBet: React.FC = () => {

    const [value, setValue] = useState("5");
    const setBet = useContextHelper().setBet;
    const Cash = useContextHelper().Cash;
    const [Opened, setOpened] = useState(false);

    const handleClick = () => {
        setOpened(false);
        setTimeout(() => {
            setBet(Number(value));
        }, 500);
    }

    useEffect(() => {
        setOpened(true);
    }, [])


    return (
        <Drawer
            position="bottom"
            opened={Opened}
            onClose={() => { }}
            overlayOpacity={0.55}
            transition="slide-up"
            transitionDuration={500}
            transitionTimingFunction="ease"
            withCloseButton={false}
        >
            <Chips spacing="xl"
                size="lg"
                mb={60}
                mt={40}
                value={value}
                style={{
                    justifyContent: "center",
                }}
                onChange={(e: string) => setValue(e)}>
                {Coins.map((item, index) =>{
                     return item <= Cash ? <Chip key={index} value={item.toString()}>{item}₾</Chip>:null;
                })}
            </Chips>
            <div className="TextCenter">
                <Button size="lg"
                    variant="light"
                    onClick={handleClick}
                >Choose Bet
                </Button>
            </div>
        </Drawer>
    )
}

export default ChooseBet;