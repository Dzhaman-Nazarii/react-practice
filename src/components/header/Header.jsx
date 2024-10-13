export const Header = () => {
	const now = new Date();
	return (
		<header>
			<h3>React Header Component</h3>
			<span>Time: {now.toLocaleTimeString()}</span>
		</header>
	)
}