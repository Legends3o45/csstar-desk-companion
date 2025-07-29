import { DesktopBackground } from '@/components/DesktopBackground';
import mockupImage from '@/assets/cs-star-mockup.jpg';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Mockup */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            CS-star University Assistant
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            A modern, sleek desktop chatbot interface designed for university departmental assistance. 
            Features a ChatGPT-inspired floating side panel with dark academic theme.
          </p>
          
          {/* Design Mockup Display */}
          <div className="max-w-4xl mx-auto mb-12">
            <img 
              src={mockupImage} 
              alt="CS-star Chatbot UI Mockup"
              className="w-full h-auto rounded-2xl shadow-2xl border border-border"
            />
            <p className="text-sm text-muted-foreground mt-4 italic">
              UI Mockup: CS-star floating chatbot interface with dark blue academic theme
            </p>
          </div>
        </div>
      </div>

      {/* Live Interactive Demo */}
      <DesktopBackground />
    </div>
  );
};

export default Index;