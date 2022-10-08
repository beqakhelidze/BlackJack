
export interface ContextInterface {
    Cash:number,
    setCash: (val: number | ((prevState: number) => number)) => void,
    Bet:number | boolean
    setBet: (Value: number | boolean, halfBet?: boolean) => void
}
 