import { useState } from "react";
import { Button } from "../button/Button";

export const Feedback = () => {
	const [name, setName] = useState("");
	const [reason, setReason] = useState("help");
	const [hasError, setHasError] = useState(false);

	const handleNameChange = (evt) => {
		setName(evt.target.value);
		setHasError(evt.target.value.trim().length === 0);
	};

	return (
		<section>
			<h3>Feedback</h3>
			<form>
				<label htmlFor="name">Your name</label>
				<input
					value={name}
					id="name"
					className="controll"
					type="text"
					style={{
						border: hasError ? "1px solid red" : null,
					}}
					onChange={handleNameChange}
				/>
				<label htmlFor="reason">Reason for appeal</label>
				<select
					value={reason}
					id="reason"
					className="controll"
					onChange={(evt) => setReason(evt.target.value)}>
					<option value="error">Error</option>
					<option value="help">Need help</option>
					<option value="suggest">Suggest</option>
				</select>

				<pre>
					Name: {name}
					<br />
					Reason: {reason}
				</pre>

				<Button disabled={hasError} isActive={!hasError}>Submit</Button>
			</form>
		</section>
	);
};
