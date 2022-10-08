import { useState } from "react";
import {
    Box,
    Drawer,
    Group,
    Button
} from "@mantine/core";
import ChooseBet from "./ChooseBet";
import Match from "./Match";
import { useContextHelper } from "../Context";



const Playground = () => {

    const Bet = useContextHelper().Bet;
    const [opened, setOpened] = useState(true);


    return (
        <Box>
            {Bet ? <Match /> : <ChooseBet />
            }
        </Box >
    )
}

export default Playground;