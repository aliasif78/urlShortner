"use server";
export const generateShortUrl = async (params) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify({
    url: params.url,
    shortUrl: params.shortUrl,
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/generate`, requestOptions);

    // Successful response
    if (response.ok) {
      const result = await response.json();
      return true;
    }

    // Unsuccessful response
    else {
      const errorResult = await response.json();
      console.error("Error generating short URL:", errorResult);
      return false;
    }
  } catch (error) {
    console.error("Error in fetching data:", error);
    return false;
  }
};
