class HttpUsers {
  public async getUsers() {
    const res = await fetch("http://localhost:3000/users");
    const data = await res.json();

    return data;
  }
}

const httpUsers = new HttpUsers();

export default httpUsers;
