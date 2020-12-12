import { render, act } from '@testing-library/react'

import QuickMath from './QuickMath.component'

describe('QuickMath', () => {
  const mockedQuickMathResponse = {
    twoPlusTwo: '4',
    minusOne: '3',
  }

  let quickMathFetchPromise; 

  beforeEach(() => {
    quickMathFetchPromise = Promise.resolve({
      json: () => mockedQuickMathResponse,
    });
    jest.spyOn(window, 'fetch').mockImplementation(() => quickMathFetchPromise); 
  });

  test('it does not know "two plus two" initially', async () => {
    const { container } = render(<QuickMath />);

    expect(container).toHaveTextContent('Two plus two is ?');

    await act(() => quickMathFetchPromise);
  });
  
  test('it does not know "minus one" initially', async () => {
    const { container } = render(<QuickMath />);
    
    expect(container).toHaveTextContent('Minus one that\'s ?');

    await act(() => quickMathFetchPromise);
  });

  test('it sends request for quick math initially once', async () => {
    render(<QuickMath />);

    expect(window.fetch).toHaveBeenCalledTimes(1);

    await act(() => quickMathFetchPromise);
  });

  test('it applies quick math once it has received it', async () => {
    const { container } = render(<QuickMath />);

    await(act(() => quickMathFetchPromise));

    expect(container).toHaveTextContent(`Two plus two is ${mockedQuickMathResponse.twoPlusTwo}`);
    expect(container).toHaveTextContent(`Minus one that's ${mockedQuickMathResponse.minusOne}`);
  });
});
