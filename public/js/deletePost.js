const deletePostFormHandler = async (event) => {
  console.log("hello");
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");

    const response = await fetch(`/api/posts/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      document.location.replace(`/dashboard`);
    } else {
      alert("Post could not be deleted at this time.  Please try again later.");
    }
  }
};

document
  .querySelector("#delete-post-btn")
  .addEventListener("click", deletePostFormHandler);
