import { Search } from "lucide-react";

interface SearchBarProps {
  placeholder?: string;
}

export default function SearchBar({
  placeholder = "Search projects...",
}: SearchBarProps) {
  return (
    <div className="search-bar">
      <Search size={18} />
      <input
        type="text"
        placeholder={placeholder}
      />
    </div>
  );
}