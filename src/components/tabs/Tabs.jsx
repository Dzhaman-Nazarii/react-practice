import { Button } from "../button/Button";

export const Tabs = ({ active, handleChange }) => {
	return (
		<section style={{ marginTop: "1rem" }}>
			<Button
				isActive={active === "main"}
				handleClick={() => handleChange("main")}
			>
				Main
			</Button>

			<Button
				isActive={active === "feedback"}
				handleClick={() => handleChange("feedback")}
			>
				Feedback
			</Button>
		</section>
	);
};