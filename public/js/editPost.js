const editPostFormHandler = async (event) => {
  const postId = document.querySelector("#post-id").getAttribute("value");

  const title = document
    .querySelector('input[name="updated-post-title"]')
    .value.trim();
  const contents = document
    .querySelector('input[name="updated-post-contents"]')
    .value.trim();

  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  const response = await fetch(`/api/posts/${id}`, {
    method: "PUT",
    body: JSON.stringify({ title, contents }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace(`/post/${postId}`);
  } else {
    alert(response.statusText);
  }
};

document
  .querySelector("#edit-post-btn")
  .addEventListener("click", editPostFormHandler);
