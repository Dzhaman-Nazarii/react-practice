import { useState } from "react";
import { Feedback } from "../feedback/Feedback";
import { Header } from "../header/Header";
import { NoteList } from "../noteList/NoteList";
import { Study } from "../study/Study";
import { Tabs } from "../tabs/Tabs";

export const App = () => {
	const [tab, setTab] = useState("feedback");

	return (
		<>
			<Header />
			<main>
				<Tabs active={tab} handleChange={(current) => setTab(current)} />

				{tab === "main" && (
					<>
						<NoteList />
						<Study />
					</>
				)}

				{tab === "feedback" && <Feedback />}
			</main>
		</>
	);
};