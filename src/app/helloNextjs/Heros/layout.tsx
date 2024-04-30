//layout in nestd heroe folder
export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
     <>
          <h2>Nested layout in hero Page.</h2>
          {children}
     </>
    );
  }