import PropTypes from "prop-types";

function SubheadingAnchor({children, headingLevel}){


	const validHeadingLevels = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

    const safeHeading = headingLevel;
    const Title = validHeadingLevels.includes(safeHeading) ? safeHeading : 'p';
	

	return(
		<a className="subheadingAnchor" href={"#" + children.toLocaleLowerCase().replaceAll(" ","-")}>
			<Title id={children.toLocaleLowerCase().replaceAll(" ","-")}>
			{children} ⚓
			</Title>
		</a>
	)
}

SubheadingAnchor.propTypes = {
	children: PropTypes.string.isRequired,
	headingLevel: PropTypes.string
}

export default SubheadingAnchor;