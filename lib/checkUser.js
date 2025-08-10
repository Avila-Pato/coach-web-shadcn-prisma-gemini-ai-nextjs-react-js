import { currentUser } from "@clerk/nextjs/dist/types/server";
//currentUser es obtiene el usuario logueado
import { db } from "./prisma";


// Llama a clerk para ver si hay un usuario auth no no hay ninguno devuelve null
export const checkUser = async () => {
    const user = await currentUser();
    if(!user) {
        return null;
    }

    try {
        const loggedInUser = await db.user.findUnique({
            where: {
                clerkUserId : user.id
            }
        })
        if (loggedInUser) {
            return loggedInUser
        }
    // busca en la base de datos prisma si existe ese usuario con el id clerkUserId y concida con el id autenticado si lo encuentra lo devuelve 

    const name = `${user.firstName} ${user.lastName}`;

    const newUser = await db.user.create({
        data: {
        clerkUserId: user.id,
        name,
        imageUrl: user.imageUrl,
        email: user.emailAddresses[0].emailAddress,
        }
    }) 
    return newUser
    // Si no lo encuentra, cre un nuevo registro en la base de datos con la informacion que trae de clerk
    //  clerkUserId: user.id,
    //  name,
    //  imageUrl: user.imageUrl,
    //  email: user.emailAddresses[0].emailAddress,

    } catch (error) {
        console.log(error.message);
    }
}