import { Header } from "../header/Header";
import { NoteList } from "../noteList/NoteList";

export const App = () => {
	return (
		<>
			<Header />
			<main>
				<NoteList />
			</main>
		</>
	);
};
