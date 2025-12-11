import { Box, Stack, Typography } from '@mui/material';
import ChatCard from '../../Components/ChatCard/ChatCard';



export default function HistoryPage() {

    const historyData = localStorage.getItem("chatHistory")
        ? JSON.parse(localStorage.getItem("chatHistory")).map(chat => ({
            ...chat,
            messages: chat.messages.map(msg => ({
                ...msg,
                time: msg.time ? new Date(msg.time) : null
            }))
        }))
        : [];

    const sortedHistoryData = historyData.sort((a, b) => new Date(b.date) - new Date(a.date));


    return (
        <Stack
            sx={{
                height: "100%",
                background: "linear-gradient(180deg, rgba(215, 199, 244, 0.2) 0%, rgba(151, 133, 186, 0.2) 100%)",
                alignItems: "center",
                overflowY: "hidden",
                p: 2,
            }}
        >
            <Typography variant="h5" sx={{ margin: "4rem 3rem", fontSize: 32, fontWeight: "500", letterSpacing: 0.5, fontFamily: "Ubuntu" }}>
                Conversation History
            </Typography>
            <Box sx={{ flexGrow: 1, overflowY: "scroll", scrollbarWidth: "none", p: 5, pb: 1, width: "100%" }}>
                {historyData.length === 0 ? (
                    <Typography variant="h5" sx={{ m: 10, fontSize: 32, fontWeight: "500", letterSpacing: 0.5, fontFamily: "Ubuntu" }}>
                        No past conversations found.
                    </Typography>
                ) : (
                    sortedHistoryData.map((chat) => (
                        <>
                            <Typography key={chat.id} sx={{ marginLeft: "0.8rem", marginBottom: "6px" }}>{chat.date}</Typography>
                            <Stack key={chat.id} sx={{
                                mb: 5, p: 3,
                                background: "linear-gradient(90deg, #BFACE2 0%, #D7C7F4 100%)",
                                borderRadius: 4
                            }}>
                                {chat.messages.map((message) => (
                                    <ChatCard key={message.id} message={message} readOnly />
                                ))}
                            </Stack>
                        </>
                    ))
                )}
            </Box>
        </Stack>
    )
}