import { motion } from "framer-motion"

export function CaseStudiesSection() {
  const caseStudies = [
    {
      client: "Новостройка",
      project: "ЖК «Солнечный»",
      metric: "Сэкономили 480 000 ₽",
      description: "Помогли семье купить квартиру в новом ЖК по цене застройщика, одобрили ипотеку под 8,2% и сопроводили сделку под ключ.",
      image: "https://cdn.poehali.dev/projects/c132f7fc-9db2-483b-ac94-439a8d0266f2/files/730d3153-7d0d-4997-aba5-53b8bd8f5976.jpg",
    },
    {
      client: "Вторичный рынок",
      project: "3-комнатная квартира",
      metric: "Одобрение за 2 дня",
      description: "Клиент получил одобрение ипотеки в трёх банках за 48 часов. Выбрали лучшую ставку и закрыли сделку за 2 недели.",
      image: "https://cdn.poehali.dev/projects/c132f7fc-9db2-483b-ac94-439a8d0266f2/files/35ee30a5-9074-4c8e-971d-bac818582f8e.jpg",
    },
    {
      client: "Готовый дом",
      project: "Коттедж в пригороде",
      metric: "Продали квартиру +15%",
      description: "Одновременно продали старую квартиру клиента на 15% выше рынка и подобрали загородный дом с полным юридическим сопровождением.",
      image: "https://cdn.poehali.dev/projects/c132f7fc-9db2-483b-ac94-439a8d0266f2/files/00f6f1d7-61b5-42b5-8684-bb6205c7c3d1.jpg",
    },
    {
      client: "Обмен жилья",
      project: "Семья из 4 человек",
      metric: "Ключи за 3 недели",
      description: "Организовали альтернативную сделку: продали двушку, одобрили ипотеку и помогли переехать в просторную новостройку за 21 день.",
      image: "https://cdn.poehali.dev/projects/c132f7fc-9db2-483b-ac94-439a8d0266f2/files/e14e4c0d-2a8c-4911-b592-e5e5c63d0490.jpg",
    },
  ]

  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="font-serif text-4xl md:text-5xl font-bold mb-4"
          >
            Реальные сделки
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Истории клиентов, которым мы помогли найти и купить жильё на выгодных условиях.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-secondary rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="aspect-[3/2] overflow-hidden">
                <img
                  src={study.image || "/placeholder.svg"}
                  alt={study.project}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <div className="text-sm font-semibold text-primary mb-2">{study.client}</div>
                <h3 className="font-serif text-2xl font-bold mb-3">{study.project}</h3>
                <div className="text-3xl font-bold text-primary mb-4">{study.metric}</div>
                <p className="text-muted-foreground leading-relaxed">{study.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}