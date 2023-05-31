Your task is to implement a function, renderTable, that takes an array of data objects as input and dynamically renders the table rows based on the visible portion of the viewport. The table should display only a limited number of rows at a time, determined by the height of the viewport.

Use the following code stub as a starting point:

```javascript

function renderTable(data) {
  const tableBody = document.getElementById('tableBody');
  const viewportHeight = window.innerHeight;
  const tableRowHeight = /* Specify the height of each table row in pixels */;

  // Calculate the number of rows that can fit in the viewport
  const visibleRowCount = Math.floor(viewportHeight / tableRowHeight);

  // Determine the start and end indices of the visible rows
  const startIndex = /* Calculate the start index based on the scroll position */;
  const endIndex = /* Calculate the end index based on the start index and visible row count */;

  // Clear the table body
  tableBody.innerHTML = '';

  // Render the visible rows in the table
  for (let i = startIndex; i < endIndex; i++) {
    const rowData = data[i];

    // Create a new table row element
    const row = document.createElement('tr');

    // Add the row data to the table row element
    /* Add the necessary code to append the row data to the table row element */

    // Append the table row to the table body
    /* Add the necessary code to append the table row to the table body */
  }
}

// Call the renderTable function with the initial dataset
const initialData = /* Provide the initial dataset */;
renderTable(initialData);

// Complete the code by filling in the missing parts indicated by comments. You need to determine the height of each table row, calculate the start and end indices of the visible rows based on the scroll position, and append the row data to the table row element and the table row to the table body.

// Note: The data array contains the objects representing the rows of the table, and the tableBody variable refers to the <tbody> element where the table rows should be rendered.

// Provide your complete solution, ensuring that the function renderTable correctly renders the visible rows of the table based on the viewport height and scroll position.

```


## Solution 
```javascript 
function renderTable(data) {
  const tableBody = document.getElementById('tableBody');
  const viewportHeight = window.innerHeight;
  const tableRowHeight = 30; // Assuming each table row has a fixed height of 30 pixels

  // Calculate the number of rows that can fit in the viewport
  const visibleRowCount = Math.floor(viewportHeight / tableRowHeight);

  // Determine the start and end indices of the visible rows
  const startIndex = Math.floor(window.scrollY / tableRowHeight);
  const endIndex = startIndex + visibleRowCount;

  // Clear the table body
  tableBody.innerHTML = '';

  // Render the visible rows in the table
  for (let i = startIndex; i < endIndex; i++) {
    if (i >= 0 && i < data.length) {
      const rowData = data[i];

      // Create a new table row element
      const row = document.createElement('tr');

      // Add the row data to the table row element
      for (let key in rowData) {
        const cell = document.createElement('td');
        cell.textContent = rowData[key];
        row.appendChild(cell);
      }

      // Append the table row to the table body
      tableBody.appendChild(row);
    }
  }
}

// Call the renderTable function with the initial dataset
const initialData = [
  { id: 1, name: 'John Doe', age: 25 },
  { id: 2, name: 'Jane Smith', age: 30 },
  { id: 3, name: 'Bob Johnson', age: 35 },
  // Add more data objects as needed
];
renderTable(initialData);
```