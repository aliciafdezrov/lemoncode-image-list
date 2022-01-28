import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import {switchRoutes} from "../router";
import {useLocation, useNavigate} from "react-router-dom";

export const TabsLayout: React.FC = (props) => {
    const {children} = props;
    const navigate = useNavigate();
    const location = useLocation();

    const handleChange = (event, newValue) => {
        navigate(newValue);
    };

    return (
        <Box sx={{width: '100%'}}>
            <AppBar position="relative">
                <Tabs
                    value={location.pathname}
                    onChange={handleChange}
                    indicatorColor="secondary"
                    textColor="inherit"
                    variant="fullWidth"
                    aria-label="tabs navigation"
                >
                    <Tab label="Kitties" value={switchRoutes.kitties}/>
                    <Tab label="Puppies" value={switchRoutes.puppies}/>
                </Tabs>
                {
                    children
                }
            </AppBar>
        </Box>
    );
}
