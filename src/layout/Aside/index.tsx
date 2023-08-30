import { FC } from "react";

import user from "@assets/user.webp";
import Avatar from "@common/components/Avatar";
import Navigation from "@common/components/Navigation";
import ThemeController from "@features/theme/components/ThemeController";

import StyledAside from "./styled";

const Aside: FC = () => (
    <StyledAside className="BS-aside flex flex-col ph-16 pv-50">
        <div className="grow">
            <Avatar className="margin-center" image={user} isProfileAvatar />

            <Navigation className="mt-42" />
        </div>

        <div className="margin-center">
            <ThemeController />
        </div>
    </StyledAside>
);
export default Aside;
