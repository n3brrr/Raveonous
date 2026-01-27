import { render, screen } from '@testing-library/react';
import BusinessList from './BusinessList';

// Creamos un array con dos negocios falsos
const mockBusinesses = [
  { id: 1, name: 'Restaurante A', category: 'Italian', rating: 4, reviewCount: 10 },
  { id: 2, name: 'Restaurante B', category: 'Mexican', rating: 5, reviewCount: 20 }
];

test('debe renderizar la cantidad correcta de tarjetas de negocio', () => {
  // Pasamos el array como prop
  render(<BusinessList businesses={mockBusinesses} />);
  
  // Buscamos todos los elementos que tengan el nombre de los restaurantes
  const businessItems = screen.getAllByRole('heading', { level: 2 }); 
  // Nota: Asegúrate de que en Business.js el nombre sea un <h2>
  
  expect(businessItems.length).toBe(2);
});

test('cambia la opción de ordenado de "Higuest Rating" al hacer click', () => {
  render(<BusinessList businesses={mockBusinesses} />);

  const selectElement = screen.getByRole('combobox');
  expect(selectElement.value).toBe('hightest rating');

  userEvent.selectOptions(selectElement, 'lowest rating');
  expect(selectElement.value).toBe('lowest rating');
});