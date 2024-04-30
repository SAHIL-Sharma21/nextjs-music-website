//making inner layout in helloNextjs folder.

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <>
        <h2>Hello new layout.</h2>
        {children}
   </>
  );
}
