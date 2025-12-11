    import { Box, Button, OutlinedInput, Stack, Typography, Snackbar } from "@mui/material";
    import { useState } from "react";
    import { Link } from "react-router-dom";
    import { format } from 'date-fns';

    export default function ChatBar({ generateResponse, setScroll, chat, clearChat }) {
        const [input, setInput] = useState("");
        const [showSnackbar, setShowSnackbar] = useState(false);
        const [response, setResponse] = useState("");

        const handleSubmit = (event) => {
            event.preventDefault();
            generateResponse(input);
            setResponse("Soul AI"); 
            setInput("");
        }

        const handleSave = (event) => {
            event.preventDefault();
            let chatHistory = JSON.parse(localStorage.getItem("chatHistory")) || [];
            chatHistory.push({ id: Date.now(), date: format(new Date(), "PPpp"), messages: chat });
            console.log("Saving chat to history:", chatHistory);
            localStorage.setItem("chatHistory", JSON.stringify(chatHistory));
            clearChat();
            setShowSnackbar(true);
        }

        return (
            <Box component="form" onSubmit={(e) => handleSubmit(e)}>
                <Stack direction="row" spacing={3} sx={{ padding: 2, overflowY: "auto", flexGrow: 1 }}>
                    <OutlinedInput fullWidth required placeholder="Message Bot AI..." value={input} onChange={(e) => setInput(e.target.value)} />
                    <Button type="submit"> <Typography variant="button">Ask</Typography></Button>
                    <Button type="button" onClick={(e) => handleSave(e)}> <Typography variant="button">Save</Typography></Button>
                </Stack>

                <Snackbar
                    open={showSnackbar}
                    sx={{ width: "45%", p: "1.5rem" }}
                    message={'Chat saved.'}
                    onClose={() => setShowSnackbar(false)}
                    autoHideDuration={5000}
                    action={
                        <Link to="/history">
                            <Button sx={{ color: "black", p: "0.5rem" }} size='small'>See past conversations</Button>
                        </Link>
                    }
                />
            </Box>
        )
    }