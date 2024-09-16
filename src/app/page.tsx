import { AboutSectionComponent } from "@/components/about-section";
import { ClinicHeroComponent } from "@/components/clinic-hero";
import MaxWidthWrapper from "@/components/layout/max-width-wrapper";

export default function Home() {
  return (
   <MaxWidthWrapper>
    <ClinicHeroComponent/>
    <AboutSectionComponent/>
   </MaxWidthWrapper>
  );
}
