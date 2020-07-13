// react
import { useState, useCallback } from 'react';
import { LayoutChangeEvent } from 'react-native';

type Tlayout = { x: number; y: number };

const useLayout = () => {
  const [layout, setLayout] = useState<Tlayout>({
    x: 0,
    y: 0,
  });

  const onLayout = useCallback((event: LayoutChangeEvent): void => {
    const { x, y } = event.nativeEvent.layout;
    setLayout({ x, y });
  }, []);

  return { layout, onLayout };
};

export default useLayout;
