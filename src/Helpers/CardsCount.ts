import { CardInterface } from "../Interfaces"
import { ScoresObject } from "./";

export const cardsCount = (Data: CardInterface[]) => {

    if (!Data) return null;

    let Score: Number = Data.reduce((Total, obj) => {

        return (Number.isNaN(Number(obj.value)) ? Total + ScoresObject[obj.value]
                                                : Total + Number(obj.value));
    }, 0);

    return Score;
}

