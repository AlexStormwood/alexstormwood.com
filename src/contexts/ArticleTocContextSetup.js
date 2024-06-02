import { createContext, useContext } from "react";

export const ArticleTocContext = createContext(null);

export function useArticleToc(){
	return useContext(ArticleTocContext);
}

