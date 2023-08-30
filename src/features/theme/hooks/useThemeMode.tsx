import { useAppDispatch } from "@app/hooks/useAppDispatch";
import { useAppSelector } from "@app/hooks/useAppSelector";
import { setTheme } from "@features/theme/themeSlice";
import { ThemeType } from "@features/theme/themeTypes";

export const useThemeMode = () => {
    const dispatch = useAppDispatch();
    const themeState = useAppSelector((state) => state?.theme.themeType);

    const setDarkMode = () => {
        dispatch(setTheme("dark"));
    };

    const setLightMode = () => {
        dispatch(setTheme("light"));
    };

    const toggleMode = () => {
        const newThemeType: ThemeType = themeState === "light" ? "dark" : "light";
        dispatch(setTheme(newThemeType));
    };

    return { isDarkMode: themeState === "dark", setDarkMode, setLightMode, toggleMode };
};
