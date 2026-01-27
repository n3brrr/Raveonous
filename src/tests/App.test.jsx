import Yelp from './Yelp';

// Simulamos el fetch globalmente
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({
      businesses: [
        {
          id: '123',
          name: 'Pizza Place',
          image_url: 'https://example.com/pizza.jpg',
          categories: [
            { alias: 'pizza', title: 'Pizza' },
            { alias: 'italian', title: 'Italian' }
          ],
          rating: 4.5,
          review_count: 123,
          price: '$',
          location: {
            address1: '123 Main St',
            city: 'Madrid',
            state: 'Madrid',
            zip_code: '12345',
            country: 'Spain',
            display_address: ['123 Main St', 'Madrid, Madrid 12345', 'Spain']
          }
        }
      ]
    }),
  })
);

test('Yelp.search retorna una lista de negocios procesada', async () => {
  const results = await Yelp.search('pizza', 'madrid', 'best_match');
  
  // Verificamos que devuelva el nombre correctamente formateado
  expect(results[0].name).toBe('Pizza Place');
  // Verificamos que fetch se llamó con la URL correcta
  expect(global.fetch).toHaveBeenCalledWith(expect.stringContaining('api.yelp.com'));
});