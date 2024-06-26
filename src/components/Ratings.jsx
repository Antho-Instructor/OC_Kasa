import star from "../assets/images/star.svg";
import star_active from "../assets/images/star_active.svg";

function Ratings({ ratings }) {
	const stars = [];
	for (let i = 1; i <= 5; i++) {
		if (i <= ratings) {
			stars.push(
				<img
					key={i}
					src={star_active}
					alt="star active"
					className="star"
				/>
			);
		} else {
			stars.push(<img key={i} src={star} alt="star" className="star" />);
		}
	}
	return <div>{stars}</div>;
}

export default Ratings;
