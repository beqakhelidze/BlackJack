export const Default = {
    end: false,
    Text: "",
}

export const checkScores = (playerScore: number,
    dillerScore: number,
    dillerIsPlaying: boolean,
    setCash: (val: number | ((prevState: number) => number)) => void,
    Bet: number | boolean
) => {

    const handleFunction = (indicator) => {
        setCash((prev) => {
            return indicator? prev + Number(Bet)*2: prev+Number(Bet);
        });
    }

    switch (true) {
        case (playerScore > 21):
            return {
                end: true,
                Text: "Diller is Winner!"
            }
        case (dillerScore > 21):
            handleFunction("player");
            return {
                end: true,
                Text: "You Win!"
            }
        case (dillerScore < 17):
            return {
                end: false,
                Text: "",
            }
        case (dillerScore < playerScore && dillerIsPlaying):
            handleFunction("player");
            return {
                end: true,
                Text: "You Win!"
            }
        case (dillerScore > playerScore && dillerIsPlaying):
            return {
                end: true,
                Text: "Diller is Winner!"
            }
        case (dillerScore === playerScore && dillerIsPlaying):
            handleFunction("diller");
            return {
                end: true,
                Text: "Push!"
            }
        default:
            return Default;
    }
}