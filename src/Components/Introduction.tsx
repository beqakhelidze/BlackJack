import React from "react";
import { Button, Box } from "@mantine/core";

interface Props {
    StartGame: () => void
}

const Introduction: React.FC<Props> = ({ StartGame }) => {
    return (
        
            <Button
                onClick={StartGame}
                size="lg"
            >
                Start Game
            </Button>
    )
}

export default Introduction;