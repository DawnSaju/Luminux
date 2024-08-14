
export default function Features() {
    return (
      <section id="features" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Discover Our <span className="bg-gradient-to-r from-blue-500 to-blue-400 text-transparent bg-clip-text">Key</span> Features</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explore the key functionalities that make our AI Healthcare Chatbot your trusted companion for health related guidance.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            <div className="grid gap-4 text-center">
              <div className="bg-muted rounded-full flex items-center justify-center aspect-square w-16 mx-auto">
                <BoltIcon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Realtime Response</h3>
              <p className="text-muted-foreground">
                Our chatbot is optimized to provide quick, accurate responses, ensuring you get the help you need, when you need it.
              </p>
            </div>
            <div className="grid gap-4 text-center">
              <div className="bg-muted rounded-full flex items-center justify-center aspect-square w-16 mx-auto">
                <MoveHorizontalIcon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Personalized Health Advice</h3>
              <p className="text-muted-foreground">
                Receive tailored health recommendations and guidance, customized to your unique health needs and preferences.
              </p>
            </div>
            <div className="grid gap-4 text-center">
              <div className="bg-muted rounded-full flex items-center justify-center aspect-square w-16 mx-auto">
                <ShieldCheckIcon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Secure & Confidential</h3>
              <p className="text-muted-foreground">
                Your privacy is our priority. All your health data is securely managed and protected with the highest standards of confidentiality.
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  function BoltIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <circle cx="12" cy="12" r="4" />
      </svg>
    )
  }
  
  
  function MoveHorizontalIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="18 8 22 12 18 16" />
        <polyline points="6 8 2 12 6 16" />
        <line x1="2" x2="22" y1="12" y2="12" />
      </svg>
    )
  }
  
  
  function ShieldCheckIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    )
  }

