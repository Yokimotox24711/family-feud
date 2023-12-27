import Image from 'next/image'
import styles from './page.module.css'
import { Box, Button, Container, Link, Typography } from '@mui/material'

export default function Home() {
  return (
    <>
      <main>
        <Box sx={{ height: "100vh", background: "linear-gradient(179deg, #fadb14, #faad14)", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
          <Container sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <Box
              className="img-wrapper"
              sx={{ height: "100px", "& img": { height: "100%" } }}
            >
              <img
                className="logo"
                src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Logo_of_Family_Feud.png"
                alt=""
              />
            </Box>
            <Box sx={{my: 2}}>
              <Button variant="contained" href="/family-feud" sx={{background: "white",}}>Start Game</Button>
            </Box>
          </Container>
        </Box>
      </main>
    </>
  )
}
