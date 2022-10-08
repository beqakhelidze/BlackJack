import { useState } from "react";
import { useContextHelper } from "../Context";
import {
    Avatar,
} from "@mantine/core";

interface Props {
    DoubleBet: () => void
}

const CashAvatar:React.FC<Props> = ({DoubleBet}) => {

    const Bet = useContextHelper().Bet;
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };

    return (
        <div style={{
            position: "relative"
        }}>
            <Avatar size={75} color="red" radius={50}>
                {Bet}
            </Avatar>
            <Avatar size={40} color="blue" radius={50}
                onClick = {DoubleBet}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{
                    position: "absolute",
                    right: "-15px",
                    top: "-15px",
                    cursor: "pointer",
                    transform: isHovering ? "scale(1.04)" : null,
                    boxShadow: isHovering ? " rgba(0, 0, 0, 0.16) 0px 1px 4px" : null,
                }}
            >
                2X
            </Avatar>
        </div>
    )
}

export default CashAvatar;