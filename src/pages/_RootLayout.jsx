import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect } from "react";


export default function RootLayout(){
	
	useEffect(() => {
		document.title = "Alex Stormwood";
	});

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