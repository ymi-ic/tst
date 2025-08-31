const message = `i dont even know if youll ever read this.\nbut if you do…  just want you to know, it hurts me alot too more than you think so.\n\ni didnt choose to end it that way and i would never meant to harm you both physically and mentally.\n\nim sorry for what decision ive already made. if i were you i wouldve hated me too. \n\nanyways, i hope you're doing okay,eat well study well rest well have fun with your life, even though wee are not in each other’s lives anymore. \n\nclick the reset button in your head and youre good to go.`;

function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }

    typeWriter();
  }, 600);
}
