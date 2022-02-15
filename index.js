   const drakeProfileData = {
      title: 'Drake Doppelganger',
      text: '💡Share like a pro from your web application',
      url: 'https://kvkirthy.github.io/web-share-sample'
    }
  
    const btn = document.querySelector('svg');
  
    // Share must be triggered by "user activation"
    btn.addEventListener('click', async () => {
      try {
        if(navigator.canShare 
            && typeof navigator.canShare === 'function' 
            && navigator.canShare(drakeProfileData)){
          let result = await navigator.share(drakeProfileData);
          document.getElementById("status").innerText = result || '';
        } else {
          document.getElementById("status").innerText = "Sharing selected data not supported.";
        }
      } catch(err) {
        document.getElementById("status").innerText = "Share not complete";
      }
    });