import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Instagram, Linkedin } from "lucide-react";

interface TeamProps {
  imageUrl: string;
  name: string;
  position: string;
  description: string;
  socialNetworks: SociaNetworkslProps[];
}

interface SociaNetworkslProps {
  name: string;
  url: string;
}

const teamList: TeamProps[] = [
  {
    imageUrl: "https://media.licdn.com/dms/image/v2/D4D35AQEigwtYamyGVQ/profile-framedphoto-shrink_200_200/profile-framedphoto-shrink_200_200/0/1709567111341?e=1723791600&v=beta&t=CTd5rISWCrnvfSYOJiz55JJJRaIU_FXDxf41j_RfK_Q",
    name: "Abhishek Shrestha",
    position: "Spokesperson & Software Tester",
    description: `Senior @Northern Kentucky University `,
    socialNetworks: [
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/abhishekshrestha5125",
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/",
      },
    ],
  },
  {
    imageUrl: "https://media.licdn.com/dms/image/D4D03AQHz2JkXi0ihMw/profile-displayphoto-shrink_200_200/0/1709552818047?e=1728518400&v=beta&t=fnbs2nLPDH-iVQ7v0sTVfdgf3JqEkYaAPTECeJhO4Uk",
    name: "Dawn Saju",
    position: "Full Stack Dev & UI Designer",
    description: "High School Student @IIS Ajman UAE",
    socialNetworks: [
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/dawnsaju/",
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/x_dawn.py",
      },
    ],
  },
  {
    imageUrl: "https://media.licdn.com/dms/image/D5603AQG3b1u_kQo-yw/profile-displayphoto-shrink_200_200/0/1688666918257?e=1728518400&v=beta&t=NLoFeQA_c8bcKkNAJU-x5YMYD-Q84I34NjBwOmQZwwE",
    name: "Sivaibala Karthikeyan",
    position: "Creative Director",
    description: "High School Student @IIS Ajman UAE",
    socialNetworks: [
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/sivaibala-k-3234b1282/",
      },
      {
        name: "Instagram",
        url: "https://www.facebook.com/",
      },
    ],
  },
];

export const Team = () => {
  const socialIcon = (iconName: string) => {
    switch (iconName) {
      case "Linkedin":
        return <Linkedin size="20" />;

      case "Instagram":
        return <Instagram size="20" />;
    }
  };

  return (
    <section
      id="team"
      className="container py-24 sm:py-32"
    >
      <div className="text-center py-8">
        <h2 className="text-4xl md:text-5xl font-bold">
            <span className="">
            Meet Our {" "}
            </span>
            <span className="bg-gradient-to-r from-blue-500 to-blue-400 text-transparent bg-clip-text">
                Team
            </span>
        </h2>

        <p className="mt-4 mb-10 text-xl text-muted-foreground">
          Passionate creators bringing AI to healthcare.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 lg:flex justify-center items-center gap-8 gap-y-10">
        {teamList.map(
          ({ imageUrl, name, position, description, socialNetworks }: TeamProps) => (
            <Card
              key={name}
              className="bg-muted/50 relative mt-8 flex flex-col justify-center items-center p-4"
            >
              <CardHeader className="mt-8 flex justify-center items-center pb-2">
                <img
                  src={imageUrl}
                  alt={`${name} ${position}`}
                  className="absolute -top-12 rounded-full w-28 h-28 aspect-square object-cover"
                />
                <CardTitle className="text-center">{name}</CardTitle>
                <CardDescription className="text-primary">
                  {position}
                </CardDescription>
              </CardHeader>

              <CardContent className="text-center pb-2">
                <p>{description}</p>
              </CardContent>

              <CardFooter>
                {socialNetworks.map(({ name, url }: SociaNetworkslProps) => (
                  <div key={name}>
                    <a
                      rel="noreferrer noopener"
                      href={url}
                      target="_blank"
                      className={buttonVariants({
                        variant: "ghost",
                        size: "sm",
                      })}
                    >
                      <span className="sr-only">{name} icon</span>
                      {socialIcon(name)}
                    </a>
                  </div>
                ))}
              </CardFooter>
            </Card>
          )
        )}
      </div>
    </section>
  );
};

export default Team;