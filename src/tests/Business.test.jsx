import { render, screen } from '@testing-library/react';
import Business from './Business';

// Creamos un "negocio falso" para la prueba
const mockBusiness = {
  imageSrc: 'https://via.placeholder.com/150',
  name: 'Pizzería Mario',
  address: 'Calle Falsa 123',
  city: 'Springfield',
  state: 'ST',
  zipCode: '12345',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
};

test('debe mostrar el nombre y la categoría del restaurante', () => {
  // 1. Arrange: Renderizamos el componente con la prop "business"
  render(<Business business={mockBusiness} />);

  // 2. Act: En este caso no hay interacción, solo queremos leer
  const nameElement = screen.getByText(/Pizzería Mario/i);
  const categoryElement = screen.getByText(/ITALIAN/i);

  // 3. Assert: Verificamos que los elementos existan en el documento
  expect(nameElement).toBeInTheDocument();
  expect(categoryElement).toBeInTheDocument();
});