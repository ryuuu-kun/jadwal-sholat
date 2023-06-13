import Layout from "~components/Layout";

export default function ErrorPage() {
  return (
    <Layout title="500 Server Error!">
      <section className="flex flex-col items-center justify-center text-center">
        <h1 className="text-5xl font-bold">500 🤖</h1>
        <p className="mt-3 tracking-wide font-semibold">
          Maaf, sepertinya server sedang bermasalah!
        </p>
      </section>
    </Layout>
  );
}
