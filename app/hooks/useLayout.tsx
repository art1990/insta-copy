// react
import { useState, useCallback } from 'react';
import { LayoutChangeEvent } from 'react-native';

type Tlayout = { x: number; y: number; width: number; height: number };

const useLayout = () => {
  const [layout, setLayout] = useState<Tlayout>({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });

  const onLayout = useCallback((event: LayoutChangeEvent): void => {
    const { x, y, width, height } = event.nativeEvent.layout;
    setLayout({ x, y, width, height });
  }, []);

  return { layout, onLayout };
};

export default useLayout;
