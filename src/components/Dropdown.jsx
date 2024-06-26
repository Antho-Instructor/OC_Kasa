import { useState } from "react";
import arrowTop from "../assets/images/arrow_top.svg";

function Dropdown({ title, children }) {
	const [isOpen, setIsOpen] = useState(false);

	const toggleOpen = () => setIsOpen(!isOpen);

	return (
		<details onToggle={toggleOpen}>
			<summary>
				<span className="dropdown-title">{title}</span>
				<span
					className="emoji"
					style={{
						backgroundImage: `url(${arrowTop})`,
					}}
				></span>
			</summary>
			<p>{children}</p>
		</details>
	);
}

export default Dropdown;
