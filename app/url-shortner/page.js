"use client";

// React Components
import React, { useState, useEffect } from "react";

// Next JS Components
import Form from "next/form";

// Server actions
import { generateShortUrl } from "@/actions/form";

// Dependancies
import { toast } from "react-toastify";

const urlShortner = () => {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [generatedUrl, setGeneratedUrl] = useState("");
  const [myShortUrls, setMyShortUrls] = useState([]);

  // Get all the short URLs by hitting a GET request to the API
  useEffect(() => {
    const getShortUrls = async () => {
      const response = await fetch("http://localhost:3000/api/shorturls");

      if (response.ok) {
        const result = await response.json();
        console.log(result.data);
        setMyShortUrls(result.data);
      }
    };

    getShortUrls();
  }, []);

  const handleFormSubmit = async (e) => {
    // Try to generate the short URL
    const res = await generateShortUrl({ url, shortUrl, setUrl, setShortUrl });

    // Successful generation
    if (res) {
      toast.success("Short Url generated.", {
        position: "top-right",
        autoClose: 3500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }

    // Unsuccessful generation
    else {
      toast.error("Short Url is already occupied.", {
        position: "top-right",
        autoClose: 3500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });

      return;
    }

    // Show the new generated URL
    setGeneratedUrl(`http://localhost:3000/${shortUrl}`);

    // Reset the form
    setUrl("");
    setShortUrl("");
  };

  return (
    <div className="flex flex-col w-full h-full items-center justify-center">
      <main className="mt-[13rem] mb-[6rem] bg-neutral-200 flex flex-col gap-[1rem] p-[3rem] text-black">
        <h1 className="text-4xl mb-[1rem]">Shorten your URL</h1>

        <Form className="flex flex-col gap-[1rem]" action={handleFormSubmit}>
          <input name="url" value={url} onChange={(e) => setUrl(e.target.value)} placeholder="URL" className="px-[1rem] py-[0.25rem] bg-neutral-300 text-black placeholder:text-neutral-500 rounded-lg cursor-text" />
          <input name="short-url" value={shortUrl} onChange={(e) => setShortUrl(e.target.value)} placeholder="Preferred shortened URL" className="px-[1rem] py-[0.25rem] bg-neutral-300 text-black placeholder:text-neutral-500 rounded-lg cursor-text" />

          <button type="submit" className="bg-gradient-to-r from-[#9656fe] to-[#7031f1] hover:bg-gradient-to-bl px-4 py-2 rounded-lg text-white">
            Generate
          </button>
        </Form>

        {myShortUrls.length > 0 && (
          <div className="flex flex-col gap-[0.25rem] mt-[1rem]">
            <h2 className="text-2xl">Your Short URLs</h2>

            {myShortUrls.map((shortUrl) => (
              <a key={shortUrl._id} href={shortUrl.url} target="_blank" rel="noreferrer" className="text-blue-500 hover:text-blue-700">
                {shortUrl.shortUrl}
              </a>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default urlShortner;
