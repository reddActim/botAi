import MenuIcon from '@mui/icons-material/Menu';
import { Typography, Stack, useMediaQuery, Button } from '@mui/material'


export default function Navbar({  setMenuOpen }) {
    const isMobile = useMediaQuery('(max-width:960px)');
    return(
        <header>
        <Stack direction="row" spacing={2} p={2}
        sx={{background: "linear-gradient(180deg, rgba(215, 199, 244, 0.1) 0%, rgba(151, 133, 186, 0.1) 100%)"}}
        >
            {isMobile && <Button sx={{color:"black", width:"5px"}} onClick={() => setMenuOpen(true)}><MenuIcon sx={{alignSelf: "center"}} /></Button>}
            <Typography component="h1" variant="h1" sx={{alignSelf: "center", color: "primary.dark", fontWeight: "bold", fontSize:"2rem"}}>Bot AI</Typography>
        </Stack>
        </header>
    )
}