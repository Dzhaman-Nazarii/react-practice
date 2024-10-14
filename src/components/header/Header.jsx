import { useState } from "react";

export const Header = () => {
	const [now, setNow] = useState(new Date());

	setInterval(() => {
		setNow(new Date());
	}, 1000);

	return (
		<header>
			<h3>React Header Component</h3>
			<span>Time: {now.toLocaleTimeString()}</span>
		</header>
	);
};
