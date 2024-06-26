import Dropdown from "../components/Dropdown";
import Header from "../components/Header";

function About() {
	const dropdownData = [
		{
			title: "Fiabilité",
			content:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eleifend aliquet est rhoncus cursus. Quisque dolor lorem, fringilla a felis et, condimentum lobortis dui",
		},
		{
			title: "Respect",
			content:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eleifend aliquet est rhoncus cursus. Quisque dolor lorem, fringilla a felis et, condimentum lobortis dui",
		},
		{
			title: "Service",
			content:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eleifend aliquet est rhoncus cursus. Quisque dolor lorem, fringilla a felis et, condimentum lobortis dui",
		},
		{
			title: "Sécurité",
			content:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eleifend aliquet est rhoncus cursus. Quisque dolor lorem, fringilla a felis et, condimentum lobortis dui",
		},
	];
	return (
		<>
			<Header page="about" />
			<section>
				{dropdownData.map((item, index) => (
					<Dropdown key={index} title={item.title}>
						{item.content}
					</Dropdown>
				))}
			</section>
		</>
	);
}

export default About;
