async function fetchUsers() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );

    const users = await response.json();

    // Transform data
    // Example: Number of characters in company name
    const labels = users.map(user => user.name);
    const values = users.map(user => user.company.name.length);

    plotChart(labels, values);

  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchUsers();

function plotChart(labels, values) {

  const data = {
    values: labels.map((label, i) => ({
      x: label,
      y: values[i]
    }))
  };

  tfvis.render.barchart(
    { name: "Company Name Length per User" },
    data,
    {
      xLabel: "Users",
      yLabel: "Length",
      height: 400
    }
  );
}


