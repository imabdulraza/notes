import React, { useMemo } from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth';
import { navMenuItems, dashboardAccordion } from '../../../services/constants';

const userRoutes = [
    {
        id: 1,
        name: 'Dashboard',
        path: '/user/dashboard'
    },
    {
        id: 2,
        name: 'Profile',
        path: '/user/profile'
    },
];

const adminRoutes = [
    {
        id: 1,
        name: 'Dashboard',
        path: '/admin/dashboard'
    },
    {
        id: 2,
        name: 'Profile',
        path: '/admin/profile'
    },
];

const userSettings = [
    {
        id: 1,
        name: 'Profile',
        path: '/'
    },
    {
        id: 2,
        name: 'Account',
        path: '/'
    },
    {
        id: 3,
        name: 'Dashboard',
        path: '/user/dashboard'
    },
    {
        id: 4,
        name: 'Logout',
        path: '/'
    }
];

const pages = ['Home', 'Pricing', 'Blog'];

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

type HeaderProps = {

};

const Header: React.FC<HeaderProps> = () => {
    const auth = useAuth();
    const navigate = useNavigate();

    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const navbarMenuItems = useMemo(() => {
        if (auth.role === "USER") {
            return userRoutes.map((route) => (
                <NavLink
                    key={route.id}
                    to={route.path}
                    className={({ isActive }) => isActive ? "normal active" : "normal"}
                >
                    {route.name}
                </NavLink>
            ))
        }

        if (auth.role === "ADMIN") {
            return adminRoutes.map((route) => (
                <NavLink
                    key={route.id}
                    to={route.path}
                    className={({ isActive }) => isActive ? "normal active" : "normal"}
                >
                    {route.name}
                </NavLink>
            ))
        }
    }, [auth.role]);

    return (
        <>
            <AppBar position="static" sx={{ boxShadow: 1 }}>
                <Container maxWidth="xl" sx={{ boxShadow: 'none', background: '#FFFFFF', color: '#000000' }}>
                    <Toolbar disableGutters>
                        <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            LOGO
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                {pages.map((page) => (
                                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">{page}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href=""
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            LOGO
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {navbarMenuItems}
                            {!auth.role ?
                                <NavLink
                                    to={'/signin'}
                                    className={({ isActive }) => isActive ? "normal active" : "normal"}
                                >
                                    {'Sign In'}
                                </NavLink>

                                :

                                <NavLink
                                    to={'/'}
                                    className={({ isActive }) => isActive ? "normal active" : "normal"}
                                    onClick={() => auth.signout(() => navigate("/"))}
                                >
                                    {'Sign Out'}
                                </NavLink>
                            }

                        </Box>

                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                {userSettings.map((setting) => (
                                    <MenuItem key={setting.id} onClick={() => { auth.signout(() => navigate("/")); handleCloseUserMenu() }}>
                                        <Typography textAlign="center">{setting.name}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    )
};

export default Header;