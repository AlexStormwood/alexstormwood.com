import "../styles/Footer.css";

export default function Footer(){
	return(
		<footer>
			<h6>Copyright &copy; {new Date(Date.now()).getFullYear()} Alex Stormwood</h6>
			<a className="footerButton" href="https://github.com/sponsors/BigfootDS"><h6>Sponsor Me</h6></a>
		</footer>
	)
}