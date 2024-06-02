import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


export default function RootLayout(){
	
	return(
		<>
			<div id="root-container">
				<Navbar />
				<div id="positionHelper">
					
					<main>
						<Outlet />
					</main>
					<Footer />
				</div>
			</div>
			
		</>
	)
}