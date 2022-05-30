document.querySelector('#clicks').addEventListener('click', () => {
    const clicks = document.querySelector('#clicks');
    const recebe = parseInt(clicks.innerHTML.split('-')[1], 10);
    clicks.innerHTML = `Click aqui que eu conto - ${recebe + 1}`;
});
    