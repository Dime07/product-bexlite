import Navbar from "./navbar";

export const Layout = ({ children }: { children: JSX.Element }) => {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script src="https://unpkg.com/htmx.org@2.0.0"></script>
        <script src="https://cdn.tailwindcss.com"></script>
        <title>Product | Catalogue</title>
      </head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
};
