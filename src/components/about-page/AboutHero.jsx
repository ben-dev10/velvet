import lucia from "../../assets/cosmetics/natural-beauty.png";
import signature from "../../assets/signature.svg";
import BadgeUI from "../ui/BadgeUI";

export default function AboutHero() {
  return (
    <div className="about-hero wrapper p-4 container-4xl">
      <div className="flex justify-center">
        <BadgeUI text="About Us" accent="accent" />
      </div>
      <div data-aos="fade-in">
        <h3 className="h3 mt-3 mb-[6px]">Velvet Cosmetic Limited</h3>
        <p className="text-gray-500">
          <span className="text-accent font-bold ml-3">Velvet</span> was
          established as a Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Exercitationem, doloribus quibusdam? Veritatis animi sed
          pariatur accusamus! Pariatur id eius cum eaque ratione in iusto quo.
        </p>
        <p className="text-accent my-3">
          And that is why we continue to innovate for our customers and to push
          our industry forward.
        </p>
        <p className="text-gray-500 mt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus iusto
          architecto repellendus quasi vero, incidunt totam nisi dicta
          blanditiis sit quidem iste, tenetur consequatur sint aperiam dolorum
          corporis assumenda et.
        </p>
      </div>

      <div className="profile my-5 flex justify-end">
        <div>
          <div className="avatar flex">
            <img
              src={lucia}
              alt=""
              className="w-[30px] h-[30px] object-cover rounded-full border-2 border-white shadow-md"
            />
            <div className="ml-2">
              <p className="font-semibold text-[13px]">Lucia Garcia</p>
              <p className="text-[11px] text-gray-500">CEO, Velvet Cosmetics</p>
            </div>
          </div>
          <div className="ml-10 mt-1">
            <img src={signature} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
