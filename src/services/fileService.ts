export class FileService {
  baseUrl: string = `${process.env.REACT_APP_BASEURL}/uploads/`;
  async upload(formdata: any): Promise<any> {
    const response = await fetch(this.baseUrl, {
      method: "POST",
      credentials: "include",
      body: formdata,
    });
    return response;
  }


  async uploadSingle(formdata: any): Promise<any> {
    const response = await fetch(this.baseUrl + 'productLogo', {
      method: "POST",
      credentials: "include",
      body: formdata,
    });
    return response;
  }


}
