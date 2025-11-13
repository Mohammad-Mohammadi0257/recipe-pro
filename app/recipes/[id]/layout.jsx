// app/recipes/[id]/layout.jsx
export default function Layout({ children }) {
  return (
    <section className=" max-w-[1400px] mx-auto bg-gray-200 text-gray-800
    rounded-xl mt-3 pb-5">
      {children}
    </section>
  );
}
