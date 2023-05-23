function humanFileSize(bytes, si=false, dp=1) {
  const thresh = si ? 1000 : 1024;

  if (Math.abs(bytes) < thresh) {
    return bytes + ' B';
  }

  const units = si 
    ? ['kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'] 
    : ['KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'];
  let u = -1;
  const r = 10**dp;

  do {
    bytes /= thresh;
    ++u;
  } while (Math.round(Math.abs(bytes) * r) / r >= thresh && u < units.length - 1);


  return bytes.toFixed(dp) + ' ' + units[u];
}
$("#table").bootstrapTable({
  // url: "./data1.json",
  url: "https://api.github.com/repos/Anuragchindaliya/mdu-msc-java/contents/data",
  pagination: true,
  search: true,
  sortStable: true,
  columns: [
    {
      field: "sr",
      title: "Sr. no.",
    },
    {
      field: "size",
      title: "Size",
      formatter:(value)=>{
        return humanFileSize(value,true)
      }
    },
    {
      field: "name",
      title: "Topic",
    },
    {
      field: "download_url",
      title: "View",
      formatter:(value,row)=>{
        console.log({value,row})
        return `<a class='btn btn-primary' href='${row?.html_url}' target='blank'>View</a> <a class='btn btn-success' href='${value}' download>Download</a>`
      }
    },
  ],
});
$('#sortStable').change(function () {
    $table.bootstrapTable('refreshOptions', {
      sortStable: $('#sortStable').prop('checked')
    })
  })
