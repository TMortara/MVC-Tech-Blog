const editFormHandler = async (event) => {
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");
    const postId = document.querySelector("#post-id").getAttribute("value");

    const contents = document.querySelector("#updated_contents").value;

    const response = await fetch(`/api/comment/${id}`, {
      method: "PUT",
      body: JSON.stringify({ contents }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace(`/post/${postId}`);
    } else {
      alert(response.statusText);
    }
  }
};

document.querySelector("#edit-btn").addEventListener("click", editFormHandler);
