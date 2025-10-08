export default function SearchBar({ searchTerm, setSearchTerm }) {
    return (
        <div className="search-bar">
            <label> Search:</label>
            <input
                type="text"
                placeholder="Search by name or phone..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
        </div>
    );
}
