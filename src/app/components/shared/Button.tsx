import React from "react";

// Default color classes
type ColorClasses = {
  primary: string;
  secondary: string;
  success: string;
  danger: string;
  warning: string;
  info: string;
  light: string;
  dark: string;
};

/**
 * Button component to render buttons with Tailwind CSS styles.
 * @param {Object} props - Props for the Button component.
 * @param {string} [props.as] - The HTML element type to render. Can be 'a', 'button', or 'input'.
 * @param {string} [props.color="default"] - The color of the button. Options: 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'default'.
 * @param {string} [props.variant] - The variant of the button. Options: 'outline', 'ghost'.
 * @param {string} [props.shape] - The shape of the button. Options: 'rounded-pill', 'rounded-0'.
 * @param {string} [props.size="md"] - The size of the button. Options: 'sm', 'md', 'lg'.
 * @param {boolean} [props.disabled=false] - Whether the button is disabled.
 * @param {function} [props.onClick] - Click event handler.
 * @param {string} [props.className] - Additional CSS classes for the button.
 * @param {React.ReactNode} [props.leftIcon] - Left icon for the button.
 * @param {React.ReactNode} [props.rightIcon] - Right icon for the button.
 * @param {React.ReactNode} props.children - The content of the button.
 * @returns {JSX.Element} A button element.
 */

const Button: React.FC<{
  as?: "link" | "button" | "input";
  color?: keyof ColorClasses;
  variant?: "outline" | "ghost" | "link";
  shape?: "rounded-pill" | "rounded-0";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children?: React.ReactNode; // Include children prop explicitly
}> = ({
  as,
  children,
  color = "default",
  variant,
  shape,
  size,
  disabled,
  onClick,
  leftIcon,
  rightIcon,
  className,
  ...rest
}) => {
  // Default color classes
  const colorClasses: ColorClasses = {
    primary: "text-white bg-[#5856d6] hover:bg-[#4b49b6]",
    secondary: "text-white bg-[#6b7785] hover:bg-[#5b6571]",
    success: "text-white bg-[#1b9e3e] hover:bg-[#3dad5b]",
    danger: "text-white bg-[#e55353] hover:bg-[#e96d6d]",
    warning: "text-white bg-[#f9b115] hover:bg-[#fabd38]",
    info: "text-white bg-[39f] hover:bg-[#52a8ff]",
    light: "text-white bg-[#f3f4f7] hover:bg-[#f5f6f8]",
    dark: "bg-[#212631] hover:bg-[#1c202a]",
  };

  // Variant classes
  const variantClasses = {
    outline: "border-2 border-solid border-current",
    link: "text-blue-600 bg-transparent",
    ghost: "bg-transparent",
  };

  // Shape classes
  const shapeClasses = {
    "rounded-pill": "rounded-full",
    "rounded-0": "rounded-none",
  };

  // Size classes
  const sizeClasses = {
    sm: "px-3 py-2 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  const buttonClasses = `
  inline-flex items-center font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 rounded
  ${className} ${sizeClasses[size] || sizeClasses.md}
  ${variantClasses[variant] ?? (colorClasses[color] || colorClasses.primary)} 
  ${shapeClasses[shape]}`;

  const renderButton = () => {
    switch (as) {
      case "link":
        return (
          <a
            href="#"
            role="button"
            className={buttonClasses}
            onClick={onClick}
            {...rest}
          >
            {leftIcon && <span className="mr-2">{leftIcon}</span>}
            {children}
            {rightIcon && <span className="ml-2">{rightIcon}</span>}
          </a>
        );
      case "input":
        if (
          rest.type === "button" ||
          rest.type === "submit" ||
          rest.type === "reset"
        ) {
          return (
            <input
              type={rest.type}
              className={buttonClasses}
              onClick={onClick}
              disabled={disabled}
              {...rest}
            />
          );
        }
        break;
      case "button":
        return (
          <button
            type="button"
            className={buttonClasses}
            onClick={onClick}
            disabled={disabled}
            {...rest}
          >
            {leftIcon && <span className="mr-2">{leftIcon}</span>}
            {children}
            {rightIcon && <span className="ml-2">{rightIcon}</span>}
          </button>
        );
      default:
        return null; // Return null for unsupported cases
    }
  };

  return renderButton();
};

export default Button;

/*
<div className="flex flex-col gap-4">
  // Test cases
  <Button color="primary">Primary Button</Button>
  <Button color="secondary">Secondary Button</Button>
  <Button color="success">Success Button</Button>
  // Add more color variations


  <Button color="primary" variant="outline">
    Primary Outline
  </Button>
  <Button color="primary" variant="ghost">
    Primary Ghost
  </Button>
  // Add more variant variations


  <Button color="primary" shape="rounded-pill">
    Primary Rounded Pill
  </Button>
  <Button color="primary" shape="rounded-0">
    Primary Rounded 0
  </Button>
  // Add more shape variations


  <Button color="primary" size="sm">
    Small Primary Button
  </Button>
  <Button color="primary" size="md">
    Medium Primary Button
  </Button>
  <Button color="primary" size="lg">
    Large Primary Button
  </Button>
  // Add more size variations



  // Test button types
  <Button color="primary" disabled>
    Disabled Primary Button
  </Button>

  // Test disabled state
  <Button type="button" color="primary" onClick={() => alert("Button clicked")}>
    Button Type Button
  </Button>

  <Button type="submit" color="primary">
    Button Type Submit
  </Button>

  <Button type="reset" color="primary">
    Button Type Reset
  </Button>


  <Button color="primary" leftIcon={<IconLeft />} rightIcon={<IconRight />}>Button with Icons</Button>

</div>;
*/
