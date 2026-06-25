import PageLayout from "@/components/PageLayout";

export default function About() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative bg-[#4e807c] py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-light tracking-wider text-white uppercase">
            Về chúng tôi
          </h1>
          <div className="w-16 h-0.5 bg-white mx-auto mt-6 mb-8" />
          <p className="text-white/80 max-w-3xl mx-auto text-lg leading-relaxed">
            Kaistudio được thành lập với mục đích kiến tạo nên những công trình
            kiến trúc sang trọng, mang đến chất lượng & sự bền vững trong quá
            trình sử dụng cho khách hàng. Các thiết kế của Kaistudio luôn cam kết
            mang đến giá trị cao nhất trong tính thẩm mỹ và sự vững chắc, bền lâu
            trong công năng sử dụng.
          </p>
        </div>
      </section>

      {/* Who is behind all this */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            {/* Image */}
            <div className="relative group">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src="/images/about.jpg"
                  alt="KAI Studio - Design and Construction"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
            </div>

            {/* Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-light text-[#4e807c] uppercase tracking-wider">
                Ai đứng sau tất cả điều này?
              </h2>
              <div className="w-12 h-0.5 bg-[#4e807c] mt-4 mb-6" />
              <div className="space-y-5 text-gray-600 leading-relaxed">
                <p className="italic border-l-4 border-[#4e807c] pl-4 text-gray-500">
                  Kaistudio được thành lập bởi những kiến trúc sư tâm huyết, với
                  niềm đam mê kiến tạo những không gian sống đẳng cấp, nơi mà sự
                  sang trọng và tinh tế hòa quyện cùng chất lượng bền vững theo
                  thời gian.
                </p>
                <p>
                  Với hơn nhiều năm kinh nghiệm trong lĩnh vực thiết kế và thi
                  công nội thất, chúng tôi đã đồng hành cùng hàng trăm khách hàng
                  trên khắp cả nước, biến những ý tưởng và mong muốn của họ thành
                  hiện thực.
                </p>
                <p>
                  Mỗi công trình ra đời là một dấu ấn riêng, là sự kết hợp hài
                  hòa giữa phong cách cá nhân của chủ đầu tư và xu hướng thiết kế
                  hiện đại, tạo nên những giá trị bền lâu cho không gian sống và
                  làm việc.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-[#4e807c] uppercase tracking-wider">
              Các dịch vụ của chúng tôi
            </h2>
            <div className="w-16 h-0.5 bg-[#4e807c] mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Service 1 */}
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-12 h-12 bg-[#4e807c]/10 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#4e807c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Tư vấn lên ý tưởng
                  </h3>
                  <p className="text-gray-500 leading-relaxed">
                    Chúng tôi lắng nghe và thấu hiểu mong muốn của khách hàng, từ
                    đó đưa ra những ý tưởng thiết kế tối ưu nhất, phù hợp với
                    phong cách và ngân sách của từng dự án.
                  </p>
                </div>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-12 h-12 bg-[#4e807c]/10 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#4e807c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Thiết kế
                  </h3>
                  <p className="text-gray-500 leading-relaxed">
                    Đội ngũ kiến trúc sư giàu kinh nghiệm của Kaistudio sẽ mang
                    đến những bản vẽ thiết kế chi tiết, sáng tạo và đầy tính
                    thẩm mỹ cho không gian sống của bạn.
                  </p>
                </div>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-12 h-12 bg-[#4e807c]/10 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#4e807c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Thi công
                  </h3>
                  <p className="text-gray-500 leading-relaxed">
                    Quy trình thi công chuyên nghiệp, đảm bảo tiến độ và chất
                    lượng công trình. Chúng tôi sử dụng vật liệu cao cấp, cam kết
                    mang đến sự bền vững theo thời gian.
                  </p>
                </div>
              </div>
            </div>

            {/* Service 4 */}
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-12 h-12 bg-[#4e807c]/10 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#4e807c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Giám sát
                  </h3>
                  <p className="text-gray-500 leading-relaxed">
                    Dịch vụ giám sát thi công chặt chẽ, đảm bảo mọi hạng mục được
                    thực hiện đúng thiết kế, đúng tiêu chuẩn kỹ thuật và an toàn
                    lao động.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
