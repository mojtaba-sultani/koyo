document.getElementById('custom-file').addEventListener('change', function(event) {
    const fileName = event.target.files[0] ? event.target.files[0].name : 'انتخاب فایل';
    document.querySelector('.custom-file-label').textContent = fileName;
  });
  