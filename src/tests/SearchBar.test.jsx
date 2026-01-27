import { render, screen } from '@testing-library/react';
import SearchBar from './SearchBar';

test('debe mostrar el boton de búsqueda', () => {
  // 1. Arrange: Renderizamos el componente con la prop "business"
  render(<SearchBar />);

  // 2. Act: En este caso no hay interacción, solo queremos leer
  const buttonElement = screen.getByRole('button', { name: /Search/i });

  // 3. Assert: Verificamos que los elementos existan en el documento
  expect(buttonElement).toBeInTheDocument();
});