export function PortfolioShowcase() {
  const portfolioItems = [
    {
      image: "https://cdn.poehali.dev/projects/c132f7fc-9db2-483b-ac94-439a8d0266f2/files/412840fb-ef43-48fb-8c42-19cd53d45937.jpg",
    },
    {
      image: "https://cdn.poehali.dev/projects/c132f7fc-9db2-483b-ac94-439a8d0266f2/files/305ee267-1c0a-4aeb-8a72-ee4c7c430416.jpg",
    },
    {
      image: "https://cdn.poehali.dev/projects/c132f7fc-9db2-483b-ac94-439a8d0266f2/files/704761b1-f954-48dc-ab9b-b64856513c92.jpg",
    },
    {
      image: "https://cdn.poehali.dev/projects/c132f7fc-9db2-483b-ac94-439a8d0266f2/files/a20a7767-924e-4029-b321-417eadbff737.jpg",
    },
    {
      image: "https://cdn.poehali.dev/projects/c132f7fc-9db2-483b-ac94-439a8d0266f2/files/759b03de-41bd-4d6f-8135-ba01e1a7697d.jpg",
    },
  ]

  return (
    <section className="pt-4 pb-20 overflow-hidden">
      <div className="relative flex">
        <div className="flex gap-6 animate-scroll-seamless">
          {portfolioItems.map((item, index) => (
            <div key={`set1-${index}`} className="flex-shrink-0 w-[600px]">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-lg">
                <img src={item.image || "/placeholder.svg"} alt="" className="w-full h-full object-cover" />
              </div>
            </div>
          ))}
        </div>
        <div className="flex gap-6 animate-scroll-seamless ml-6" aria-hidden="true">
          {portfolioItems.map((item, index) => (
            <div key={`set2-${index}`} className="flex-shrink-0 w-[600px]">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-lg">
                <img src={item.image || "/placeholder.svg"} alt="" className="w-full h-full object-cover" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}