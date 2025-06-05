document.body.style.background = 'silver';
    document.body.style.fontFamily = 'Segoe UI, sans-serif';
    document.body.style.padding = '20px';
    document.body.style.margin = '0';
    document.body.style.color = '#333';

    const title = document.getElementById('title');
    title.style.color = 'green';
    title.style.textAlign = 'center';
    title.style.fontSize = '3em';
    title.style.padding = '0.5em';
    title.style.background = 'white';
    title.style.marginBottom = '1.2em'

    // const newFruit = document.createElement('li');
    // fruList.appendChild(newFruit);
    // newFruit.textContent = 'Pineapples'

    // const newVeg = document.createElement('li');
    // vegList.appendChild(newVeg);
    // newVeg.textContent = 'Cucumber';


    const style = document.createElement('style');
    style.textContent = `
      p{
      font-size:1.6em;
      margin-left:27em;
      margin-bottom:2em;
      }
      h3 {
        font-size:1.2em;
        margin-left:29em;
        text-transform: uppercase;
        color: #2f4f4f;
      
      }
      ul {
        list-style-type: none;
        padding: 0;
      }
      li {
        margin-bottom:0.2em;
        font-size:1.2em;
        align-items: center;
        margin: 8px 0;
        background: #fff;
        border-radius: 8px;
        padding: 8px;
        box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        transition: transform 0.1s;
        width:20em;
        margin-left:29em;
      }
      li:hover {
        transform: scale(1.01);
        background:rgb(223, 110, 110);
        color:white;
      }
      li img {
        width: 40px;
        height: 40px;
        margin-right: 10px;
        border-radius: 50%;
        object-fit: cover;
      }
    `;
    document.head.appendChild(style);

   
    const fruits = [
      { name: 'Mangoes', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Hapus_Mango.jpg/120px-Hapus_Mango.jpg' },
      { name: 'Bananas', img: 'https://i.pinimg.com/736x/d3/31/8e/d3318ea8157c90078c64ea458436d559.jpg' },
      { name: 'Water Melons', img: 'https://i.pinimg.com/736x/06/37/8d/06378d4b6afbb684dcf41cb9e0ab20fa.jpg' },
      { name: 'Oranges', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Orange-Fruit-Pieces.jpg/120px-Orange-Fruit-Pieces.jpg' }
    ];

    const vegetables = [
      { name: 'Onions', img: 'https://i.pinimg.com/736x/8a/3f/2d/8a3f2d81d4bc14daa58ccf0d7f22909c.jpg' },
      { name: 'Tomatoes', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Tomato_je.jpg/120px-Tomato_je.jpg' },
      { name: 'Kales', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Kale-Bundle.jpg/120px-Kale-Bundle.jpg' },
      { name: 'Spinach', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Spinach_leaves.jpg/120px-Spinach_leaves.jpg' }
    ];

    function renderItem(item) {
      const li = document.createElement('li');
      const img = document.createElement('img');
      img.src = item.img;
      // img.alt = item.content;

      const span = document.createElement('span');
      span.textContent = item.name;

      li.appendChild(img);
      li.appendChild(span);
      return li;
    }

    const fruList = document.getElementById('fruList');
    const vegList = document.getElementById('vegList');

    fruits.forEach(f => fruList.appendChild(renderItem(f)));
    vegetables.forEach(v => vegList.appendChild(renderItem(v)));

   
    function createAddForm(listId, isFruit) {
      const form = document.createElement('div');
      const nameInput = document.createElement('input');
      const imgInput = document.createElement('input');
      const button = document.createElement('button');

      nameInput.placeholder = 'Name';
      imgInput.placeholder = 'Image URL';
      [nameInput, imgInput].forEach(input => {
        input.style.marginRight = '5px';
        input.style.padding = '6px';
        input.style.border = '1px solid #ccc';
        input.style.borderRadius = '5px';
      });

      button.textContent = 'Add';
      button.style.padding = '6px 12px';
      button.style.borderRadius = '5px';
      button.style.border = 'none';
      button.style.backgroundColor = '#4CAF50';
      button.style.color = 'white';

      button.onclick = () => {
        const name = nameInput.value.trim();
        const img = imgInput.value.trim();
        if (name && img) {
          const newItem = { name, img };
          const li = renderItem(newItem);
          document.getElementById(listId).appendChild(li);
          nameInput.value = '';
          imgInput.value = '';
          updateCounter();
        }
      };

      form.appendChild(nameInput);
      form.appendChild(imgInput);
      form.appendChild(button);
      form.style.marginTop = '10px';
      document.getElementById(listId).parentElement.appendChild(form);
    }

    createAddForm('fruList', true);
    createAddForm('vegList', false);

   
    const counter = document.createElement('p');
    counter.style.fontWeight = 'bold';
    counter.style.marginTop = '20px';
    document.body.appendChild(counter);

    function updateCounter() {
      const fruitsCount = document.querySelectorAll('#fruList li').length;
      const vegsCount = document.querySelectorAll('#vegList li').length;
      counter.textContent = `You have ${fruitsCount} fruits and ${vegsCount} vegetables.`;
    }

    updateCounter();

   
    
