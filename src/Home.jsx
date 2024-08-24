import { Button ,Stack,Box} from '@mui/material';
export default ()=>{
    return <>
     <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
        <Stack spacing={2} direction="row">
            <Button variant="text">Text</Button>
            <Button variant="contained">Contained</Button>
            <Button variant="outlined">Outlined</Button>
        </Stack>
   </Box>
   </>
}