import { FC } from "react";

import StyledAvatar from "./styled";

type AvatarProps = {
    onRedirect?: () => void;
    isProfileAvatar?: boolean;
    image?: string;
    className?: string;
};

const Avatar: FC<AvatarProps> = ({ onRedirect, isProfileAvatar = false, image = "", className = "" }) => (
    <StyledAvatar
        onClick={onRedirect}
        $isProfileAvatar={isProfileAvatar}
        className={`${className} BS-avatar flex-center cursor-pointer`}
    >
        <img src={image} alt="user" className="w100 object-cover" />
    </StyledAvatar>
);

export default Avatar;
