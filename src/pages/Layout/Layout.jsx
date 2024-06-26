import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
function Layout() {
	return (
		<>
			<main className="container">
				<Navbar />
				<section>
					<Outlet />
				</section>
			</main>
			<Footer />
		</>
	);
}

export default Layout;
