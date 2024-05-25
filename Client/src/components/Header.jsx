import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const drawerWidth = 240;
const navItems = [
  { text: 'Home', to: '/' },
  { text: 'Blog Posts', to: '/blogs' },
  { text: 'Contact', to: '/contact' },
  { text: 'Instagram', to: 'https://www.instagram.com/missmentalmatters' },
];

function Header(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', backgroundColor: '#f3eee8 ' }}>
      <Typography variant="h6" sx={{ my: 2, color: '#eb9aa3'  }}>
      Miss Mental Matters
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton component={Link} to={item.to} sx={{ textAlign: 'center', color: '#eb9aa3'  }} selected={pathname === item.to}>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex', marginBottom: '3rem' }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ backgroundColor: '#f3eee8', borderBottom: '1.5px solid black'  }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon sx={{ color: '#eb9aa3'  }} />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, color: '#eb9aa3' }}
          >
            Miss Mental Matters
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block', color: '#eb9aa3'  } }}>
            {navItems.map((item) => (
              <Button key={item.text} component={Link} to={item.to} variant={pathname === item.to  ? 'outlined' : 'text'} sx={{ color: '#eb9aa3'  }}>
                {item.text}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

Header.propTypes = {
  window: PropTypes.func,
};

export default Header;
