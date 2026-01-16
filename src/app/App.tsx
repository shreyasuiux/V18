// Main App Component with Simple Navigation
import React from "react";
import { ThemeProvider } from "./contexts/ThemeContext";
import { NavigationProvider, useNavigation } from "./contexts/NavigationContext";

// Import page components from /src/pages
import Desktop2 from "../imports/Desktop72";
import CloudPractice from "../pages/services/CloudPractice";
import DigitalEngineering from "../pages/services/DigitalEngineering";
import BigData from "../pages/services/BigData";
import AppModernization from "../pages/services/AppModernization";
import Security from "../pages/services/Security";
import DatabaseManagement from "../pages/services/DatabaseManagement";
import ERPTesting from "../pages/services/ERPTesting";
import AgentStudio from "../pages/products/AgentStudio";
import AtlasAPIManager from "../pages/products/AtlasAPIManager";
import OttohmVideo from "../pages/products/OttohmVideo";
import ITSMTicketing from "../pages/products/ITSMTicketing";
import AIOps from "../pages/products/AIOps";
import SmartContracts from "../pages/products/SmartContracts";
import AI from "../pages/ai/AI";
import BFSIAgents from "../pages/ai/BFSIAgents";
import BrandManagement from "../pages/ai/BrandManagement";
import OurTeam from "../pages/who-we-are/OurTeam";
import AboutUs from "../pages/who-we-are/AboutUs";
import Partners from "../pages/who-we-are/Partners";
import Careers from "../pages/who-we-are/Careers";
import NewsUpdates from "../pages/who-we-are/NewsUpdates";
import CaseStudies from "../pages/CaseStudies";

function AppContent() {
  const { currentPath } = useNavigation();

  // Route mapping
  const renderPage = () => {
    switch (currentPath) {
      case '/':
        return <Desktop2 />;
      
      // Services
      case '/services/cloud-practice':
        return <CloudPractice />;
      case '/services/digital-engineering':
        return <DigitalEngineering />;
      case '/services/big-data':
        return <BigData />;
      case '/services/app-modernization':
        return <AppModernization />;
      case '/services/security':
        return <Security />;
      case '/services/database-management':
        return <DatabaseManagement />;
      case '/services/erp-testing':
        return <ERPTesting />;
      
      // Products
      case '/products/agent-studio':
        return <AgentStudio />;
      case '/products/atlas-api-manager':
        return <AtlasAPIManager />;
      case '/products/ottohm-video':
        return <OttohmVideo />;
      case '/products/itsm-ticketing':
        return <ITSMTicketing />;
      case '/products/ai-ops':
        return <AIOps />;
      case '/products/smart-contracts':
        return <SmartContracts />;
      
      // AI
      case '/ai':
        return <AI />;
      case '/ai/bfsi-agents':
        return <BFSIAgents />;
      case '/ai/brand-management':
        return <BrandManagement />;
      
      // Who We Are
      case '/who-we-are/our-team':
        return <OurTeam />;
      case '/who-we-are/about-us':
        return <AboutUs />;
      case '/who-we-are/partners':
        return <Partners />;
      case '/who-we-are/careers':
        return <Careers />;
      case '/who-we-are/news-updates':
        return <NewsUpdates />;
      
      // Case Studies
      case '/case-studies':
        return <CaseStudies />;
      
      // Default - Home
      default:
        return <Desktop2 />;
    }
  };

  return (
    <div className="w-full transition-colors duration-300" style={{ backgroundColor: 'var(--theme-bg-primary)' }}>
      {renderPage()}
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <NavigationProvider>
        <AppContent />
      </NavigationProvider>
    </ThemeProvider>
  );
}