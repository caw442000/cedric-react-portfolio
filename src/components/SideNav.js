import cedric from "../assets/images/cedric.png";
import Introduction from './Introduction';
import WorkProjects from './WorkProjects'


// };

import React, { useRef, createRef } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import EmailIcon from "@material-ui/icons/Email";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Route, MemoryRouter, useHistory } from "react-router";
import { Link as RouterLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
// import Link from "@material-ui/core/Link";
import { render } from "react-dom";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { MenuList } from "@material-ui/core";

const drawerWidth = 300;



const useStyles = makeStyles((theme) => ({
  root: {

    // styles insure the font on typography
    "& .MuiTouchRipple-root": {
     
        fontWeight: "600",
        fontFamily: 'Nunito Sans, sans-serif',
 
    },
    " & .MuiTypography-root": {

      fontFamily: 'Nunito Sans, sans-serif',
 
      color: 'black'
    },
    display: "flex",
    backgroundColor:'black',
    textAlign: 'center',
    fontFamily: 'Nunito Sans, sans-serif',



    
  },
  listItemText: {
    width: "100%",
    fontSize: "3.4rem", //Insert your required size
    textAlign: "justify",
    padding: '1rem',
    paddingLeft:'3rem',
  },
  listMainText: {
    width: "100%",
    fontSize: "3.4rem", //Insert your required size
    textAlign: "justify",
    padding: '1rem',
    paddingLeft:'3rem',
  },
  // listItemText: .active {
  //   fontSize: "2.4rem", //Insert your required size
  //   textAlign: "center",
  // },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  
  appBar: {
    
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      textAlign: 'center',
    },
    backgroundColor:'white'

},


  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
      backgroundColor: 'red'
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    
    
  },
  content: {
    flexGrow: 1,
    // padding: theme.spacing(3),
   
    
  },
  getWide: {
    width: `800px`,
    color: 'black',
  
  },
}));



const SideNav = (props) => {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const history = useHistory();



  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <div className="Profile-Image-Wrap">
        <img className="Profile-Image" src={cedric} alt="Cedric" />
      </div>
      <h2 style={{textAlign: "center", paddingBottom:'15px'}}>Cedric Winbush Jr</h2>
      <p style={{textAlign: "center", paddingBottom:'15px'}}>
        <EmailIcon />
        cawinbushjr@gmail.com
      </p>
      <Divider />
      <MenuList style={{textAlign: "center", paddingBottom:'15px'}}>

        <MenuItem
          component={Link}
          activeClass="active"
          to="introduction"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className={classes.listItemText}
          primary="Introduction"
        
        >
          <Typography className={classes.listItemText}>About</Typography>
          
        </MenuItem>
        <MenuItem
          component={Link}
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          to="projects"
          className={classes.listItemText}
          primary="Projects"
        >
          <Typography className={classes.listItemText}>Projects</Typography>
        </MenuItem>
      </MenuList>

    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar style={{boxShadow: "none"}} position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
            style={{color: "black"}}
          >
            <MenuIcon />
          </IconButton>
          <Typography className = { classes.getWide} variant="h3" color = 'initial' noWrap align='justify' display= 'inline'>
            Allow Me To Introduce Myself
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>

      <main className={classes.content}>
        <div className={classes.toolbar} />
          <Introduction />
   
       
          <WorkProjects />
       
      </main>
    </div>
    // </MemoryRouter>
  );
};

export default SideNav;
