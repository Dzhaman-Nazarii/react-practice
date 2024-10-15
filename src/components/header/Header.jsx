import { useEffect, useState } from "react";

export const Header = () => {
	const [now, setNow] = useState(new Date());

	useEffect(() => {
		const interval = setInterval(() => {
			setNow(new Date());
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	}, []);

	return (
		<header>
			<h3>React Header Component</h3>
			<span>Time: {now.toLocaleTimeString()}</span>
		</header>
	);
};
