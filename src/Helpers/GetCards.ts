import axios from "axios";

export const getCards = async (value:number = 1) => {
    const { data } = await axios.get(
        `https://deckofcardsapi.com/api/deck/${localStorage.getItem("deck_id")}/draw/?count=${value}`
    ); 
    return data.cards;
}