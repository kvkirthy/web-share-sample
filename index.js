
  const shareData = {
      title: 'Drake ',
      text: 'Share like a pro',
      url: 'https://developer.mozilla.org'
    }
  
    const btn = document.querySelector('svg');
  
    // Share must be triggered by "user activation"
    btn.addEventListener('click', async () => {
      try {
        let result = await navigator.share(shareData);
        document.getElementById("status").innerText = result;
      } catch(err) {
        document.getElementById("status").innerText = "Share not complete";
      }
    });