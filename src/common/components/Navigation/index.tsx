import { FC, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { routes } from "@routes/routes";

import { mockData } from "./__mock";
import StyledNavigation from "./styled";

type NavigationProps = {
    className?: string;
};

const Navigation: FC<NavigationProps> = ({ className }) => {
    const activeIndex = 2; // TODO: To make the hard code dynamic.
    const navigate = useNavigate();

    const handleRedirect = useCallback(
        (id: number) => {
            if (id === activeIndex) {
                navigate(routes.home.path);
            }
        },
        [navigate],
    );

    return (
        <StyledNavigation className={`${className} BS-nav`}>
            {mockData.map((item) => (
                <div key={item.id} className="mv-4">
                    <div
                        role="button"
                        tabIndex={0}
                        onClick={() => handleRedirect(item.id)}
                        onKeyDown={() => handleRedirect(item.id)}
                        className={`${
                            item.id === activeIndex ? "active" : ""
                        } BS-nav--item flex items-center ph-16 cursor-pointer`}
                    >
                        {item.icon}
                        <span className="BS-nav--title ml-16">{item.name}</span>
                    </div>
                </div>
            ))}
        </StyledNavigation>
    );
};

export default Navigation;
