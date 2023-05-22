import React from 'react';
import { createTheme, ThemeProvider, Box } from '@mui/material';
import Typewriter from 'typewriter-effect';

// Definir un tema personalizado con la fuente deseada
const theme = createTheme({
  typography: {
    fontFamily: 'Roboto', // Fuente personalizada
  },
});

export default function MyTypewriter() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        component="span"
        sx={{
          fontFamily: 'inherit',
          color: 'white',
          textAlign: 'center',
        }}
      >
        <Typewriter
          options={{
            strings: ['Diseñador UX', 'Desarrollador Front-End'],
            autoStart: true,
            loop: true,
            startDelay: 1000, // Retraso inicial antes de que comience a escribir
            cursor: '_',
            cursorStyle: 'color: white', // Cambiar el color del cursor a blanco
          }}
        />
      </Box>
    </ThemeProvider>
  );
}
