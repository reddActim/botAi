import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Input, OutlinedInput, Stack } from '@mui/material';
import BulbIcon from '../../assets/bulbIcon.png';
import CloseIcon from '@mui/icons-material/Close';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function FeedBackModal({ open, setOpen }) {
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={{ ...style, width: "60vw",  bgcolor: "primary.light" }}>
                    <Stack sx={{ height: "100%" }}>
                        <Stack direction="row" justifyContent="space-between">
                            <Stack sx={{}} spacing={3} direction="row">
                                <Box component="img" src={BulbIcon} style={{ width: "30px", height: "30px", alignSelf: "center" }} />
                                <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ textAlign: "center" }}>
                                    Provide Additional Feedback
                                </Typography>
                            </Stack>

                            <Stack direction="row" justifyContent="flex-end" sx={{ margin: 0 }}><CloseIcon onClick={handleClose} sx={{ cursor: "pointer" }} /></Stack>
                        </Stack>

                        <OutlinedInput fullWidth
                            multiline
                            minRows={6}
                            sx={{ my: "20px" }} />
                        <Stack direction="row" justifyContent="flex-end">
                            <Button variant="contained" sx={{ textTransform: "none", backgroundColor: "primary.main", fontWeight: "510" }} onClick={{}}>Submit</Button>
                        </Stack>
                    </Stack>


                </Box>
            </Modal>
        </div>
    );
}
