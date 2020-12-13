import { useEffect, useState } from 'react';

export default function QuickMath() {
  const [quickMath, setQuickMath ] = useState({
    twoPlusTwo: '?',
    minusOne: '?',
  });

  useEffect(() => {
    const fetchController = new AbortController();
    fetch('http://localhost:3001', { signal: fetchController.signal })
      .then(response => response.json())
      .then(setQuickMath)
      .catch(() => { /* yolo */})

    return () => fetchController.abort();
  }, [ setQuickMath ])

return <div style={{ fontWeight: 'bold' }}>
    <h1>Two plus two is {quickMath.twoPlusTwo}</h1>
    <h1>Minus one that's {quickMath.minusOne}, quick maths</h1>
  </div>
} 
