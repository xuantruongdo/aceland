import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="w-full md:min-h-screen bg-[#2e2e2e] flex flex-col md:flex-row items-center md:items-stretch gap-10 md:gap-24 px-6 py-12 md:p-[100px]">
      <div className="relative hidden md:block w-[42%] shrink-0">
        <Image
          src="/images/about.png"
          alt="Ace Land About"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      <div className="flex-1 flex flex-col justify-center space-y-6 md:space-y-8 items-center md:items-start text-center md:text-left">
        <div className="space-y-3">
          <div className="flex flex-col md:flex-row items-center gap-3 md:gap-4">
            <Image
              src="/images/logo.png"
              alt="Ace Land Logo"
              width={80}
              height={80}
              className="object-contain"
            />
            <div className="inline-block">
              <h2 className="text-xl md:text-3xl font-light tracking-[0.15em] text-white font-crimson uppercase">
                Về Chúng Tôi
              </h2>
              <div className="h-px bg-white mt-2 w-full" />
            </div>
          </div>
        </div>

        <div className="space-y-4 md:space-y-5 max-w-xl">
          <p className="text-sm md:text-[15px] leading-[1.8] md:leading-[1.85] text-gray-300">
            Ace Land là doanh nghiệp tiên phong trong lĩnh vực thương mại và đầu
            tư bất động sản cao cấp, hoạt động chuyên sâu trong các mảng phát
            triển dự án, phân phối - tiếp thị, tư vấn đầu tư và quản lý tài sản
            bất động sản.
          </p>
          <p className="text-sm md:text-[15px] leading-[1.8] md:leading-[1.85] text-gray-300">
            Với tầm nhìn chiến lược và tư duy đột phá, chúng tôi không ngừng
            khẳng định vị thế là đối tác tin cậy của các chủ đầu tư, nhà phát
            triển và khách hàng cao cấp tại Việt Nam.
          </p>
          <p className="text-sm md:text-[15px] leading-[1.8] md:leading-[1.85] text-gray-300">
            Mỗi dự án mà chúng tôi đồng hành đều mang đậm dấu ấn của tư duy
            chuyên nghiệp, chất lượng vượt trội và tầm nhìn dài hạn.
          </p>
        </div>

        <blockquote className="max-w-md pt-2">
          <p className="text-sm md:text-lg leading-[1.9] md:leading-[2] text-gray-300 italic text-center md:text-left">
            <span className="text-2xl md:text-3xl mr-1 text-gray-400 not-italic">
              "
            </span>
            Chúng tôi không chỉ xây dựng nơi để sống, mà tạo nên không gian để
            tận hưởng cuộc sống.
            <span className="text-2xl md:text-3xl ml-1 text-gray-400 not-italic">
              "
            </span>
          </p>
        </blockquote>
      </div>
    </div>
  );
}
