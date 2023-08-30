import IconArrowTrendUp from "@assets/icons/ArrowTrendUp";
import IconBuilding from "@assets/icons/Building";
import IconPlateUtensilsEmpty from "@assets/icons/PlateUtensilsEmpty";
import IconUsers from "@assets/icons/Users";
import i18next from "@i18n/config";

export type NavigationMockType = {
    id: number;
    icon: JSX.Element;
    name: string;
};

export const mockData: NavigationMockType[] = [
    {
        id: 1,
        icon: <IconArrowTrendUp />,
        name: i18next.t("homepage"),
    },
    {
        id: 2,
        icon: <IconUsers />,
        name: i18next.t("users"),
    },
    {
        id: 3,
        icon: <IconUsers />,
        name: i18next.t("premiumUsers"),
    },
    {
        id: 4,
        icon: <IconBuilding />,
        name: i18next.t("restaurants"),
    },
    {
        id: 5,
        icon: <IconPlateUtensilsEmpty />,
        name: i18next.t("cuisine"),
    },
];
