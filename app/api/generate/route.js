import clientPromise from "@/lib/mongodb";

export async function POST(request) {
  try {
    // Parse the incoming JSON body
    const body = await request.json();

    // Basic validation for the required fields
    if (!body.url || !body.shortUrl) {
      return new Response(
        JSON.stringify({
          success: false,
          error: true,
          message: "Missing required fields: url or shortUrl",
        }),
        { status: 400 }
      );
    }

    // Connect to MongoDB client and collection
    const client = await clientPromise;
    const db = client.db("Bit-Links");
    const collection = db.collection("Bit-Links");

    // Check if the shortUrl already exists in the database
    const existingDoc = await collection.findOne({ shortUrl: body.shortUrl });

    if (existingDoc) {
      return new Response(
        JSON.stringify({
          success: false,
          error: true,
          message: "Short URL already exists",
        }),
        { status: 409 }
      );
    }

    // Insert the new link into the database
    const result = await collection.insertOne({
      url: body.url,
      shortUrl: body.shortUrl,
    });

    // If insertion is successful, send a success response
    return new Response(
      JSON.stringify({
        success: true,
        error: false,
        message: "Inserted successfully",
        data: { id: result.insertedId },
      }),
      { status: 201 }
    );
  } catch (error) {
    console.error("Error inserting data into the database:", error);

    return new Response(
      JSON.stringify({
        success: false,
        error: true,
        message: "Failed to insert data",
        details: error.message,
      }),
      { status: 500 }
    );
  }
}
