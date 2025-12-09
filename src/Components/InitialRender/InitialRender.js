import { Typography, Stack, Box, Grid,  } from '@mui/material';
import HeroIcon from '../../assets/heroIcon.png';

const initialData = [
    {
        heading: 'Hi, what is the weather',
        subtext: 'Get immediate AI generated response'
    },
    {
        heading: 'Hi, what is my location',
        subtext: 'Get immediate AI generated response'
    },
    {
        heading: 'Hi, what is the temperature',
        subtext: 'Get immediate AI generated response'
    },
    {
        heading: 'Hi, how are you',
        subtext: 'Get immediate AI generated response'
    },
]


export default function InitialRender() {
    return (
        <Stack sx={{ height: "100%", justifyContent:"flex-end"}}>
            <Stack sx={{ minHeight: "50%", width: "100%", justifyContent: "center", alignItems: "center", gap: 2, paddingTop: 14, }}>
                <Typography variant="h5" sx={{}}>How Can I Help You Today?</Typography>
                <Box component="img" src={HeroIcon} alt="heroIcon" sx={{ width: "75px", height: "auto", objectFit: "contain" }} />
            </Stack>
            <Box sx={{marginLeft:"20px", marginRight:"20px"}}>
                            <Grid container sx={{ width: "100%",  boxSizing: "border-box", }} spacing={2}>
                {initialData.map(chat => (
                    <Grid key={chat.heading} size={{ xs: 12, md: 6 }} sx={{}}>
                        <Card heading={chat.heading} subtext={chat.subtext} handleClick={{}}/>
                    </Grid>
                ))}                 
            </Grid>
            </Box>

        </Stack>
    )
}   

export function Card({ heading, subtext, handleClick }) {

    return (
        <Stack sx={{p:2, backgroundColor:"white"}} spacing={2} onClick={handleClick}>
            <Typography variant='h5' sx={{}}>{heading}</Typography>
            <Typography variant='body1' sx={{}}>{subtext}</Typography>
        </Stack>
    );
}