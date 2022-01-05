import React from 'react';
import { DebounceInput } from 'react-debounce-input';
import { FiSearch } from 'react-icons/fi';

type Props = {
  search: string | null;
  onSearch: (s: string) => void;
};

const Search: React.FC<Props> = ({ search, onSearch }) => {
  return (
    <div className="relative mb-4">
      <label htmlFor="search-alcohols" className="absolute left-4 top-3">
        <FiSearch aria-label="Sök produkter" />
      </label>

      <DebounceInput
        type="text"
        value={search ?? ''}
        minLength={2}
        debounceTimeout={300}
        onChange={(e) => onSearch(e.target.value)}
        placeholder="Sök efter produkter"
        id="search-alcohols"
        name="search-alcohols"
        className="border border-slate-400 rounded-full w-full h-10 px-10 focus:outline-none focus:border-2"
      />
    </div>
  );
};

export default Search;
