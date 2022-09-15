import { Stack } from '@mui/material';
import { logo } from '../utils/constants';
import { Link } from 'react-router-dom';
import { SearchBar } from './';

function Navbar() {
    return (
        <Stack direction="row" alignItems="center" p={2} sx={{position: "sticky", top:0, background: '#000', justifyContent:"space-between", zIndex:"10" }}>
            <Link to='/' style={{ display: 'flex', alignItems: 'center' }}>
                <img src={logo} alt="logo" height={45}></img>
            </Link>
            <SearchBar />
        </Stack>
    )
}

export default Navbar