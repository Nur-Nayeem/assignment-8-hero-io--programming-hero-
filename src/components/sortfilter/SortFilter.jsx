const SortFilter = ({ sortOrder, setSortOrder }) => {
  return (
    <label className="form-control w-full max-w-40">
      <select
        className="select select-bordered"
        value={sortOrder}
        onChange={(e) => setSortOrder(e.target.value)}
      >
        <option disabled={true} value="none">
          Sort by Downloads
        </option>
        <option value="asc">Low-&gt;High</option>
        <option value="desc">High-&gt;Low</option>
      </select>
    </label>
  );
};

export default SortFilter;
