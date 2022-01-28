import * as React from 'react';
import {styled} from '@mui/material/styles';
import MuiAppBar, {AppBarProps as MuiAppBarProps} from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Drawer from "@mui/material/Drawer";
import Typography from '@mui/material/Typography';
import {Cart} from "../common-app/cart/cart.component";

const drawerWidth = 300;

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

const CustomizedAppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({theme, open}) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: drawerWidth,
    }),
}));

export const AppLayout: React.FC = (props) => {
    const {children} = props;
    const [open, setOpen] = React.useState(false);

    const handleSetOpen = () => {
        setOpen(!open);
    };

    return (
        <>
            <CustomizedAppBar position="relative" open={open}>
                <Toolbar>
                    <Typography variant="h6" noWrap sx={{ flexGrow: 1 }} component="div">
                        Puppies and Kitties
                    </Typography>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="end"
                        onClick={handleSetOpen}
                    >
                        {!open ? (
                                <MenuIcon/>
                            )
                            :
                            (
                                <ChevronRightIcon/>
                            )
                        }

                    </IconButton>
                </Toolbar>
            </CustomizedAppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                    },
                }}
                variant="persistent"
                anchor="right"
                open={open}
            >
                <Cart/>
            </Drawer>
            {children}
        </>
    );
}
