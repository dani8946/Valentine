const noButton = document.querySelector('.no-btn');

noButton.addEventListener('mouseover', () => {
  const newX = Math.random() * (window.innerWidth - noButton.clientWidth);
  const newY = Math.random() * (window.innerHeight - noButton.clientHeight);
  
  noButton.style.position = 'absolute';
  noButton.style.left = newX + 'px';
  noButton.style.top = newY + 'px';
  
  // Add animation class
  noButton.classList.add('flying');
  
  // Remove animation class after animation ends
  setTimeout(() => {
    noButton.classList.remove('flying');
  }, 1000); // Adjust this time according to the duration of your animation
});

document.addEventListener("DOMContentLoaded", function() {
    const yesButton = document.querySelector('.yes-btn');
    const valentineImage = document.getElementById('Valentine');

    yesButton.addEventListener('click', function() {
        // Change the image source to your GIF
        valentineImage.src = 'snoopy-valentine-card.gif';
        // Optionally, you can also hide the buttons after the user clicks "Yes"
        const popButtons = document.querySelector('.pop');
        popButtons.style.display = 'none';
        const loveYouTooDiv = document.createElement('div');
        loveYouTooDiv.innerHTML = '<p style="font-weight: bold; text-transform: uppercase;">I LOVE YOU TOO</p>';
        // Append the new div below the GIF image
        valentineImage.parentNode.appendChild(loveYouTooDiv);
    });
});
