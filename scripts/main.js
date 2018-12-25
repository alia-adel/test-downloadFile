
/**
 * References: 
 * https://davidwalsh.name/fetch
 * http://danml.com/download.html
 * https://www.npmjs.com/package/downloadjs
 */
function downloadFile(fileType) {
  var url = '';
  if(fileType === 'img'){
    url = 'https://alia-adel.github.io/test-downloadFile/assets/img.jpg';
  }

  if(fileType === 'zip'){
    url = 'https://alia-adel.github.io/test-downloadFile/assets/FetchReadableStream.zip';
  }
  // fetch('https://lync.itworx.com//lwa/Plugins/LWAPlugin64BitInstaller32.msi')
    fetch(url)
    .then(function (response) {
      //   return response.blob();
      return response.blob().then(blob => {
        return {
          contentType: response.headers.get("Content-Type"),
          raw: blob
        }
      })
    })
    .then(function (blob) {

      //window.open(URL.createObjectURL(blob), '_blank');
      console.log(blob.contentType);
      var fileName = 'report-' + new Date();
      fileName += (blob.contentType === 'application/zip') ? '.zip' : '';
      download(blob.raw, fileName, blob.contentType);
    });


}