import { AppBar, Container, Toolbar, Button, Box } from "@mui/material"
import { styled } from '@mui/material/styles';
import headerIcon from "../../Assets/header/headerIcon.png"

const ResponsiveAppbar = () => {
    const pages = ["Acerca de", "Habitaciones", "Espacios", "Galeria", "Contacto"]
    const ColorButton = styled(Button)(({ theme }) => ({
        marginTop: 18,
        fontWeight: "bold",
        color: "white",
        borderRadius: 60,
        width: 120,
        backgroundColor: '#c2a067',
        height: 30,
        '&:hover': {
          backgroundColor: '#fdc56e',
          height: 30
        },
        marginLeft: 35
      }));

    return(
        <AppBar position="static" color="default">
            <Container maxWidth="100%">
                <Toolbar>
                    <Button className="w-72 left-60" href="./">
                        <img src={headerIcon} alt=""></img>
                    </Button>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }  }} className="ml-[50%]">
                        {pages.map((page) => (
                        <Button
                            key={page}
                            href={page}
                            sx={{ my: 2, color: 'darkgoldenrod', display: 'block' }}
                        >
                            {page}
                        </Button>
                        ))}
                        <ColorButton href="Reserva">
                            Reserva
                        </ColorButton>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default ResponsiveAppbar;