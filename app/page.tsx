import DoubleCurvedTriangle from "@/components/DoubleCurvedTriangle";
import SignIn from "./dashboard/components/SignIn";

export default function Home() {
  return (
    <>
      <section className="container mx-auto px-6 mt-8 md:px-10 xxl:px-0">
        <h1 className="text-4xl font-bold text-theme text-5xl md:text-8xl">
          DocLite
        </h1>
        <p className="text-xl font-light text-foreground md:text-3xl">
          A light weight document notetaker
        </p>
      </section>
      <section className="mt-9  lg:mt-16 flex-grow flex  flex-col">
        <DoubleCurvedTriangle />
        <div className="bg-primary flex-grow -mt-0.25">
          <div className="container mx-auto pt-5 px-4">
            <SignIn />
          </div>
        </div>
      </section>
    </>
  );
}
