import { Comment } from "../../interfaces";

export async function fakePostComment(comment: Comment) {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(comment),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    if (response.ok) {
      const json = await response.json();
      console.log(json);
      return true;
    }
    return false;
  } catch (error) {
    console.log(error);
    throw new Error("Error during comment submission");
  }
}
