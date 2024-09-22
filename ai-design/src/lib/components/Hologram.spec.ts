// src/lib/components/Hologram.spec.ts
import { render } from '@testing-library/svelte';
import Hologram from './Hologram.svelte';

test('Hologram component renders without errors', () => {
  const { container } = render(Hologram);
  expect(container).toBeInTheDocument();
});
