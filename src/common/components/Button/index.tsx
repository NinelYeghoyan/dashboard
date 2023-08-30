import { ButtonHTMLAttributes, FC, ReactNode } from "react";

import StyledButton from "./styled";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    children: ReactNode;
    type?: "button" | "submit" | "reset";
    variant?: "primary" | "secondary" | "danger" | "disable";
    size?: "extra-small" | "small" | "medium" | "large";
    isFullWidth?: boolean;
    className?: string;
};

const Button: FC<ButtonProps> = ({
    children,
    type = "button",
    variant = "primary",
    size = "medium",
    isFullWidth = false,
    className = "",
    ...rest
}) => (
    <StyledButton
        type={type}
        $isFullWidth={isFullWidth}
        className={`${variant} ${size} ${className} BS-button shrink-0 cursor-pointer ph-12`}
        {...rest}
    >
        {children}
    </StyledButton>
);

export default Button;
