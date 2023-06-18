const sentences = [
    "I love basketball",
    "I am a programmer",
    "I enjoy pineapple on pizza",
    "I love sleeping"
  ];
  
  const typewriterElement = document.getElementById("typewriter");
  let sentenceIndex = 0;
  let charIndex = 0;
  
  function type() {
    if (charIndex < sentences[sentenceIndex].length) {
      typewriterElement.innerHTML += sentences[sentenceIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, 100);
    } else {
      charIndex = 0;
      sentenceIndex++;
      if (sentenceIndex === sentences.length) {
        sentenceIndex = 0;
      }
      setTimeout(erase, 2000);
    }
  }
  
  function erase() {
    if (charIndex >= 0) {
      typewriterElement.innerHTML = sentences[sentenceIndex].substring(0, charIndex);
      charIndex--;
      setTimeout(erase, 50);
    } else {
      setTimeout(type, 100);
    }
  }
  
  export default type;
  