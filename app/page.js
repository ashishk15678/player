import Image from "next/image";
import { Button } from "@/components/ui/button";
import ButtonComp from "@/public/components/mainSectionButtonComponent";
import { UserButton } from "@clerk/nextjs";
export default function Home() {
  return (
    <>
      <body className="bodyMainSection">
        <div className=""></div>
        <main className="mainSection">
          <div className="mainSectionChild">
            <center>
              <p>Player</p>
            </center>
          </div>
          <section className="leftSection">
            <ButtonComp Name={"Groups"} link={"/groups"}></ButtonComp>
          </section>
          <section className="rightSection">mainSection</section>
        </main>
        <UserButton />
      </body>
    </>
  );
}
