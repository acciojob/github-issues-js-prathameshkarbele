//your code here
const issuesList = document.getElementById("issuesList");
const loadNextBtn = document.getElementById("load_next");
const loadPrevBtn = document.getElementById("load_prev");

let currentPage = 1;

function fetchIssues(pageNumber) {
  const url = `https://api.github.com/repositories/1296269/issues?page=${pageNumber}&per_page=5`;
  fetch(url)
    .then(response => response.json())
    .then(data => {
      issuesList.innerHTML = "";
      data.forEach(issue => {
        const li = document.createElement("li");
        li.innerText = issue.title;
        issuesList.appendChild(li);
      });
    })
    .catch(error => console.log(error));
}

fetchIssues(currentPage);

loadNextBtn.addEventListener("click", () => {
  currentPage++;
  document.querySelector("h1").innerHTML = `Page number ${currentPage}`;
  fetchIssues(currentPage);
});

loadPrevBtn.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    document.querySelector("h1").innerHTML = `Page number ${currentPage}`;
    fetchIssues(currentPage);
  }
});