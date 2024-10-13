import { Button } from "../button/Button";
import { Header } from "../header/Header";
import { NoteList } from "../noteList/NoteList";

export const App = () => {
	return (
		<>
			<Header />
			<main>
				<section>
					<NoteList />
				</section>
				<section>
					<Button>Click</Button>
				</section>
			</main>
		</>
	);
};
