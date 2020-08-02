export default [
  {
    id: 1,
    previewImage: `../../img/apartment-01.jpg`,
    isFavorite: false,
    isPremium: true,
    price: 120,
    rating: 4.8,
    title: `Room with a view of the sea`,
    type: `apartment`,
    city: {
      name: `Amsterdam`,
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      }
    }
  },
  {
    id: 2,
    previewImage: `../../img/apartment-02.jpg`,
    isFavorite: true,
    isPremium: false,
    price: 80,
    rating: 4.3,
    title: `Room in center`,
    type: `apartment`,
    city: {
      name: `Amsterdam`,
      location: {
        latitude: 52.220600,
        longitude: 4.531000,
        zoom: 8
      }
    }
  },
  {
    id: 3,
    previewImage: `../../img/apartment-03.jpg`,
    isFavorite: false,
    isPremium: false,
    price: 35,
    rating: 2,
    title: `Room near Seine`,
    type: `Private room`,
    city: {
      name: `Paris`,
      location: {
        latitude: 48.850126,
        longitude: 2.350480,
        zoom: 5
      }
    }
  },
  {
    id: 4,
    previewImage: `../../img/studio-01.jpg`,
    isFavorite: false,
    isPremium: false,
    price: 95,
    rating: 4.7,
    title: `Room near Seine`,
    type: `Private room`,
    city: {
      name: `Dusseldorf`,
      location: {
        latitude: 51.219866,
        longitude: 6.772119,
        zoom: 9
      }
    }
  },
  {
    id: 5,
    previewImage: ``,
    isFavorite: false,
    isPremium: false,
    price: 47,
    rating: 3.3,
    title: `Room without Picture`,
    type: `Private room`,
    city: {
      name: `Dusseldorf`,
      location: {
        latitude: 51.219866,
        longitude: 6.772119,
        zoom: 9
      }
    }
  },
];
