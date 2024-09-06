export class ProductEntity {
     _id: string = "";

     //info
     name: string = "";
     subCategories: string[] = [];
     mainCategory: string = "";
     brand: string = "";
     images: string[] = [];
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