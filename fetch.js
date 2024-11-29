const url =
  "https://firestore.googleapis.com/v1/projects/guess-the-number-3b8b3/databases/(default)/documents/PlayerData/test";

async function getData() {
  const request = new Request(url, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "PUT", // Use PUT to overwrite or create the document
    body: JSON.stringify({
      fields: {
        Highscore: { stringValue: "hello" },
        Password: { stringValue: "hi" },
        version: { stringValue: "hey" },
      },
    }),
  });

  try {
    const response = await fetch(request);

    if (!response.ok) {
      const errorText = await response.text(); // Fetch error details
      throw new Error(`Request failed: ${response.status} - ${errorText}`);
    }

    const data = await response.json();
    console.log("Firestore Response:", data);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

getData();
