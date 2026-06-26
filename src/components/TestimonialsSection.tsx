import { TestimonialSlider, type Testimonial } from "@/components/ui/testimonial-slider"

const testimonials: Testimonial[] = [
  {
    image: "https://cdn.poehali.dev/projects/c132f7fc-9db2-483b-ac94-439a8d0266f2/files/74fc3a6b-4091-422f-8c38-7275311d0c51.jpg",
    quote:
      "Даже не верила, что ипотеку можно одобрить так быстро. Подали заявки в несколько банков одновременно, уже через 2 дня было три положительных ответа. Ребята взяли на себя абсолютно все — от просмотров до регистрации. Въехали в новую квартиру через три недели после первого звонка!",
    name: "Марина Козлова",
    role: "Купила квартиру в новостройке",
    rating: 5,
  },
  {
    image: "https://cdn.poehali.dev/projects/c132f7fc-9db2-483b-ac94-439a8d0266f2/files/9700ca1c-f12e-4866-b4f9-6b44a1d0e811.jpg",
    quote:
      "Хотел продать свою старую двушку и сразу купить дом. Думал, это займёт полгода. Ребята провели обе сделки параллельно — продали квартиру выше ожидаемой цены и подобрали отличный вариант за городом. Всё юридическое сопровождение включено, никаких скрытых доплат. Рекомендую всем!",
    name: "Андрей Соколов",
    role: "Обменял квартиру на дом",
    rating: 5,
  },
  {
    image: "https://cdn.poehali.dev/projects/c132f7fc-9db2-483b-ac94-439a8d0266f2/files/68d0c643-63dd-42ef-a82e-069a09771400.jpg",
    quote:
      "Обратилась как молодой специалист без опыта в ипотеке — вообще не знала с чего начать. Мне всё объяснили простым языком, помогли собрать документы, выбрали программу с господдержкой. Ставка вышла на 1,5% ниже, чем я нашла сама. Счастлива в своей первой квартире!",
    name: "Екатерина Иванова",
    role: "Купила первую квартиру",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-32 px-4 bg-background overflow-visible">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-balance">Что говорят наши клиенты</h2>
          <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto">
            Реальные истории людей, которым мы помогли найти и купить жильё мечты.
          </p>
        </div>
        <TestimonialSlider testimonials={testimonials} />
      </div>
    </section>
  )
}