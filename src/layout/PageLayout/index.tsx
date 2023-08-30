import { FC, ReactNode } from "react";

import { useAppSelector } from "@app/hooks/useAppSelector";
import Notification from "@common/components/Notification";

import Aside from "../Aside";

import StyledPageLayout from "./styled";

type PageLayoutProps = {
    children: ReactNode;
    className?: string;
};

const PageLayout: FC<PageLayoutProps> = ({ children, className = "" }) => {
    const message = useAppSelector((state) => state.user.message);

    return (
        <StyledPageLayout className={`${className} flex`}>
            <Aside />

            <main className="BS-main flex flex-col pv-50 ph-50">
                {message === "SHOW_NEW_USER_MESSAGE" && <Notification text="newUserSuccessfullyMessage" />}
                {message === "SHOW_EDIT_USER_MESSAGE" && <Notification text="editUserSuccessfullyMessage" />}

                {children}
            </main>
        </StyledPageLayout>
    );
};

export default PageLayout;
