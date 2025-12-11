import { Box, Stack, Typography, Button } from '@mui/material';
import navIcon from '../assets/navIcon1.png';
import newChatIcon from '../assets/newChatIcon.png';
import { Link } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';

export default function Sidebar({ clearChat , closeMenu , mobileView = false}) {
    return (
        <>
            <Stack>
                <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ width: "100%", backgroundColor: "#D7C7F4", p: "0.75rem" }} >
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <Button sx={{ margin: "0", padding: "0" }} onClick={clearChat}>
                            <Box component="img" src={navIcon} alt="navbarIcon" width="3rem" height="3rem" />
                            <Typography variant="h5" sx={{ color: "black", alignSelf: "center", fontWeight: "500", lineHeight: "100%", fontFamily: "Ubuntu", marginLeft: "0.5rem", marginRight: "0.5rem" }}>
                                New Chat
                            </Typography>
                            <Box component="img" src={newChatIcon} alt="newChatIcon" width="2rem" height="2rem" />
                        </Button>
                    </Link>
                    {mobileView && (
                        <Button onClick={closeMenu} sx={{ margin: "0", padding: "0", color: "black" }}>
                            <CloseIcon />
                        </Button>
                    )}
                </Stack>
                <Link to="/history" style={{ textDecoration: 'none', alignSelf: "center" }}>
                    <Button sx={{ m: "1rem", p: "0.5rem", backgroundColor: "#D7C7F4", textTransform: "none", borderRadius: "8px", }} >
                        <Typography variant='h6'
                            sx={{
                                fontStyle: "Bold", lineHeight: "100%", color: "black", fontFamily: "Ubuntu", fontWeight: "700",
                            }}
                        >Past Conversations</Typography>
                    </Button>
                </Link>
            </Stack>
        </>
    )
}


