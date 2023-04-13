export function useCounter(initialValue: number) {
  const count = ref(initialValue);
  const inc = () => (count.value = count.value + 1);
  const dec = () => (count.value = count.value - 1);
  return {
    count,
    inc,
    dec,
  };
}

// pageファイルでuseStateを使わず、ここで定義する
export function useCounter2() {
  return useState(() => 0);
}