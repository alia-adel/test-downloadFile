
/**
 * Reference: https://davidwalsh.name/fetch
 */
function downloadFile() {
    var myHeaders = new Headers({
        'Content-Type': 'image/jpeg',
      });

    // fetch('https://cdn.pixabay.com/photo/2015/10/09/00/55/lotus-978659_1280.jpg', {Headers: myHeaders})
    //     .then(response => response.blob())
    //     .then(blob => URL.createObjectURL(blob))
    //     .then(url => {
    //         window.open(url, '_blank');
    //         URL.revokeObjectURL(url);
    //     });


//https://s.productreview.com.au/products/images/336982_4c9a96ee63861.jpg
      fetch('https://alia-adel.github.io/test-downloadFile/assets/FetchReadableStream.zip')
    // fetch('https://lync.itworx.com//lwa/Plugins/LWAPlugin64BitInstaller32.msi')
    // fetch('https://alia-adel.github.io/MOGO-Portfolio/assets/images/Layer%2043.jpg')
	.then(function(response) {
    //   return response.blob();
      return response.blob().then(blob => {
        return {
          contentType: response.headers.get("Content-Type"),
          raw: blob
        }
      })
	})
	.then(function(blob) {
    
        //window.open(URL.createObjectURL(imageBlob), '_blank');
        // 
        // download(imageBlob, "dlText.jpg", "image/jpeg");
        console.log(blob.contentType);
        let fileName = 'report-'+ new Date;
        fileName+=(blob.contentType === 'application/zip')?'.zip':'';
        
        download(blob.raw, fileName, blob.contentType);
	//   document.querySelector('img').src = URL.createObjectURL(imageBlob);
	});

        
}