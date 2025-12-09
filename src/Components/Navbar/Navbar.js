import MenuIcon from '@mui/icons-material/Menu';
import { Typography, Stack, useMediaQuery } from '@mui/material'


export default function Navbar() {
    const isMobile = useMediaQuery('(max-width:600px)');
    return(
        <Stack direction="row" spacing={2} p={2}>
            {isMobile && <MenuIcon sx={{alignSelf: "center"}} />}
            <Typography variant="h5" sx={{alignSelf: "center", color: "primary.dark", fontWeight: "bold"}}>Bot AI </Typography>
        </Stack>
    )
}