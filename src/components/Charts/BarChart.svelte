<script>
  import { onMount } from "svelte";
  import Chart from "chart.js";

  const chartData = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "# of Votes",
        data: [4, 6, 10, 12, 15, 19],
        backgroundColor: "rgba(3,117,220)"
      }
    ]
  };
  const chartOptions = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          }
        }
      ]
    }
  };

  function createChart() {
    var ctx = document.getElementById("barChart");
    var myChart = new Chart(ctx, {
      type: "bar",
      data: chartData,
      options: chartOptions
    });
  }

  onMount(createChart);
</script>

<canvas id="barChart" />
