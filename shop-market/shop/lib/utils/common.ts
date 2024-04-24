export function addOverflowHiddenToBody() {
  const body = document.querySelector('body') as HTMLBodyElement;
  body.style.overflow = 'hidden';
}

export function removeOverflowHiddenToBody() {
  const body = document.querySelector('body') as HTMLBodyElement;
  body.style.overflow = 'auto';
}

export const getWindowWidth = () => {
  const { innerWidth: windowWidth } =
    typeof window !== 'undefined' ? window : { innerWidth: 0 };

  return { windowWidth };
};
