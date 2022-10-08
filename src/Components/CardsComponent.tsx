import React from "react";
import { CardInterface } from "../Interfaces";
import Cards from "./Cards";
import {
    Box,
    Avatar
} from "@mantine/core";
import CashAvatar from "./CashAvatar";

interface Props {
    playerCards: CardInterface[] | null,
    dillerCards: CardInterface[] | null,
    dillerTurn: boolean,
    DoubleBet: () => void
}

const CardsComponent: React.FC<Props> = ({ playerCards, dillerCards, dillerTurn, DoubleBet}) => {
    return (
        <Box style={{
            display: "grid",
            height: "100vh",
            placeItems: "center",
        }}>
            <Cards Data={dillerCards} indicator={"diller"} dillerTurn={dillerTurn} />
            <CashAvatar DoubleBet = {DoubleBet} />
            <Cards Data={playerCards} indicator={"player"} />
        </Box>
    )
}

export default CardsComponent;