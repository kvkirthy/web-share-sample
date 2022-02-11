
  const shareData = {
      title: 'Drake Doppelganger',
      text: '💡Share like a pro from your web application',
      url: 'https://kvkirthy.github.io/web-share-sample'
    }
  
    const btn = document.querySelector('svg');
  
    // Share must be triggered by "user activation"
    btn.addEventListener('click', async () => {
      try {
        let result = await navigator.share(shareData);
        document.getElementById("status").innerText = result || '';
      } catch(err) {
        document.getElementById("status").innerText = "Share not complete";
      }
    });