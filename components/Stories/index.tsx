import Image from "next/image";

export default function Stories() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Background */}
      <Image
        src="/images/story.png"
        alt="Ace Land Building"
        fill
        className="object-cover object-left"
        priority
      />

      {/* Content */}
      <div
        className="
          relative z-10
          flex flex-col justify-center space-y-7

          /* MOBILE */
          mx-5 my-10 px-6 py-8
          w-auto h-auto

          /* DESKTOP */
          lg:absolute lg:top-20 lg:left-20
          lg:w-[700px] lg:h-auto
          lg:mx-0 lg:my-0
          lg:px-10 lg:py-12

          /* STYLE */
          backdrop-blur-md
          border border-white/10
          shadow-2xl
        "
      >
        <div className="flex justify-center">
          <Image
            src="/images/logo.png"
            alt="Ace Land Logo"
            width={120}
            height={120}
            className="object-contain w-auto h-auto"
          />
        </div>

        <h2 className="text-3xl md:text-[30px] font-light text-center tracking-[0.1em] font-crimson text-white uppercase">
          CÂU CHUYỆN
        </h2>

        {/* Text */}
        <p className="text-sm md:text-[15px] leading-[1.9] text-slate-300 text-center lg:text-left">
          Ace Land được thành lập với khát vọng kiến tạo không gian sống xứng
          tầm – nâng tầm giá trị Việt. Trải qua hành trình phát triển, Ace Land
          luôn giữ vững triết lý:
        </p>

        {/* Quote */}
        <blockquote className="border-l-[3px] border-cyan-400 pl-5 py-1">
          <p className="text-sm md:text-[15px] leading-[1.9] text-white/90 italic">
            "Một dự án bất động sản không chỉ là nơi an cư, mà còn là biểu tượng
            của phong cách, đẳng cấp và tầm nhìn của chủ nhân."
          </p>
        </blockquote>

        {/* Text */}
        <p className="text-sm md:text-[15px] leading-[1.9] text-slate-300 text-center lg:text-left">
          Trải qua hành trình phát triển, Ace Land luôn kiên định với giá trị
          cốt lõi – tâm tâm, chuẩn mực và khác biệt, để mỗi dự án trở thành một
          di sản sống, phản chiếu tinh thần thượng lưu và vẻ đẹp bền vững theo
          thời gian.
        </p>
      </div>
    </section>
  );
}
