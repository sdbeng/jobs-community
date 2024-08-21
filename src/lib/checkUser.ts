import { currentUser } from "@clerk/nextjs/server";
import { db } from "@/lib/db";

export const checkUser = async () => {
    const user = await currentUser();
    // const email = user?.emailAddresses[0].emailAddress;
    // const userObj = await db.user.findUnique({
    //     where: {
    //         email,
    //     },
    // });
    // return userObj;

    //check for current logged in user
    if(!user) {
        return null;
    }

    //check if user already exists in the database
    const loggedInUser = await db.user.findUnique({
        where: {
            clerkUserId: user.id,// clerkUserId is the unique identifier for the user
        },
    });

    //if user is in the database, return the user
    if(loggedInUser) {
        return loggedInUser;
    }

    //if user does not exist in the database, create a new user
    const newUser = await db.user.create({
        data: {
            clerkUserId: user.id,
            email: user.emailAddresses[0].emailAddress,
            name: `${user.firstName} ${user.lastName}`,
            imageUrl: user.imageUrl,
        },
    });
    return newUser;
}