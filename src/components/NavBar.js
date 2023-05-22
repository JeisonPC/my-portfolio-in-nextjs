import { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image';



export default function NavBar() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScroll(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" elevation={scroll ? 4 : 0} sx={{ backgroundColor: scroll ? 'white' : 'transparent' }}>
        <Toolbar>
          <div style={{ display: 'flex', flexGrow: 1 }}>
            <Image
              src="/logo.svg"
              width={120}
              height={60}
              alt="Picture of the author"
              sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}
            />
          </div>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            component="div"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
