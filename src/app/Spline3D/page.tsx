"use client"

import { useEffect, useState } from 'react';
import Spline from '@splinetool/react-spline/next';

export default function Spline3D() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <main>
      {isClient && (
        <Spline scene="https://prod.spline.design/W3SLR3FeoOfKG3q7/scene.splinecode" />
      )}
    </main>
  );
}
