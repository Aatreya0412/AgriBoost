document.getElementById('startSpraying')?.addEventListener('click', () => {
  const status = document.getElementById('droneStatus');
  status.textContent = 'Status: Spraying in progress...';

  setTimeout(() => {
      status.textContent = 'Status: Task Completed';
      alert('Spraying completed!');
  }, 5000);
});
