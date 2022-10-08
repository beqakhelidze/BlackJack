import React, { useState } from "react"
import Loader from "./Loader";
import {
    Text,
    Progress,
    Button
} from "@mantine/core";

interface Props {
    innerText: String,
}

const Result: React.FC<Props> = ({ innerText }) => {

    const [Value, setValue] = useState(0);

    return (
        <div>
            <Text className="Title"
                color="blue"
                transform="uppercase"
            >
                {innerText}
            </Text>
            <Loader/>
        </div>
    )
}

export default Result;