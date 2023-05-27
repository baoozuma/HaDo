const characters = [
    {
      name: 'Jeon Jungkook',
      age: 25,
      image: './assets/character/jungkook.jpeg',
      description: 'Jungkook is a hardworking, ambitious, and playful individual with a competitive spirit. He is determined and introverted.',
    },
    {
      name: 'Kim Teahyung',
      age: 27,
      image: './assets/character/v.jpeg',
      description: 'V is outgoing, artistic, and has a playful nature. Taehyung is empathetic, confident, and often praised for his distinctive fashion.',
    },
    {
      name: 'Park Jimin',
      age: 27,
      image: './assets/character/jimin.jpg',
      description: 'Jimin brings joy to others with his cheerful personality and is admired for his exceptional dance skills and stage presence.',
    },
    {
      name: 'Kim Namjoon',
      age: 28,
      image: './assets/character/rm.jpg',
      description: 'He is known for his intelligent and thoughtful nature. RM possesses strong leadership skills and is the spokesperson for the group.',
    },
    {
      name: 'Jung Ho-seok',
      age: 29,
      image: './assets/character/hope.jpeg',
      description: 'He is known for his intelligent and thoughtful nature. RM possesses strong leadership skills and is the spokesperson for the group.',
    },
    {
      name: 'Min Yoongi ',
      age: 30,
      image: './assets/character/suga.jpeg',
      description: 'He is known for his intelligent and thoughtful nature. RM possesses strong leadership skills and is the spokesperson for the group.',
    },
    {
      name: 'Kim Seok-jin',
      age: 30,
      image: './assets/character/jin.jpeg',
      description: 'He is known for his intelligent and thoughtful nature. RM possesses strong leadership skills and is the spokesperson for the group.',
    }
    // Add more characters here
  ];

  const introCharacterContainer = document.querySelector('.intro_character');

  characters.forEach(character => {
    const section = document.createElement('section');
    const img = document.createElement('img');
    img.src = character.image;

    const blockquote = document.createElement('blockquote');
    const h1 = document.createElement('h1');
    const p = document.createElement('p');

    h1.textContent = `${character.name} - ${character.age}`;
    p.textContent = character.description;

    blockquote.appendChild(h1);
    blockquote.appendChild(p);

    section.appendChild(img);
    section.appendChild(blockquote);

    introCharacterContainer.appendChild(section);
  });
