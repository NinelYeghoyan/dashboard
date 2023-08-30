import { FC, Suspense } from "react";
import { ThemeProvider } from "styled-components";
import { Reset } from "styled-reset";

import Loader from "@common/components/Loader";
import { useThemeMode } from "@features/theme/hooks/useThemeMode";
import AppRoutes from "@routes/index";
import GlobalStyles from "@style/theme/global.styled";
import defaultTheme, { lightTheme } from "@style/theme/theme";

import "@style/scss/styles.scss";

const App: FC = () => {
    const { isDarkMode } = useThemeMode();

    const theme = isDarkMode ? defaultTheme : lightTheme;

    return (
        <ThemeProvider theme={theme}>
            <Reset />
            <GlobalStyles />

            <Suspense fallback={<Loader />}>
                <AppRoutes />
            </Suspense>
        </ThemeProvider>
    );
};

export default App;
