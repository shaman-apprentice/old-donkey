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
    <p>Two plus two is {quickMath.twoPlusTwo}</p>
    <p>Minus one that's {quickMath.minusOne}, quick maths</p>
  </div>
} 
