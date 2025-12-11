import { useState, useEffect } from "react";
import { Typography, Box, Stack, Button } from "@mui/material";
import Navbar from "../../Components/Navbar/Navbar";
import InitialRender from "../../Components/InitialRender/InitialRender";
import { useOutletContext, } from "react-router-dom";
import { TextField, Input, OutlinedInput } from '@mui/material';
import ChatBar from "../../Components/ChatBar/ChatBar";
import data from "../../aiData/sampleData.json";
import ChatCard  from "../../Components/ChatCard/ChatCard";
import Sidebar from "../../Components/SIdebar";


export default function Home() {
    const { chat, setChat } = useOutletContext();
    const [chatId, setChatId] = useState(1);


    const generateResponse = (input) => {
        console.log("Generating response for:", input);
        // Logic to generate AI response based on user input
        let aiResponse = data.find(item => item.question.toLowerCase() === input.toLowerCase());
        let answer = aiResponse ? aiResponse.response : "Sorry, Did not understand your query!";

        setChat(prev => [...prev,
        {
            type: "human",
            id: chatId,
            text: input,
            time: new Date(),
        },
        {
            type: "ai",
            id: chatId + 1,
            text: answer,
            time: new Date(),
        }
        ])

        setChatId(chatId + 2);
    };

    // useEffect(() => {
    //     console.log("Chat updated:", chat);
    // }, [chat]);

    return (
        <>
            <Stack
                sx={{ height: "100%", background: "linear-gradient(180deg, rgba(215, 199, 244, 0.2) 0%, rgba(151, 133, 186, 0.2) 100%)", 
                    overflow: "hidden"
                }}
            >

                {chat.length === 0 && (<InitialRender generateResponse={generateResponse} />)}

                {chat.length > 0 && (
                    <Box sx={{ flexGrow: 1, overflowY: "scroll",scrollbarWidth: "none", p: 5, pb: 1, }}>
                        {chat.map(message => (
                            <ChatCard key={message.id} message={message} setChat={setChat} />
                        ))}
                    </Box>
                )}

                <ChatBar generateResponse={generateResponse} chat={chat} clearChat={() => setChat([])} />
            </Stack>
        </>
    )
}