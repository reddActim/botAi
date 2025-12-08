import {Box, Stack, Typography, Button} from '@mui/material';
import navIcon from '../assets/navIcon1.png';
import newChatIcon from '../assets/newChatIcon.png';

export default function Sidebar() {
    return(
        <>
        <Stack>
            <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{width: "100%", backgroundColor: "#D7C7F4", p:"0.75rem"}} >
                <Box component="img" src={navIcon} alt="navbarIcon" width="3rem" height="3rem"/>
                <Typography variant="h5" sx={{color: "black", alignSelf: "center", fontWeight: "5   00", lineHeight: "100%", fontFamily: "Ubuntu"}}>New Chat</Typography>
                <Box component="img" src={newChatIcon} alt="newChatIcon" width="2rem" height="2rem"/>
            </Stack>
            <Button sx={{m: "1rem", p: "0.5rem", backgroundColor: "#D7C7F4", textTransform: "none", borderRadius: "8px",}} >
                <Typography variant='h6' 
                sx={{
                fontStyle: "Bold",  lineHeight: "100%", color: "black", fontFamily: "Ubuntu", fontWeight: "700",}}
                >Past Conversations</Typography>
                </Button>
        </Stack>
        </>
    )
}


