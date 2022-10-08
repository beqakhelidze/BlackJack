import React, { useEffect, useState } from "react";
import { CardInterface } from "../Interfaces";
import { cardsCount } from "../Helpers";
import { ScoresObject } from "../Helpers";
import {
    Box,
    Avatar
} from "@mantine/core";

interface Props {
    Data: CardInterface[] | null,
    indicator: string,
    dillerTurn?: boolean,
}

const Cards: React.FC<Props> = ({ Data, indicator, dillerTurn }) => {

    if (!Data) {
        return null;
    }

    let Score: Number = cardsCount(Data);

    if (indicator == "diller" && !dillerTurn) {
        Score = Number(Score) - ScoresObject[Data[1].value] ? Number(ScoresObject[Data[1].value]) 
                                                            : Number(Data[1].value);
    }

    const imageController = (image: any, index: number) => {
        return ((index == 1 && indicator == "diller" && !dillerTurn) ? "../../assets/cardBack.png" : image);
    }

    return (
        <>
            <Box style={{ display: "flex", alignItems: "center", position: "relative" }} >
                {Data.map((item, index) => {
                    return (
                        <img key={index} src={imageController(item.image, index)} />
                    )
                })}
                <Avatar color="blue" size="md" radius="xl" ml={25} style={{
                    position: "absolute",
                    right: -10,
                    top: -10
                }}>
                    {Score as number}
                    
                </Avatar>
            </Box>
        </>
    )
}


export default Cards;