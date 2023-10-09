class HttpTransactions {
  public async getTransactions() {
    const res = await fetch("http://localhost:3000/transactions");
    const data = await res.json();

    return data;
  }
}

const httpTransations = new HttpTransactions();

export default httpTransations;
