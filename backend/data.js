import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Maximiliano',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'John',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      // _id: '1',
      name: 'Whey Protein, Gold Standard',
      slug: 'goldstandar-protein',
      category: 'Proteina',
      image: '/images/proteina1.jpg',
      price: 66.99,
      countInStock: 10,
      brand: 'Optimum Nutrition ',
      rating: 4.5,
      numReviews: 10,
      description:
        'La Proteína Optimum Nutrition más prestigiosa del mercado WHEY GOLD STANDARD Contribuye a la protección, recuperación y reconstrucción de las fibras musculares después de la práctica deportiva. Contiene 100% proteína aislada de suero, es hidrolizada y posee una alta concentración de aminoácidos ramificados y glutamina. Además su formulación incorpora enzimas digestivas, lo que contribuye a mejorar su absorción.',
    },
    {
      // _id: '2',
      name: 'Creatina Monohidratada',
      slug: 'creatina-myprotein',
      category: 'Creatina',
      image: '/images/creatina1.jpg',
      price: 45.99,
      countInStock: 10,
      brand: 'MyProtein ',
      rating: 4.5,
      numReviews: 10,
      description:
        'Creatina Monohidratada 100% (500gr) - MYPROTEIN La creatina monohidrato es una de las formas de creatina más investigadas del mundo, y se ha probado científicamente que nuestro producto en polvo de impactante calidad aumenta el rendimiento físico al mejorar la potencia general.  Aumenta el rendimiento físico.  Puede ayudar a aumentar la potencia.  Suplemento diario muy cómodo. Perfecto para todo tipo de deportes y de ejercicios.  ',
    },
    {
      // _id: '3',
      name: 'Barra proteína Wild Protein chocolate 5 unid. 45 g c/u',
      slug: 'barraproteina-wild',
      category: 'Barra de proteina',
      image: '/images/barraproteina1.jpg',
      price: 4.99,
      countInStock: 10,
      brand: 'WildFoods ',
      rating: 4.5,
      numReviews: 10,
      description:
        'Las barras Wild Protein contienen un alto contenido proteico, ideal para personas que buscan complementar su ingesta de proteínas. Todas las barras Wild Protein son libre de sellos, sin lactosa, sin azúcar añadida, sin colesterol, endulzadas con dátiles, vegetarianas y de producción local. ',
    },
    {
      // _id: '4',
      name: 'Cintillo Swoosh Headbands Nike',
      slug: 'nike-cintillo',
      category: 'Implemento',
      image: '/images/cintillo1.jpg',
      price: 12.99,
      countInStock: 10,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
      description:
        'Cintillo Deportivos Nike. Cintillo elástico perfecto para que a la hora de realizar deporte, el cabello no moleste en el entrenamiento.',
    },
  ],
};
export default data;
