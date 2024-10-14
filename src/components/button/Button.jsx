import css from "./Button.module.css";

export const Button = ({ children, handleClick, isActive, ...props }) => {
	return (
		<button
			className={`${css.button} ${isActive ? css.button_active : ""}`}
			onClick={handleClick}
			{...props}
		>
			{children}
		</button>
	);
};