import Image from "next/image";
import MaxWidthWrapper from "@/components/maxWidthWrapper";
import { Check, Star, ArrowRight } from "lucide-react";
import Phone from "@/components/phone";
import { Icons } from "@/components/icon";
import { Reviews } from "@/components/review";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import Footer from "@/components/footer";
export default function Home() {
  return (
    <div className="bg-slate-50">
      <section>
        <MaxWidthWrapper className="pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-53 ">
          <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
            <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start ">
              <div className="absolute w-28 left-0 top-20 hidden lg:block"></div>
              <Image
                src="/file.png"
                className="hidden sm:block"
                alt=""
                width={200}
                height={200}
              />
            </div>
            <h1 className="relative w-fit tracking-light text-balance mt-16 font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl">
              Your Image on a{" "}
              <span className="bg-blue-600 px-2 text-white">Custom</span> Phone
              Case.
            </h1>
            <p className="mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap">
              Preserve cherished moments with your{" "}
              <span className="font-semibold">exclusive & personalized </span>
              phone case. CasePrints offers safeguarding for your memories, not
              just your device.
            </p>
            <ul className="mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start">
              <div className="space-y-2">
                <li className="flex gap-1.5 items-center text-left">
                  <Check className="h-5 w-5 shrink-0 text-green-600" />{" "}
                  High-quality & durable material
                </li>
                <li className="flex gap-1.5 items-center text-left">
                  <Check className="h-5 w-5 shrink-0 text-green-600" /> 5 years
                  print guarantee
                </li>
                <li className="flex gap-1.5 items-center text-left">
                  <Check className="h-5 w-5 shrink-0 text-green-600" /> Modern
                  iPhone models supported
                </li>
              </div>
            </ul>
            <div className="mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5">
              <div className="flex -space-x-4">
                <Image
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                  src="/users/user-1.png"
                  alt=""
                  width={100}
                  height={100}
                />
                <Image
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                  src="/users/user-2.png"
                  alt=""
                  width={100}
                  height={100}
                />
                <Image
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                  src="/users/user-3.png"
                  alt=""
                  width={100}
                  height={100}
                />
                <Image
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                  src="/users/user-4.jpg"
                  alt=""
                  width={100}
                  height={100}
                />
                <Image
                  className="inline-block object-cover h-10 w-10 rounded-full ring-2 ring-slate-100"
                  src="/users/user-5.jpg"
                  alt=""
                  width={100}
                  height={100}
                />
              </div>
              <div className="flex flex-col justify-between items-center sm:items-start">
                <div className="flex gap-0.5">
                  <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                  <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                  <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                  <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                  <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                </div>
                <p>
                  <span className="font-semibold">1.2 million</span> happy
                  customers
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-full lg:col-span-1 w-full flex justify-center px-8 sm:px-16 md:px-0 lg:mt-20 h-fit">
            <div className="relative md:max-w-xl">
              <Image
                src="/your-image.png"
                alt=""
                className="absolute w-40 lg:w-52 left-56 -top-20 select-none hidden sm:block lg:hidden xl:block"
                width={100}
                height={100}
              />
              <Image
                src="/line.png"
                alt=""
                width={100}
                height={100}
                className="absolute w-20 -left-6 -bottom-6 select-none"
              />
              <Phone className="w-64 mt-20" imgSrc="/testimonials/1.jpg" />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
      {/* value proposition section*/}
      <section className="bg-slate-100 py-24">
        <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-32">
          <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6">
            <h2 className="order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-4xl sm:text-5xl md:text-6xl text-gray-900">
              What our{""}
              <span className="relative px-2">
                customers
                <Icons.underline className="hidden sm:block pointer-events-none absolute inset-x-0 -bottom-6 text-blue-500" />
              </span>
              say
            </h2>
            <Image
              alt=""
              src={"/file.png"}
              className="w-24 order-0 lg:order-2"
              width={100}
              height={100}
            />
          </div>
          <div className="mx-auto grid max-w-2xl grid-cols-1 px-4 lg:mx-0 lg:max-w-none lg:grid-cols-2 gap-y-16">
            <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
              <div className="flex gap-0.5 mb-2">
                <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
              </div>
              <div className="text-lg leading-8">
                <p>
                  &quot;The case feels durable and I even got a compliment on
                  the design. Had the case for more than 3 months now and{" "}
                  <span className="p-0.5 bg-slate-800 text-white">
                    the image is super clear
                  </span>
                  , on the case I had before, the image started fading into
                  yellowish color after few weeks. Love it.&quot;
                </p>
              </div>
              <div className="flex gap-4 mt-2">
                <Image
                  alt=""
                  src={"/users/user-1.png"}
                  className="rounded-full h-12 w-12 object-cover"
                  width={100}
                  height={100}
                />
                <div className="flex flex-col">
                  <p className="font-semibold">John</p>
                  <div className="flex gap-1.5 items-center text-zinc-600">
                    <Check className="h-4 w-4 stroke-[3px] text-green-600" />
                    <p className="text-sm">Verified Purchase</p>
                  </div>
                </div>
              </div>
            </div>
            {/*second review */}
            <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
              <div className="flex gap-0.5 mb-2">
                <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
              </div>
              <div className="text-lg leading-8">
                <p>
                  &quot;The case feels durable and I even got a compliment on
                  the design. Had the case for more than 3 months now and{" "}
                  <span className="p-0.5 bg-slate-800 text-white">
                    the image is super clear
                  </span>
                  , on the case I had before, the image started fading into
                  yellowish color after few weeks. Love it.&quot;
                </p>
              </div>
              <div className="flex gap-4 mt-2">
                <Image
                  alt=""
                  src={"/users/user-2.png"}
                  className="rounded-full h-12 w-12 object-cover"
                  width={100}
                  height={100}
                />
                <div className="flex flex-col">
                  <p className="font-semibold">Nichole</p>
                  <div className="flex gap-1.5 items-center text-zinc-600">
                    <Check className="h-4 w-4 stroke-[3px] text-green-600" />
                    <p className="text-sm">Verified Purchase</p>
                  </div>
                </div>
              </div>
            </div>
            {/*third */}
            <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
              <div className="flex gap-0.5 mb-2">
                <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                <Star className="h-4 w-4 text-yellow-500 fill-gray-100 outline-yellow-500" />
              </div>
              <div className="text-lg leading-8">
                <p>
                  &quot;The case feels durable and I even got a compliment on
                  the design. Had the case for more than 3 months now and{" "}
                  <span className="p-0.5 bg-slate-800 text-white">
                    the image is super clear
                  </span>
                  , on the case I had before, the image started fading into
                  yellowish color after few weeks. Love it.&quot;
                </p>
              </div>
              <div className="flex gap-4 mt-2">
                <Image
                  alt=""
                  src={"/users/user-3.png"}
                  className="rounded-full h-12 w-12 object-cover"
                  width={100}
                  height={100}
                />
                <div className="flex flex-col">
                  <p className="font-semibold">Akriti</p>
                  <div className="flex gap-1.5 items-center text-zinc-600">
                    <Check className="h-4 w-4 stroke-[3px] text-green-600" />
                    <p className="text-sm">Verified Purchase</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
        <div className="pt-16">
          <Reviews />
        </div>
      </section>
      <section>
        <MaxWidthWrapper className="py-24">
          <div className="mb-12 px-6 lg:px-8">
            <div className="mx-auto max-w-2xl sm:text-center">
              {" "}
              <h2 className="order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-4xl sm:text-5xl md:text-6xl text-gray-900">
                Upload your photo and get {""}
                <span className="relative px-2 bg-blue-600 text-white">
                  your own case
                </span>
                {""} now
              </h2>
            </div>
          </div>
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="relative flex flex-col items-center md:grid grid-cols-2 gap-40">
              <Image
                alt=""
                src={"/arrow.png"}
                width={100}
                height={100}
                className="absolute top-[25rem] md:top-1/2 -translate-y-1/2 z-10 left-1/2 -translate-x-1/2 rotate-90 md:rotate-0"
              />
              <div className="relative h-80 md:h-full w-full md:justify-self-end max-w-sm rounded-xl bg-gray-900/5 ring-inset ring-gray-900/10 lg:rounded-2xl">
                <Image
                  alt=""
                  src={"/horse.jpg"}
                  width={300}
                  height={300}
                  className=" rounded-md object-cover bg-white shadow-2xl ring-1 ring-gray-900/10 h-full w-full"
                />
              </div>
              <Phone className="w-60" imgSrc="/horse_phone.jpg" />
            </div>
          </div>
          <ul className="mx-auto mt-12 max-w-prose sm:text-lg space-y-2 w-fit">
            <li className="w-fit">
              <Check className="h-5 w-5 text-green-600 inline mr-1.5" />
              High-quality silicone material
            </li>
            <li className="w-fit">
              <Check className="h-5 w-5 text-green-600 inline mr-1.5" />
              Scratch and fingerprint resistant coating
            </li>
            <li className="w-fit">
              <Check className="h-5 w-5 text-green-600 inline mr-1.5" />
              Wireless charging compatible
            </li>
            <li className="w-fit">
              <Check className="h-5 w-5 text-green-600 inline mr-1.5" />
              5-year print warranty
            </li>
            <div className="flex justify-center">
              <Link
                className={buttonVariants({
                  size: "lg",
                  className: "mx-auto mt-8",
                })}
                href="/configure/upload"
              >
                Create your case now <ArrowRight className="ml-1.5 h-5 w-5" />
              </Link>
            </div>
          </ul>
        </MaxWidthWrapper>
      </section>
    </div>
  );
}
