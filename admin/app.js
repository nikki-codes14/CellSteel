document.addEventListener('DOMContentLoaded', function() {
  fetch('http://your_ec2_instance_public_ip:3000/collections/')
    .then(response => response.json())
    .then(data => {
      const container = document.getElementById('data');
      container.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
    })
    .catch(error => console.error('Error fetching data:', error));
});
