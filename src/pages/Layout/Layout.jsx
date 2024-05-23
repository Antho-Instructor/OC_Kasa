import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
function Layout() {
	return (
		<main className="container">
			<Navbar />
			<section>
				<Outlet />
			</section>
		</main>
	);
}

export default Layout;
