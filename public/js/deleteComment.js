const deleteFormHandler = async (event) => {
  const postId = document.querySelector("#post-id").getAttribute("value");

  console.log("hello");
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");

    const response = await fetch(`/api/comment/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      document.location.replace(`/post/${postId}`);
    } else {
      alert(
        "Comment could not be deleted at this time.  Please try again later."
      );
    }
  }
};

document
  .querySelector("#delete-btn")
  .addEventListener("click", deleteFormHandler);
