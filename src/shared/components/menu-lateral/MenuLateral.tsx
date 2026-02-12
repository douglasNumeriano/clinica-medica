import { Avatar, Box, Drawer, useTheme } from "@mui/material";


interface IMenuLateral {
    children: React.ReactNode;	
}
    
export const MenuLateral: React.FC<IMenuLateral> = ({children}) => {

    const theme = useTheme();
    return (
        <>
        <Drawer variant="permanent">
            <Box width={theme.spacing(28)}>
                <Box width="100%" height={theme.spacing(20)} display="flex" alignItems="center" justifyContent="center">
                     <Avatar src="https://static.vecteezy.com/ti/vetor-gratis/p1/4607791-cara-de-homem-emotiva-icone-sorridente-personagem-masculino-de-camisa-azul-ilustracao-isolado-no-branco-feliz-humano-psicologico-retrato-emocoes-positivas-usuario-avatar-para-app-web-design-vetor.jpg" />
                </Box>
            </Box>
        </Drawer>
        <Box height="100vh" marginLeft={28} >
            {children}    
        </Box>
        </>
    );
};