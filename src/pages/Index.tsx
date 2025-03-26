
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import MainLayout from "@/components/layouts/MainLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";

interface ApiResponse {
  message: string;
  timestamp: string;
}

const Index = () => {
  const [apiMessage, setApiMessage] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchMessage = async () => {
    setLoading(true);
    try {
      // In a real app, this would be the URL of your deployed backend
      // For local development, use a mock response for now
      // const response = await fetch('http://localhost:3001/api/message');
      // const data = await response.json();
      
      // Mock response
      const mockData = {
        message: "Hello, this is AWS CI/CD tutorial",
        timestamp: new Date().toISOString()
      };
      
      setTimeout(() => {
        setApiMessage(mockData);
        setLoading(false);
        toast.success("API request successful");
      }, 800); // Simulated network delay
    } catch (error) {
      console.error("Error fetching message:", error);
      setLoading(false);
      toast.error("Failed to fetch message");
    }
  };

  // Container variants for staggered animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  // Item variants for individual elements
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <MainLayout>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-col items-center text-center max-w-3xl mx-auto pt-10 pb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="mb-2">
            <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
              AWS CI/CD PIPELINE
            </span>
          </motion.div>
          
          <motion.h1 
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6"
          >
            Node.js API with{" "}
            <span className="text-primary">AWS CI/CD</span>
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg text-muted-foreground mb-10 max-w-2xl"
          >
            A beautifully designed, minimalist application demonstrating continuous integration
            and continuous deployment with AWS services.
          </motion.p>
          
          <motion.div variants={itemVariants}>
            <Button 
              onClick={fetchMessage} 
              disabled={loading}
              size="lg"
              className="button-hover"
            >
              {loading ? "Fetching..." : "Fetch API Message"}
            </Button>
          </motion.div>

          {apiMessage && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="w-full max-w-xl mt-12"
            >
              <Card className="glass overflow-hidden border-border/40">
                <CardContent className="p-6">
                  <h3 className="text-lg font-medium mb-2">API Response</h3>
                  <div className="bg-secondary p-4 rounded-lg mb-4 overflow-x-auto">
                    <pre className="text-sm text-secondary-foreground">
                      {JSON.stringify(apiMessage, null, 2)}
                    </pre>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Timestamp: {new Date(apiMessage.timestamp).toLocaleString()}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="grid md:grid-cols-3 gap-6 mb-20"
        >
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="border border-border/40 hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </div>
    </MainLayout>
  );
};

const features = [
  {
    title: "Continuous Integration",
    description: "Automatically build and test your code changes, ensuring quality at every step.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-6 h-6 text-primary"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
        />
      </svg>
    ),
  },
  {
    title: "Continuous Deployment",
    description: "Deploy your application automatically whenever changes are merged to the main branch.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-6 h-6 text-primary"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
        />
      </svg>
    ),
  },
  {
    title: "Scalable Architecture",
    description: "Built with scalability in mind, ready to grow with your needs without refactoring.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-6 h-6 text-primary"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
        />
      </svg>
    ),
  },
];

export default Index;
