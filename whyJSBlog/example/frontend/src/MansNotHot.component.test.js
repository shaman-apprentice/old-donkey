import { render } from '@testing-library/react'

import MansNotHot from './MansNotHot.component'

describe('MansNotHot', () => {
  test('it displays correct image', () => {
    const { container, } = render(<MansNotHot />);

    const image = container.querySelector('img');
    expect(image).toHaveAttribute('src', 'mansNotHot.gif');
  });

  test('its image has by law required "alt" attribute', () => {
    const { container, } = render(<MansNotHot />);

    const image = container.querySelector('img');
    expect(image).toHaveAttribute('alt');
  })
});
