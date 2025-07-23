const stats = [
  {
    number: "10,000+",
    label: "Agencies Listed",
    description: "Active creative agencies"
  },
  {
    number: "500,000+",
    label: "Projects Matched",
    description: "Successfully completed"
  },
  {
    number: "95%",
    label: "Client Satisfaction",
    description: "Average rating"
  },
  {
    number: "$2.5B+",
    label: "Project Value",
    description: "Facilitated annually"
  }
];

const StatsSection = () => {
  return (
    <section className="py-16 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-muted-foreground">
            The numbers speak for themselves - join the most successful agency network
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="mb-2">
                <span className="text-4xl lg:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  {stat.number}
                </span>
              </div>
              <h3 className="text-lg font-semibold mb-1">
                {stat.label}
              </h3>
              <p className="text-sm text-muted-foreground">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;