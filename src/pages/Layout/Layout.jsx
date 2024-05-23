import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
function Layout() {
	return (
		<main className="container">
			<Navbar />
			<h1>
				<Outlet />
			</h1>
		</main>
	);
}

export default Layout;
