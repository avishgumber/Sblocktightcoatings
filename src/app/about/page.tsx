import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "about",
    description: "About page",
  };

  export default function About() {
    return (
        <div className="my-20 flex-col flex lg:grid lg:grid-cols-12">
            <div className="text-display col-span-4">
                <h1 className="mb-8 lg:pl-8">
                    About <span className="text-light-gray">S.B LOCKTIGHT COATINGS</span>

                </h1>
            </div>
            <div className=" col-start-6 col-span-5 max-w-xl lg:max-w-none text-h5 md:text-h4 leading-[130%] text-light-gray font-medium space-y-7">
                <p className="space-y-8 flex flex-col">
                    <span>
                    Introducing S.B. Locktight Coatings, your premier destination for cutting-edge coating solutions in the Pre-applied thread-locking adhesive segment.
                    Founded in 2022 by industry veterans Mr. Sachin Gumber and Mr. Abhishek Singla, our company stands as an authorized service provider for both Tecnologic 3 and 3M, emblematic brands renowned for their excellence in adhesive technology.
                    </span>

                    <span>
                    At S.B. Locktight Coatings, we epitomize innovation and reliability, embodying the ethos of our esteemed partners, Tecnologic 3®, a trailblazer in the realm of reactive and non-reactive coatings for fasteners since 1987. With over 35 years of experience, we boast unparalleled expertise in crafting exceptional products tailored to meet the diverse needs of industries worldwide. Our commitment to excellence extends beyond mere product quality; it encompasses specialized technical knowledge and top-tier application technology consultancy, ensuring optimal performance and customer satisfaction. Led by Mr. Sachin Gumber, a Mechanical Engineer with a wealth of experience garnered from his tenure with leading German manufacturers, we bring forth a unique blend of technical prowess and adhesive solutions expertise. Backed by a seasoned team boasting 20 years of collective experience in the pre-applied process, and MR. Abhishek Singla 15+ years of strategic business experience helps guarantee superior results that not only save costs but also enhance reliability, bolstering the operational efficiency of our clientele.
                    </span>

                    <span>
                    Equipped with state-of-the-art infrastructure, including four automatic screw coating machines, and boasting a staggering capacity of providing coating services of 5LACS/DAY, we are primed to meet the most demanding requirements with unwavering precision and efficiency. Our relentless pursuit of excellence is underpinned by a steadfast commitment to environmental sustainability, exemplified by the development of water-based products—a testament to our conscientious approach towards minimizing ecological impact.
                    </span>

                    <span>
                    In essence, S.B. Locktight Coatings is not just a provider of coating solutions; we are pioneers of progress, dedicated to pushing the boundaries of adhesive technology and empowering industries to thrive in an ever-evolving landscape. Experience the difference with us, where ingenuity meets reliability, and excellence knows no bounds.
                    </span>


                </p>

            </div>

        </div>
    )
  }

