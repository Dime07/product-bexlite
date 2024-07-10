import { Layout } from "../layout";

export const Homepage = () => {
  return (
    <Layout>
      <main class="px-10 pt-10">
        <div class="space-y-2">
          <h1 class="text-2xl font-medium text-center">
            Welcome to your Product Catalogue
          </h1>
          <h2 class="text-sm text-center">
            This is a simple product catalogue app built with htmx and
            TailwindCSS.
          </h2>
        </div>
      </main>
    </Layout>
  );
};
