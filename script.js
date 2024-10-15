
//navbar functionality 
 
const sidebarCheckbox = document.getElementById('sidebar-active');
const linksContainer = document.querySelector('.links-container');

sidebarCheckbox.addEventListener('click', () => {
    if (sidebarCheckbox.checked) {
      linksContainer.style.right = '0';
    } else {
      linksContainer.style.right = '-100%';
    }
  });
