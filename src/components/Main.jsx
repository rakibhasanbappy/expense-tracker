import Form from "./Form";
import RightColumn from "./RightColumn";

export default function Main() {
  return (
    <>
      <main className="relative mx-auto mt-10 w-full max-w-7xl">
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Form />
          <RightColumn />
        </section>
      </main>
    </>
  );
}
