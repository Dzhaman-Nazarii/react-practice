import { useState } from "react";
import { Button } from "../button/Button";
import { studyList } from "../../data/note";

export const Study = () => {
	const [content, setContent] = useState("Press on button");

	const handleClick = (type) => {
		setContent(type);
	};

	return (
		<section>
			<h3>Study React</h3>
			<Button
				isActive={content === "notes"}
				handleClick={() => handleClick("notes")}>
				Notes
			</Button>
			<Button
				isActive={content === "tasks"}
				handleClick={() => handleClick("tasks")}>
				Tasks
			</Button>
			<Button
				isActive={content === "videos"}
				handleClick={() => handleClick("videos")}>
				Videos
			</Button>
			<Button
				isActive={content === "books"}
				handleClick={() => handleClick("books")}>
				Books
			</Button>

			<p>{studyList[content] || "Press on button"}</p>
		</section>
	);
};
