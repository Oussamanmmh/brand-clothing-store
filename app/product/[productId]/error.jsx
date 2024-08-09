"use client"
export default function Error({error}){;
    console.log(error)

    return(
        <>
            <div className="flex justify-center items-center h-screen text-red">
                <h1 className="text-4xl font-semibold">There must be an error please try later...</h1>
                
            </div>
        </>
    )
}