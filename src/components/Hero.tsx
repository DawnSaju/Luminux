import { Button } from "@/components/ui/button";
import Spline from '@splinetool/react-spline';


export default function Hero() {
    return (
      <>
        <section id="home" className="dark">
          <div className="relative overflow-hidden py-24 lg:py-32">
            <div className="container">
            <div className="w-full h-[500px] lg:h-[700px]">
              <Spline 
                scene="https://prod.spline.design/F67sK3La4dcffkR2/scene.splinecode" 
                style={{ width: '100%', height: '100%' }}
              />
            </div>
              <div className="mt-10 relative max-w-5xl mx-auto">
                <div className="absolute bottom-12 -start-20 -z-[1] w-48 h-48 bg-gradient-to-b from-primary-foreground via-primary-foreground to-background p-px rounded-lg">
                  <div className="w-48 h-48 rounded-lg bg-background/10" />
                </div>
                <div className="absolute -top-12 -end-20 -z-[1] w-48 h-48 bg-gradient-to-t from-primary-foreground via-primary-foreground to-background p-px rounded-full">
                  <div className="w-48 h-48 rounded-full bg-background/10" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
  