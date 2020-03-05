<script>
  import { onMount } from "svelte";
  import Chart from "chart.js";

  const chartData = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September"
    ],
    datasets: [
      {
        label: "# of Votes",
        data: [15, 10, 17, 6, 11, 9, 12, 16, 11],
        borderWidth: 2,
        borderColor: "rgb(3,117,220)",
        backgroundColor: "rgba(3,117,220,0.2)"
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
    var ctx = document.getElementById("areaChart");
    var myChart = new Chart(ctx, {
      type: "line",
      data: chartData,
      options: chartOptions
    });
  }

  onMount(createChart);
</script>

<canvas id="areaChart" />
