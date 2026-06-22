export interface Intent {
  fromToken: string;
  toToken: string;
  amount: number;
}

export async function createIntent(
  intent: Intent
) {
  return {
    id: crypto.randomUUID(),
    status: "pending",
    ...intent
  };
}
