export class LoginService {
  baseUrl: string = `${process.env.NEXT_PUBLIC_BASEURL}/api/auth/login/`;

  async login(username: string, password: string, remember: string): Promise<any> {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({
        username: username,
        password: password,
        remember: remember,
      }),
    };

    const res = await fetch(this.baseUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({
        username: username,
        password: password,
        remember: remember,
      }),
    });
    return res;

  }
}
