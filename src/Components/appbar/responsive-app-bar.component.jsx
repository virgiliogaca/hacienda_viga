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
        <AppBar position="fixed" color="default">
            <Container maxWidth="100%">
                <Toolbar>
                    <Button className="w-72 left-60 2xl:left-56 2xl:w-96 xl:w-80 xl:left-48 lg:w-60 lg:left-2 md:w-72 md:left-44 sm:left-10 xs:left-2" href="./">
                        <img src={headerIcon} alt=""></img>
                    </Button>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }  }} className="2xl:ml-[30%] xl:ml-[20%] lg:ml-[10%]">
                        {pages.map((page) => (
                        <Button
                            key={page}
                            href={page}
                            sx={{ my: 2, color: 'darkgoldenrod', display: 'block'}}
                        >
                            <p className={"text-sm xl:text-sm lg:text-xs md:text-xs"}>
                                {page}
                            </p>
                        </Button>
                        ))}
                        <ColorButton href="Reserva" className="">
                            Reserva
                        </ColorButton>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default ResponsiveAppbar;