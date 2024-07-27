import { useState } from 'react';
import SearchProductsContext from './SearchProductsContext';

type SearchProductsProviderProps = {
  children: React.ReactNode;
};
function SearchProductsProvider({ children }: SearchProductsProviderProps) {
  const [searchTermCT, setSearchTermCT] = useState<string>('');
  const [searchCategoryCT, setSearchCategoryCT] = useState<string>('');

  return (
    <SearchProductsContext.Provider
      value={ { searchTermCT, setSearchTermCT, searchCategoryCT, setSearchCategoryCT } }
    >
      {children}
    </SearchProductsContext.Provider>
  );
}

export default SearchProductsProvider;
