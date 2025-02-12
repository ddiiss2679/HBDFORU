
onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    const titles = ('HAPPY BIRTHDAY ITAAA😻, semoga panjang leher eh panjang umur, sehat selalu, jadi anak baik, soleh, dan berbakti kepada orang tua, rezekinya lancar terus ya🙇🏻, always happy and healthy🤍🙇🏼‍♂ ').split('')
    const titleElement = document.getElementById('title');
    let index = 0;

    function appendTitle() {
      if (index < titles.length) {
        titleElement.innerHTML += titles[index];
        index++;
        setTimeout(appendTitle, 300); // 1000ms delay
      }
    }

    appendTitle();

    clearTimeout(c);
  }, 1000);
};