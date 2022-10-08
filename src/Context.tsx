import React, { useState, createContext, useContext, useEffect } from "react";
import { useLocalStorage } from '@mantine/hooks';
import {ContextInterface} from "./Interfaces";

interface Props {
    children: JSX.Element
}

export const useContextHelper = () => {
    return useContext(Context);
}

const Context = createContext<ContextInterface | null>(null);

const ContextProvider: React.FC<Props> = ({ children }) => {

    const [Cash, setCash] = useLocalStorage({ key: 'black_jack_cash', defaultValue: 500 });

    const [Bet, setBet] = useState<boolean | number>(false);

    const setBetFunction = (Value:number | boolean, halfBet:boolean = false) =>{
        setBet(Value);
        setCash((prev) =>{
            return halfBet? prev-Number(Value)/2: prev-Number(Value);
        })
    }

    return (
        <Context.Provider value={{
            Cash:Cash,
            setCash:setCash,
            Bet:Bet,
            setBet:setBetFunction
        }}>
                {children}
        </Context.Provider >
    );

}

export default ContextProvider;