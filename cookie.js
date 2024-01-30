function getStorageItems() {
    let items = [];
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        let value = localStorage.getItem(key);
        items.push(`<li><span>${key}</span> - <span>${value}</span> <button class='btnSil' data-id='${key}'>Sil</button></li>`);
    }
    document.getElementById('keyValues').innerHTML = items.join('');
}




document.addEventListener('DOMContentLoaded', function () {
    // $('#id')
    // $('.class')

    getStorageItems();

    const keyInput = document.getElementById('keyInput');
    const valueInput = document.getElementById('valueInput');
    const saveButton = document.getElementById('saveButton');
    const listElement = document.getElementById('keyValues');


    // const demo = document.getElementById('demo');

    // const KEY = 'userName';

    // const savedName = localStorage.getItem(KEY);

    // if (savedName) {
    //     demo.textContent = `Welcome ${savedName}`;
    // }

    saveButton.addEventListener('click', () => {
        const value = valueInput.value;
        const key = keyInput.value;
        localStorage.setItem(key, value);

        getStorageItems();
    });



    listElement.addEventListener('click', (event) => {
        if (event.target.classList.contains('btnSil')) {
            const key = event.target.getAttribute('data-id');
            localStorage.removeItem(key);
            getStorageItems();
        }
    });
    // $('#saveButton').click(() => { });
    // $('#saveButton').on('click', () => { });

    // const nameOutput = document.getquerySelector('.nameOutput');
    // const nameOutput = document.getquerySelector('#nameOutput');

    // const nameInput = $('#nameInput');
    // const nameInput = $('.nameInput');


});
