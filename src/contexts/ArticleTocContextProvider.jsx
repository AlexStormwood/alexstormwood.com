import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { ArticleTocContext } from "./ArticleTocContextSetup";
import { useLocation } from "react-router-dom";



function ArticleTocProvider({children}){

	let [articleToc, setArticleToc] = useState([]);
	let location = useLocation();
	let [previousPath, setPreviousPath] = useState("");

	useEffect(() => {
		if (location.pathname !== previousPath){
			setPreviousPath(location.pathname);
			setArticleToc([]);


		}
	}, [location, previousPath]);

	

	return(
		<ArticleTocContext.Provider value={[articleToc, setArticleToc]} >
				{children}
		</ArticleTocContext.Provider>
	)
}

ArticleTocProvider.propTypes = {
	children: PropTypes.object.isRequired
};

export default ArticleTocProvider;

