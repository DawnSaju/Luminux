import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MedalIcon, MapIcon, PlaneIcon, GiftIcon } from "./ui/icons";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <MedalIcon />,
    title: "Personalized Care",
    description:
      "Tailors health advice to each user, providing customized insights based on individual needs.",
  },
  {
    icon: <MapIcon />,
    title: "Real Time Guidance",
    description:
      "Delivers instant, accurate health-related advice, helping users make informed decisions promptly.",
  },
  {
    icon: <PlaneIcon />,
    title: "Scalability",
    description:
      "Handles a growing number of user interactions with consistent performance and reliability.",
  },
  {
    icon: <GiftIcon />,
    title: "Interactive Experience",
    description:
      "Engages users with interactive elements, making healthcare assistance both informative and user-friendly.",
  },
];


export const Process = () => {
  return (
    <section
      id="process"
      className="container text-center py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold ">
        How It{" "}
        <span className="bg-gradient-to-r from-blue-500 to-blue-400 text-transparent bg-clip-text">
          Works{" "}
        </span>
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        Our AI Healthcare Chatbot leverages Generative AI based technology to provide intelligent, responsive healthcare assistance.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card
            key={title}
            className="bg-muted/50"
          >
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Process;