import {Stack, Box, Typography} from "@mui/material";
import HumanIcon from "../../assets/humanIcon.png";
import AiIcon from "../../assets/aiIcon.png";

export default function ChatCard({message}){
    return (
                                    <Stack
                                key={message.id}
                                sx={{ justifyContent:"flex-start", alignItems:"center",
                                    marginBottom: "1.5rem", 
                                    background: "linear-gradient(180deg, rgba(215, 199, 244, 0.2) 0%, rgba(151, 133, 186, 0.2) 100%)",
                                    alpha: 0.1, p: 2, borderRadius: 5
                                }}
                                direction="row"
                                spacing={1.5}
                            >
                                <Box component="img"
                                    src={message.type === "human" ? HumanIcon : AiIcon}
                                    alt={message.type === "human" ? "humanIcon" : "aiIcon"}
                                    sx={{ width: "55px", height: "55px",  }}
                                />
                                <Box>
                                    <Typography
                                        variant="body1"
                                    >{message.type === "human" ? "You" : "Soul Ai"}</Typography>
                                    <Typography
                                        variant="body2"
                                    >{message.text}</Typography>
                                    <Typography
                                        variant="body2"
                                        sx={{display: "inline", marginRight: "0.5rem"}}
                                    >{message.time.toLocaleTimeString()}</Typography>
                                    
                                </Box>
                            </Stack>
    )
}