export const getAllTransactions = async () => {
  const response = await fetch(
    "https://infra.devskills.app/api/accounting/transactions"
  );

  return response.json();
};

export const createTransaction = async ({ accountId, amount }) => {
  const response = await fetch(
    "https://infra.devskills.app/api/accounting/transaction",
    {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        account_id: accountId,
        amount,
      }),
    }
  );

  return response.json();
};

export const getTransactionById = async (id) => {
  const response = await fetch(
    `https://infra.devskills.app/api/accounting/transactions/${id}`
  );

  return response.json();
};

export const getAccountById = async (id) => {
  const response = await fetch(
    `https://infra.devskills.app/api/accounting/accounts/${id}`
  );

  return response.json();
};
