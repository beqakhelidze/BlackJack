import axios from "axios";
import { getCards } from "./";

export const defaultCondition = async () => {
    await axios.get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1").then(({ data }) => {
        localStorage.setItem("deck_id", data.deck_id);
    })

    const Cards = await getCards(4);

    return {
        playerCards: [Cards[0], Cards[1]],
        dillerCards: [Cards[2], Cards[3]],
    }
}
