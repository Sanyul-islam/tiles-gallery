"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const SearchBar = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [search, setSearch] = useState(searchParams.get("search") || "");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (search.trim()) {
      router.push(`/all-tiles?search=${encodeURIComponent(search.trim())}`);
    } else {
      router.push("/all-tiles");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex max-w-2xl mx-auto mb-12 justify-center"
    >
      <div className="join w-6/12 gap-1">
      
        <input
          type="text"
          placeholder="Search tiles..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="input input-bordered join-item w-full"
        />
        
        <button type="submit" className="btn btn-primary join-item">
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
