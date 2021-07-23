$("#table").bootstrapTable({
  url: "./data1.json",
  pagination: true,
  search: true,
  sortStable: true,
  columns: [
    {
      field: "sr",
      title: "Sr. no.",
    },
    {
      field: "id",
      title: "Unit",
    },
    {
      field: "name",
      title: "Topic",
    },
    {
      field: "price",
      title: "View",
    },
  ],
});
$('#sortStable').change(function () {
    $table.bootstrapTable('refreshOptions', {
      sortStable: $('#sortStable').prop('checked')
    })
  })
