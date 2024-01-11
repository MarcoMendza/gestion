import { LogoutOutlined, MenuOutlined } from '@mui/icons-material'
import { AppBar, Grid, IconButton, Toolbar, Typography } from '@mui/material'
import {useDispatch, useSelector} from 'react-redux';
import {startLogout} from "../../../store/auth/index.js";

export const NavBar = ({ toggleDrawer, isDesktop }) => {

    const dispatch = useDispatch();
    const { displayName } = useSelector( state => state.auth );

    const onLogout = () => {
        dispatch( startLogout() );
    }

    return (
        <AppBar
            position='fixed'
        >
            <Toolbar>
                <IconButton
                    color='inherit'
                    edge= 'start'
                    onClick={toggleDrawer}
                    sx = {{ mr:2, display: { sm: 'none' } }}
                >
                </IconButton>

                <Grid container justifyContent='space-between' alignItems='center' sx={{ width: '100%' }}>
                    <Typography variant='h6' noWrap component='div' sx={{ display: { xs: 'none', sm: 'block' } }}>
                        Historytrivia
                    </Typography>

                    <Typography variant='h6' noWrap component='div' sx={{ flexGrow: 1, textAlign: 'center' }}>
                        ¡Hola {displayName}!
                    </Typography>

                    <IconButton color='error' onClick={onLogout}>
                        <LogoutOutlined />
                    </IconButton>
                </Grid>
            </Toolbar>

        </AppBar>
    )
}
