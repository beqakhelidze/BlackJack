import { CardInterface } from "../Interfaces";

export const checkIfDillerBlackJack = (Data: CardInterface[]) => {
    const ACE = Data[0].value == "ACE";
    const TEN = Data[1].value == "10";
    return {
        ACE,
        TEN
    }
}

export const checkIfPlayerBlackJack = (Data: CardInterface[]) => {

    const hasACE = Data.find((item) => item.value == "ACE");
    const hasTEN = Data.find((item) => item.value == "10");

    return {
        end: (hasACE != undefined && hasTEN != undefined),
        Text: "You Win with Black Jack!"
    }
}


