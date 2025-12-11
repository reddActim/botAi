import { Stack, Box, Typography } from "@mui/material";
import HumanIcon from "../../assets/humanIcon.png";
import AiIcon from "../../assets/aiIcon.png";
import EmptyThumbUp from "@mui/icons-material/ThumbUpOffAlt"
import ThumbUp from "@mui/icons-material/ThumbUpAlt"
import EmptyThumbDown from "@mui/icons-material/ThumbDownOffAlt"
import ThumbDown from "@mui/icons-material/ThumbDownAlt"
import { useState, useEffect } from "react";
import Rating from '@mui/material/Rating';
import FeedBackModal from "../FeedBackModal/FeedBackModal";

export default function ChatCard({ message, setChat, readOnly = false }) {
    const [liked, setLiked] = useState(false);
    const [disliked, setDisliked] = useState(false);
    const [RatingValue, setRatingValue] = useState(0);
    const [open, setOpen] = useState(false);


    useEffect(() => setOpen(disliked)
        , [disliked])

    useEffect(() => {
        if (typeof setChat === "function") {
            setChat(prevChat =>
                prevChat.map(msg =>
                    msg.id === message.id ? { ...msg, rating: RatingValue } : msg
                )
            );
        }
    }, [RatingValue, message.id, setChat]);


    return (
        <Stack
            key={message.id}
            sx={{
                justifyContent: "flex-start", alignItems: "center",
                marginBottom: "1.5rem",
                background: readOnly ? "none" : "linear-gradient(180deg, rgba(215, 199, 244, 0.2) 0%, rgba(151, 133, 186, 0.2) 100%)",
                p: 2, borderRadius: 5,
            }}
            direction="row"
            spacing={1.5}
        >
            <Box component="img"
                src={message.type === "human" ? HumanIcon : AiIcon}
                alt={message.type === "human" ? "humanIcon" : "aiIcon"}
                sx={{ width: "55px", height: "55px", }}
            />
            <Box>
                <Typography
                    variant="body1"
                    sx={{ fontWeight: "600" }}
                ><span>{message.type === "human" ? "You" : "Soul Ai"}</span>
                </Typography>
                {message.type === "ai" ? (
                    // AI response in <p>
                    <p style={{ margin: "0px" }}>{message.text}</p>
                ) : (
                    // Human message styled with Typography
                    <Typography variant="body2">{message.text}</Typography>
                )}
                <Stack direction="row" spacing={1} alignItems="center" sx={{ marginTop: "8px", marginBottom: "0px" }}>
                    <Typography
                        variant="body2"
                        sx={{ display: "inline", marginRight: "1rem", paddingBottom: "8px", marginTop: "0px" }}
                    > {message.time
                        ? new Date(message.time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                        : "—"}</Typography>

                    {message.type === "ai" && !readOnly && (
                        <span>
                            {liked ?
                                <ThumbUp sx={{ cursor: "pointer", marginRight: "0.5rem", color: "black" }} onClick={() => setLiked(false)} /> :
                                <EmptyThumbUp sx={{ cursor: "pointer", marginRight: "0.5rem" }} onClick={() => {
                                    setDisliked(false);
                                    setLiked(!liked)
                                }} />}
                            {disliked ?
                                <ThumbDown sx={{ cursor: "pointer", color: "black" }} onClick={() => setDisliked(false)} /> :
                                <EmptyThumbDown sx={{ cursor: "pointer" }} onClick={() => {
                                    setLiked(false);
                                    setDisliked(!disliked)
                                    setRatingValue(0);
                                }} />}
                        </span>

                    )}
                </Stack>

                {liked && !readOnly && (
                    <Rating
                        name="ratings"
                        value={RatingValue}
                        sx={{ color: "black" }}
                        onChange={(_event, newValue) => {
                            setRatingValue(newValue)
                        }} />
                )}
                <FeedBackModal open={open} setOpen={setOpen} chat={message} setChat={setChat} />
                {message.type === "ai" && message.rating > 0 && readOnly && (
                    <Rating
                        name="readOnlyRatings"
                        value={message.rating}
                        readOnly
                        sx={{ color: "black" }}
                    />
                )}
                {message.feedback && (
                    <Typography variant="h6" sx={{ fontSize: "16px", fontStyle: "ubuntu", color: "black" }}>
                        <strong>Feedback:</strong> {message.feedback}
                    </Typography>
                )}
            </Box>
        </Stack>
    )
}