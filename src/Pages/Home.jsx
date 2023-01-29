import React from "react";
import Header from "./Header";
import { Card, FormField, Loader } from "../Components";
import { useState } from "react";
import { useEffect } from "react";

const RenderCards = ({ data, title }) => {
  if (data.length > 0) {
    return data.map((post) => <Card id={post._id} {...post} />);
  }
  return (
    <h2 className="mt-5 font-bold text-xl uppercase text-[#6449ff] ">
      {title}
    </h2>
  );
};

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [allPost, setAllPost] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState("");
  const [searchTimeout, setSearchTimeout] = useState(null);

  useEffect(() => {
    const fetchAllPosts = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://bell-bottoms-eagle.cyclic.app/api/v1/post",
          {
            method: "GET",
            headers: {
              "content-type": "application/json",
            },
          }
        );
        if (response.ok) {
          const results = await response.json();
          setAllPost(results.data.reverse());
        }
      } catch (error) {
        alert(error);
      } finally {
        setLoading(false);
      }
    };
    fetchAllPosts();
  }, []);

  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout);

    setSearchText(e.target.value);
    setSearchTimeout(
      setTimeout(() => {
        const searchResult = allPost.filter(
          (item) =>
            item.name.toLowerCase().includes(searchText.toLowerCase()) ||
            item.prompt.toLowerCase().includes(searchText.toLowerCase())
        );

        setSearchResults(searchResult);
      }, 500)
    );
  };

  return (
    <section className="mx-auto p-7 max-w-7xl ">
      <Header />
      <div className="w-full mt-10 p-5">
        <h1 className="text-[32px] text-gray-900 font-extrabold">
          The Community Showcase
        </h1>
        <p className="mt-2 max-w-[500px] text-[#666e75] text-[16px] ">
          Browse through a collection of immaginative and stunning images
          generated by DALL-E AI
        </p>
      </div>
      <div className="mt-16 p-5">
        <FormField
          labelName="Search Post"
          type="text"
          name="text"
          placeholder="Search here..."
          value={searchText}
          handleChange={handleSearchChange}
        />
      </div>
      <div className="mt-10 p-5">
        {loading ? (
          <div className="flex justify-center items-center">
            <Loader />
          </div>
        ) : (
          <>
            {searchText && (
              <h2 className="font-medium text-[#666e75] text-xl mb-3">
                Showing results of:
                <span className="text-[#222328]">{searchText}</span>
              </h2>
            )}
            <div className="grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2  grid-cols-1 gap-3 ">
              {searchText ? (
                <RenderCards
                  data={searchResults}
                  title="No search result found"
                />
              ) : (
                <RenderCards data={allPost} title="No posts found" />
              )}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Home;