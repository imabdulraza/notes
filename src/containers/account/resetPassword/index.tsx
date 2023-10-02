import React from "react";

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";

function Copyright(props: any) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

type ResetPasswordProps = {

};

const ResetPassword: React.FC<ResetPasswordProps> = () => {
    let navigate = useNavigate();
    let location = useLocation();
    let auth = useAuth();

    let from = location.state?.from?.pathname || "/";

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        let formData = new FormData(event.currentTarget);
        let username = formData.get("username") as string;

        // auth.signin(username, () => {
        //     // Send them back to the page they tried to visit when they were
        //     // redirected to the login page. Use { replace: true } so we don't create
        //     // another entry in the history stack for the login page.  This means that
        //     // when they get to the protected page and click the back button, they
        //     // won't end up back on the login page, which is also really nice for the
        //     // user experience.
        //     navigate(from, { replace: true });
        // });
    }

    return (
        <>
            <Container component="main" maxWidth="xs">
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Reset Password
                    </Typography>

                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    value={"abdulraza@gmail.com"}
                                    // label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    disabled
                                />
                            </Grid>
                            {/* <Grid item xs={12}>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="otp"
                                    label="OTP"
                                    name="otp"
                                    autoComplete="otp"
                                    autoFocus
                                />
                            </Grid> */}
                            <Grid item xs={12} sm={3}>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="otp"
                                    name="otp"
                                    autoComplete="otp"
                                    autoFocus
                                    hiddenLabel
                                />
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="otp"
                                    name="otp"
                                    autoComplete="otp"
                                    hiddenLabel
                                />
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="otp"
                                    name="otp"
                                    autoComplete="otp"
                                    hiddenLabel
                                />
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="otp"
                                    name="otp"
                                    autoComplete="otp"
                                    hiddenLabel
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="New Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="confirmPassword"
                                    label="Confirm Password"
                                    type="confirmPassword"
                                    id="confirmPassword"
                                    autoComplete="current-confirmPassword"
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Reset Password
                        </Button>
                        <Grid container>
                            <Grid item>
                                <Link variant="body2" style={{ cursor: 'pointer' }} onClick={() => navigate('/signin')}>
                                    {"Back to Sign In"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        </>
    )
};

export default ResetPassword;