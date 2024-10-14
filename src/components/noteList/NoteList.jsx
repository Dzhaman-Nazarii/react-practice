import { noteList } from "../../data/note";

export const NoteList = () => {
	return (
		<section>
			<ul>
				{noteList.map((item) => (
					<li key={item.id}>
						<p>
							<strong>{item.question}</strong>
							{item.answer}
						</p>
					</li>
				))}
			</ul>
		</section>
	);
};
