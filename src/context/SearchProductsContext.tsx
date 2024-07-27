import { createContext } from 'react';

type SearchProductsContextType = {
  searchTermCT: string;
  setSearchTermCT: React.Dispatch<React.SetStateAction<string>>
  searchCategoryCT: string;
  setSearchCategoryCT: React.Dispatch<React.SetStateAction<string>>
};

const SearchProductsContext = createContext({} as SearchProductsContextType);

export default SearchProductsContext;
