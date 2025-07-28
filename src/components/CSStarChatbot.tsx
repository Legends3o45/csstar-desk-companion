import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { 
  Send, 
  Settings, 
  Calendar, 
  Users, 
  HelpCircle, 
  CalendarDays,
  Menu,
  X,
  Circle
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

interface CSStarChatbotProps {
  className?: string;
}

export function CSStarChatbot({ className }: CSStarChatbotProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm CS-star, your Computer Science department assistant. How can I help you today?",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isNavOpen, setIsNavOpen] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const navigationItems = [
    { icon: Calendar, label: 'Timetable', key: 'timetable' },
    { icon: Users, label: 'Staff', key: 'staff' },
    { icon: CalendarDays, label: 'Events', key: 'events' },
    { icon: HelpCircle, label: 'FAQ', key: 'faq' },
  ];

  const sendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    // Simulate bot response
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "Thanks for your question! I'm here to help with department information, schedules, staff details, and more. What specific information are you looking for?",
        isUser: false,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className={cn(
      "fixed right-0 top-0 h-screen w-1/2 bg-chatbot-bg text-chatbot-text",
      "shadow-[var(--shadow-chatbot)] z-50 flex flex-col",
      "rounded-l-2xl border-l border-chatbot-border",
      className
    )}>
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-chatbot-border bg-chatbot-surface rounded-tl-2xl">
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsNavOpen(!isNavOpen)}
            className="text-chatbot-text hover:bg-chatbot-hover h-8 w-8"
          >
            {isNavOpen ? <X size={16} /> : <Menu size={16} />}
          </Button>
          <div>
            <h1 className="font-bold text-xl text-chatbot-text">CS-star</h1>
            <div className="flex items-center gap-2">
              <Circle className="w-2 h-2 fill-chatbot-accent text-chatbot-accent" />
              <span className="text-sm text-chatbot-text-muted">Online</span>
            </div>
          </div>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="text-chatbot-text hover:bg-chatbot-hover h-8 w-8"
        >
          <Settings size={16} />
        </Button>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Navigation Sidebar */}
        <div className={cn(
          "bg-chatbot-surface border-r border-chatbot-border transition-all duration-300",
          isNavOpen ? "w-16" : "w-0",
          "overflow-hidden"
        )}>
          <div className="flex flex-col gap-2 p-2">
            {navigationItems.map((item) => (
              <Button
                key={item.key}
                variant="ghost"
                size="icon"
                className="text-chatbot-text hover:bg-chatbot-hover h-12 w-12 rounded-lg"
                title={item.label}
              >
                <item.icon size={20} />
              </Button>
            ))}
          </div>
        </div>

        {/* Main Chat Area */}
        <div className="flex-1 flex flex-col">
          {/* Messages */}
          <ScrollArea className="flex-1 p-4" ref={scrollRef}>
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={cn(
                    "flex",
                    message.isUser ? "justify-end" : "justify-start"
                  )}
                >
                  <div
                    className={cn(
                      "max-w-[80%] rounded-2xl px-4 py-3 shadow-[var(--shadow-bubble)]",
                      "transition-all duration-200 hover:shadow-lg",
                      message.isUser
                        ? "bg-chatbot-user-bubble text-chatbot-text rounded-br-md"
                        : "bg-chatbot-bot-bubble text-chatbot-text rounded-bl-md"
                    )}
                  >
                    <p className="text-sm leading-relaxed">{message.text}</p>
                    <div className="text-xs text-chatbot-text-muted mt-2">
                      {message.timestamp.toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>

          {/* Input Area */}
          <div className="p-4 border-t border-chatbot-border bg-chatbot-surface">
            <div className="flex items-center gap-3">
              <div className="flex-1 relative">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me anything about the department..."
                  className={cn(
                    "bg-chatbot-bg border-chatbot-border text-chatbot-text",
                    "placeholder:text-chatbot-text-muted rounded-full pr-12",
                    "focus:ring-chatbot-accent focus:border-chatbot-accent",
                    "transition-all duration-200"
                  )}
                />
                <Button
                  onClick={sendMessage}
                  size="icon"
                  disabled={!inputValue.trim()}
                  className={cn(
                    "absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8",
                    "bg-chatbot-accent hover:bg-chatbot-accent/90 text-chatbot-bg",
                    "disabled:opacity-50 disabled:cursor-not-allowed",
                    "rounded-full transition-all duration-200",
                    inputValue.trim() && "shadow-[var(--shadow-glow)]"
                  )}
                >
                  <Send size={14} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}