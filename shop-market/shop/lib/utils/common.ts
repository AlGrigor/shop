export function addOverflowHiddenToBody() {
  const body = document.querySelector('body') as HTMLBodyElement;
  body.style.overflow = 'hidden';
}

export function removeOverflowHiddenToBody() {
  const body = document.querySelector('body') as HTMLBodyElement;
  body.style.overflow = 'auto';
}
