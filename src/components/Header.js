import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import MyTypewriter from "@/components/MyTypewriter";

import { Typography } from '@mui/material';


import Typewriter from "typewriter-effect";

export default function Header() {
  return (
    <Box
      position="absolute"
      sx={{
        backgroundColor: "#FF944D",
        height: "100vh",
        width: "100vw",
        margin: 0,
      }}
    >
      <Container sx={{ marginTop: "120px" }}>
        <h1 style={{ color: "white" }}>Jeison Poveda</h1>
        <Stack direction="row" spacing={1}>
          <span>Soy</span>
          <MyTypewriter/>
        </Stack>
        <Typography variant="body1" sx={{ marginTop: '40px' }}>
          Apasionado por mezclar Diseño y Desarrollo en cada App.
          Sí buscas una persona que combina todas las herramientas para que una App sea comercial, encontraste a quien buscabas.
        </Typography>
      </Container>
    </Box>
  );
}
