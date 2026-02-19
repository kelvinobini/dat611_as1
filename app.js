async function fetchUsers() {
  try {
    // Open the tfjs-vis visor panel to ensure the plotting area is visible
    tfvis.visor().open();

    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );

    const users = await response.json();

    // Transform data to get the number of characters in each company name
    const labels = users.map(user => user.name);
    const values = users.map(user => user.company.name.length);

    plotChart(labels, values);

  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchUsers();

function plotChart(labels, values) {
  const data = labels.map((label, i) => ({
    index: label,
    value: values[i]
  }));

  // Render the barchart
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