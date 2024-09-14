export class LoginForm {
     email: string = "";
     password: string = "";
     emailError: string = "";
     passwordError: string = "";
     formIsValid: boolean = false;
}
export class ImageEntity {
     name: string = "";
     statuse: boolean = false;
}
export class ProductEntity {
     _id: string = "";

     //info
     name: string = "";
     subCategories: string[] = [];
     categoryId: string = "";
     brand: string = "";
     images: ImageEntity[] = [];
     shortDesc: string = "";
     longdesc: string = "";
     weakPoints: string[] = [];
     strongPoints: string[] = [];

     //seo
     pageTitle: string = ""
     pageLink: string = ""
     desc: string = ""
     keywords: string[] = [];
     tags: string[] = [];

     //sell
     size: string = "";
     price: number = 0;
     purchasePrice: number = 0;
     weight: string = "";
     stock: string = "";
     color: string[] = [];

     userId: string = "";
     createdAt!: Date;
}