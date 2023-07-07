const characters = [
    {
      name: 'Nguyễn Minh Đức',
      age: 16,
      image: './assets/character/duc.jpg',
      description: 'Dáng vừa không cao không thấp, tính ngay thẳng, ngông ở mức độ vẫn còn hiểu chuyện. Sống trên thành phố từ khi còn nhỏ và không thoải mái khi về tới quê nội. Ba mẹ đưa ĐỨC về quê và sống nhờ nhà cô Ba. ',
    },
    {
      name: 'Hà Ánh Mai',
      age: 15,
      image: './assets/character/nho.jpg',
      description: 'Dáng cao, hiểu chuyện, hiếu thảo. Không chơi chung được với người trong xóm và sống trong lời chế giễu bàn tán của mọi người. Ở chung với nhà dì Tư, Mai chưa từng thấy dễ thở trong cuộc sống như thế.',
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
