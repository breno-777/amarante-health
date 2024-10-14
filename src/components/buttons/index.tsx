import styled from "styled-components";

interface StyledButtonProperty {
    type?: "submit" | "reset" | "button";
    variant?: "light" | "red" | "default";
    children: React.ReactNode;
    onClick?: () => void;
}

interface ButtonComponentProps {
    $variant?: "light" | "red" | "default";
}

const ButtonComponent = styled.button<ButtonComponentProps>`
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    text-decoration: none;
    vertical-align: middle;

    cursor: pointer;
    user-select: none;
    border-radius: 1em;
    gap: 0.6em;
    padding: 0.4em 1em;
    font-size: 1em;

    border: 1px solid transparent;
    background-color: ${(props) =>
        props.$variant === "default"
            ? `rgba(var(--blue), 1)`
            : "red"
    };

    transition: transform 0.2s ease-in-out;
    &:hover{
        transform: scale(1.02);
    }
`;

export const StyledButton = ({
    type = "button",
    variant = "default",
    children,
    onClick,
}: StyledButtonProperty) => {
    return (
        <ButtonComponent $variant={variant} type={type} onClick={onClick}>
            {children}
        </ButtonComponent>
    );
};
