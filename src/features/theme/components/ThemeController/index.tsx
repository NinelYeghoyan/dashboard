import { FC } from "react";
import { useTranslation } from "react-i18next";

import moon from "@assets/moon.svg";
import sun from "@assets/sun.svg";
import StyledThemeController from "@features/theme/components/ThemeController/styled";
import { useThemeMode } from "@features/theme/hooks/useThemeMode";

const ThemeController: FC = () => {
    const { t } = useTranslation();
    const { setDarkMode, setLightMode } = useThemeMode();

    return (
        <StyledThemeController className="BS-theme-controller flex items-center">
            <div className="BS-theme-controller--text mr-6">{t("Light")}</div>

            <div className="BS-theme-controller--inner flex justify-between pv-4 ph-4">
                <button
                    type="button"
                    onClick={setLightMode}
                    className="BS-theme-controller--button flex-center cursor-pointer"
                >
                    <img src={sun} alt="sun" />
                </button>

                <button
                    type="button"
                    onClick={setDarkMode}
                    className="BS-theme-controller--button flex-center cursor-pointer"
                >
                    <img src={moon} alt="moon" />
                </button>
            </div>

            <div className="BS-theme-controller--text ml-6">{t("Dark")}</div>
        </StyledThemeController>
    );
};

export default ThemeController;
