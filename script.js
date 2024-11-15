document.getElementById('custom-file').addEventListener('change', function(event) {
    const fileName = event.target.files[0] ? event.target.files[0].name : 'انتخاب فایل';
    document.querySelector('.custom-file-label').textContent = fileName;
  });
  document.getElementById('custom-file1').addEventListener('change', function(event) {
    const fileName = event.target.files[0] ? event.target.files[0].name : 'انتخاب فایل';
    document.querySelector('.custom-file-label1').textContent = fileName;
  });
  function updateOutput(input, outputId) {
    const output = document.getElementById(outputId);
    output.value = input.value;
}