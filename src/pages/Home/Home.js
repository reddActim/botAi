import {useState} from "react";
import { Typography, Box, Stack } from "@mui/material";
import Navbar from "../../Components/Navbar/Navbar";
import InitialRender from "../../Components/InitialRender/InitialRender";

export default function (){
    const [initialRender, setInitialRender] = useState(true);


    return(
        <>
        <Stack 
        sx={{height: "100vh", background: "linear-gradient(180deg, rgba(215, 199, 244, 0.2) 0%, rgba(151, 133, 186, 0.2) 100%)"}}
        >
            <Navbar />
            {initialRender && ( <InitialRender /> )}
        </Stack>
        </>
    )
}