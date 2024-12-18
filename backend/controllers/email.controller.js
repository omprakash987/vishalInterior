
import { Resend } from "resend";

const  resend = new Resend("re_Zp1pRoAS_7UmorTJZK6xJ22Li9rvCLkko"); 

const recipient = "kanuparewa371@gmail.com"

export const sendEmail = async(req,res)=>{
    try {
        const {name,email,phone,pincode,description} = req.body;
        if(!name || !email || !phone || !pincode || !description){
            return res.status(400).json({error:"Please fill all the fields"})
        }

        const response = await resend.emails.send({
            from:"onboarding@resend.dev",
            to : recipient,
            subject:"Hello ",
            text: `name:\n${name} \n email:\n${email} \n phone:\n${phone} \n pincode:\n${pincode} \n description:\n${description}`,
      
          })
          console.log("Email sent successfully", response)
         return res.status(200).json({
            message:"Email sent successfully",
            response,
            

         })

    } catch (error) {
        console.log(error); 
        throw new Error("error sending verification email"); 
    }
}