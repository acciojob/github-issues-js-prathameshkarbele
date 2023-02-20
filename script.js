//your code here
const perPage = 5;
let currentPage = 1;

// Function to fetch and display issues for a given page number
async function fetchIssues(page) {
  const url = `https://api.github.com/repositories/1296269/issues?page=${page}&per_page=${perPage}`;
  const response = await fetch(url);
  const data = await response.json();
  const issuesList = document.getElementById('issues-list');
  issuesList.innerHTML = ''; // Clear previous issues
  for (let i = 0; i < data.length; i++) {
    const issue = data[i];
    const issueName = issue.title;
    const listItem = document.createElement('li');
    listItem.textContent = issueName;
    issuesList.appendChild(listItem);
  }
}

// Initial load of page 1 issues
fetchIssues(currentPage);

// Event listener for loading next page of issues
document.getElementById('load-next').addEventListener('click', async () => {
  currentPage++;
  document.getElementById('page-number').textContent = currentPage;
  await fetchIssues(currentPage);
});

// Event listener for loading previous page of issues
document.getElementById('load-prev').addEventListener('click', async () => {
  if (currentPage > 1) {
    currentPage--;
    document.getElementById('page-number').textContent = currentPage;
    await fetchIssues(currentPage);
  }
});
