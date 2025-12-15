export interface userType {
     _id?:string
     username?:string
     firstname?:string
     lastname?:string
     email?:string
     password?:string  
     role?:string
     avatar?:{
          url:string
          publicId:string
     }
     bio?:string
     age?:number
     gender?:string
     newpassword?:string
     cppassword?:string 
}
