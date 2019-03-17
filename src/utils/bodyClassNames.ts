const { body } = document;

export const addLockClass = (s: string = 'is-locked'): void => {
  if (body.classList.contains(s)) {
    return;
  }
  body.classList.add(s);
};

export const removeLockClass = (s: string = 'is-locked'): void => {
  body.classList.remove(s);
};
