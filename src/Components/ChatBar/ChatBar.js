import { Box, Button, OutlinedInput, Stack, Typography } from "@mui/material";
import { useState } from "react";

export default function ChatBar({ generateResponse, setScroll, chat, clearChat }) {
    const [input, setInput] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        generateResponse(input);
        setInput("");
    }

    return (
        <Box component="form" onSubmit={(e) => handleSubmit(e)}>
            <Stack direction="row" spacing={3} sx={{ padding: 2, overflowY: "auto", flexGrow: 1 }}>
                <OutlinedInput fullWidth required placeholder="Message Bot AI…" value={input} onChange={(e) => setInput(e.target.value)} />
                <Button type="submit"> <Typography variant="button">Ask</Typography></Button>
                <Button type="button"> <Typography variant="button">Save</Typography></Button>
            </Stack>
        </Box>
    )
}