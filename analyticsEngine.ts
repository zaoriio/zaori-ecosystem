export function tradingVolume(
  trades: number[]
) {
  return trades.reduce(
    (a, b) => a + b,
    0
  );
}
