import MethodologyNavigation from "@/components/methodology/navigation";

import ContentSchema from "@/components/methodology/content-schema";
import ContentFeedback from "@/components/methodology/content-feedback";
import ContentDisclaimer from "@/components/methodology/content-disclaimer";
import ContentMethods from "@/components/methodology/content-methods";

export const metadata = {
  title: "GED: Methodology",
  description: "Green Economy Diagnostic Tool",
};

export default function MethodologyPage() {
  return (
    <div className="w-full h-full flex overflow-auto">
      {/* Navigation section : Right */}
      <section className="bg-[#F5F8FB] w-1/4 h-full flex flex-col gap-4 pt-14 pl-5 pr-3">
        <MethodologyNavigation />
      </section>
      {/* Content section : Left */}
      <section className="bg-white w-3/4 h-full px-14 pt-14 overflow-auto scroll-smooth">
        <main className=" p-1 w-full h-full flex flex-col gap-9 font-inter">
          {/* Content section : 1 : DISCLAIMER */}
          <ContentDisclaimer />
          {/* Content section : 2 : METHODS */}
          <ContentMethods />
          {/* Content section : 3 : SCHEMA */}
          <div id="schema" className=" w-full flex flex-col gap-4">
            <ContentSchema />
          </div>
          {/* Content section : 4 : FEEDBACK */}
          <div className=" w-full flex pb-20 ">
            <ContentFeedback />
          </div>
        </main>
      </section>
    </div>
  );
}
