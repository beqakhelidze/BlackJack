import React, { useEffect, useState } from "react";
import { CardInterface } from "../Interfaces";
import {
    defaultCondition,
    getCards,
    checkScores,
    checkIfDillerBlackJack,
    checkIfPlayerBlackJack
} from "../Helpers";
import SideButtons from "./SideButtons";
import CardsComponent from "./CardsComponent";
import Modal from "./Modal";
import Result from "./Result";
import { useContextHelper } from "../Context";
import { cardsCount } from "../Helpers";
import {
    Box,
    Button,
} from "@mantine/core";

const Match: React.FC = () => {

    const [playerCards, setPlayerCards] = useState<CardInterface[] | null>(null);
    const [dillerCards, setDillerCards] = useState<CardInterface[] | null>(null);
    const [dillerTurn, setDillerTurn] = useState<boolean>(false);
    const [interval, CustomSetInterval] = useState<ReturnType<typeof setInterval> | undefined>(undefined);
    const setCash = useContextHelper().setCash;
    const setBet = useContextHelper().setBet;
    const Bet = useContextHelper().Bet;
    const [isDillerBlackJack, setDillerBlackJack] = useState<{ ACE: boolean; TEN: boolean }>({
        ACE: false,
        TEN: false,
    });
    const [result, setResult] = useState<{ end: boolean, Text: string }>({
        end: false,
        Text: "",
    });

    const StartGame = async () => {
        const { playerCards, dillerCards } = await defaultCondition();
        await setPlayerCards(playerCards);
        await setDillerCards(dillerCards);
        setDillerBlackJack(checkIfDillerBlackJack(dillerCards));
        setResult(checkIfPlayerBlackJack(playerCards));
    }

    const CheckSituation = async () => {
        const playerScore = cardsCount(playerCards);
        const dillerScore = cardsCount(dillerCards);
        const Decision = checkScores(
            playerScore as number,
            dillerScore as number,
            dillerTurn,
            setCash,
            Bet
        );
        if (Decision.end) {
            clearInterval(interval);
            setResult(Decision);
            setTimeout(() => {
                setBet(false);
            }, 4050);
        }
    }

    useEffect(() => {
        StartGame();
    }, [])

    useEffect(() => {
        CheckSituation();
    }, [playerCards, dillerCards, dillerTurn]);

    if (!playerCards || !dillerCards) {
        return null;
    }

    const addCards = async (callback: React.Dispatch<React.SetStateAction<CardInterface[]>>) => {
        const newCards: CardInterface[] = await getCards(1);
        callback((prev) => {
            return [...prev, newCards[0]];
        })
    }

    const noMoreCards = () => {
        setDillerTurn(true);
        let dillerInterval = setInterval(() => {
            addCards(setDillerCards);
        }, 1000);
        CustomSetInterval(dillerInterval);
    };

    const insurance = () => {
        setResult({
            end: true,
            Text: isDillerBlackJack.TEN ? "Diller wins with Black Jack!" : "Diller has no Black Jack!"
        })
        setCash((prev) => {
            return prev - Number(Bet) / 2;
        })
        if (isDillerBlackJack.TEN) {
            setTimeout(() => {
                setBet(false);
            }, 4050);
        } else {
            setDillerBlackJack({
                ACE: false,
                TEN: false
            })
            setTimeout(() => {
                setResult({
                    end: false,
                    Text: "",
                });
            }, 4050);
        }
    }

    const DoubleBet = () => {
        setBet(Number(Bet) * 2, true);
        addCards(setPlayerCards);
        setTimeout(() => {
            noMoreCards();
        }, 1000)
    }

    return (
        <Box style={{
            display: "flex",
            height: "100vh",
            alignItems: "center",
        }}>
            {!dillerTurn &&
                <SideButtons>
                    {
                        isDillerBlackJack.ACE && <Button
                            size="lg"
                            onClick={insurance}
                        >
                            დაზღვევა
                        </Button>
                    }
                    {cardsCount(playerCards) != 21 && <Button
                        size="lg"
                        onClick={() => addCards(setPlayerCards)}
                    >
                        დამატება
                    </Button>}
                </SideButtons>
            }
            <CardsComponent
                playerCards={playerCards}
                dillerCards={dillerCards}
                dillerTurn={dillerTurn}
                DoubleBet={DoubleBet}
            />
            {!dillerTurn &&
                < SideButtons >
                    <Button
                        size="lg"
                        onClick={noMoreCards}
                    >
                        შეჩერება
                    </Button>
                </SideButtons>
            }

            <Modal open={result.end}>
                <Result innerText={result.Text} />
            </Modal>
        </Box >
    )
}

export default Match;

// 10 არის ყველა ნახატიანი.
// push.
