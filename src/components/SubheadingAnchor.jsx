import PropTypes from "prop-types";
import { useEffect } from "react";
import { useArticleToc } from "../contexts/ArticleTocContextSetup";
import { HashLink } from "react-router-hash-link";
import { useLocation } from "react-router-dom";

function SubheadingAnchor({children, headingLevel}){

	const location = useLocation();

	const validHeadingLevels = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

    const safeHeading = headingLevel;
    const Title = validHeadingLevels.includes(safeHeading) ? safeHeading : 'p';
	
	const [, setArticleToc] = useArticleToc();

	useEffect(() => {
		setArticleToc((previousState) => {
			let prevStateCopy = previousState.filter((tocEntryObj) => {
				// console.log(tocEntryObj.path, location.pathname);
				if (tocEntryObj.path == location.pathname){
					return true;
				}
			})
			prevStateCopy = [...prevStateCopy,{
				label: children,
				section: "#" + children.toLocaleLowerCase().replaceAll(" ","-"),
				path: location.pathname.substring(0)
			}];
			let prevStateUniqued = new Set(prevStateCopy.map(JSON.stringify));
			prevStateCopy = Array.from(prevStateUniqued).map(JSON.parse);
			
			

			return [
				...prevStateCopy
			]
		});
	}, [children, location, setArticleToc]);

	return(
		<HashLink className="subheadingAnchor" to={"#" + children.toLocaleLowerCase().replaceAll(" ","-")}>
			<Title id={children.toLocaleLowerCase().replaceAll(" ","-")}>
			{children} ⚓
			</Title>
		</HashLink>
	)
}

SubheadingAnchor.propTypes = {
	children: PropTypes.string.isRequired,
	headingLevel: PropTypes.string
}

export default SubheadingAnchor;