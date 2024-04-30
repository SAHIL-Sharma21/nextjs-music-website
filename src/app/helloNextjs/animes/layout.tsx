//making layout in anime foilder

//we can give custom name to layout function in nextjs framework.
// export default function NewLayout({children}: Readonly<{children: React.ReactDOM}>){
//     return(
//         <>
//             <h2>Layout of anime page </h2>
//             {children}
//         </>
//     );
// }

//we get ther children of layout is the page.tsx file in the specific route.
//writing in arropw function.
const NewLayout = ({children}: Readonly<{children: React.ReactDOM}>) => {
    return (
        <>
            <h2>Layout of anime page</h2>
            {children}
        </>
    );
}
export default NewLayout;