/**
 * NAVIGATION HELPER UTILITY
 * PURPOSE: Centralized route path management
 * USAGE: Returns paths only - components must use useNavigate() from react-router-dom
 */

/**
 * Service titles mapping (for consistency)
 */
export const SERVICE_TITLES = {
  CLOUD_PRACTICE: 'Cloud Practice',
  DIGITAL_ENGINEERING: 'Digital & Product Engineering',
  BIG_DATA: 'Big Data',
  APP_MODERNIZATION: 'App Modernization',
  SECURITY: 'Security',
  DATABASE_MANAGEMENT: 'Database Management',
  ERP_TESTING: 'ERP & Testing',
} as const;

/**
 * Product titles mapping (for consistency)
 */
export const PRODUCT_TITLES = {
  AGENT_STUDIO: 'Agent Studio',
  ATLAS_API_MANAGER: 'Atlas API Manager',
  OTTOHM_VIDEO: 'Ottohm Video',
  ITSM_TICKETING: 'ITSM Ticketing',
  AI_OPS: 'AI Ops Platform',
  SMART_CONTRACTS: 'Smart Contracts',
} as const;

/**
 * AI Solution titles mapping
 */
export const AI_TITLES = {
  BFSI_AGENTS: 'BFSI Agents',
  BRAND_MANAGEMENT: 'Brand Management Agents',
} as const;

/**
 * Who We Are items mapping
 */
export const WHO_WE_ARE_ITEMS = {
  OUR_TEAM: 'Our Team',
  ABOUT_US: 'About Us',
  PARTNERS: 'Partners',
  CAREERS: 'Careers',
  NEWS: 'News & Updates',
} as const;

/**
 * Route mappings - converts titles to URL paths
 */
const SERVICE_ROUTES: Record<string, string> = {
  'Cloud Practice': '/services/cloud-practice',
  'Digital & Product Engineering': '/services/digital-engineering',
  'Big Data': '/services/big-data',
  'App Modernization': '/services/app-modernization',
  'Security': '/services/security',
  'Database Management': '/services/database-management',
  'ERP & Testing': '/services/erp-testing',
  'ERP Testing & Automation': '/services/erp-testing', // Alias for search
};

const PRODUCT_ROUTES: Record<string, string> = {
  'Agent Studio': '/products/agent-studio',
  'Atlas API Manager': '/products/atlas-api-manager',
  'Ottohm Video': '/products/ottohm-video',
  'ITSM Ticketing': '/products/itsm-ticketing',
  'AI Ops Platform': '/products/ai-ops',
  'AIOps': '/products/ai-ops', // Alias
  'Smart Contracts': '/products/smart-contracts',
};

const AI_ROUTES: Record<string, string> = {
  'BFSI Agents': '/ai/bfsi-agents',
  'Brand Management Agents': '/ai/brand-management',
};

const WHO_WE_ARE_ROUTES: Record<string, string> = {
  'Our Team': '/who-we-are/our-team',
  'About Us': '/who-we-are/about-us',
  'Partners': '/who-we-are/partners',
  'Careers': '/who-we-are/careers',
  'News & Updates': '/who-we-are/news-updates',
  'News': '/who-we-are/news-updates', // Alias
};

/**
 * Get URL for a service
 */
export function getServiceUrl(serviceTitle: string): string {
  return SERVICE_ROUTES[serviceTitle] || '/';
}

/**
 * Get URL for a product
 */
export function getProductUrl(productTitle: string): string {
  return PRODUCT_ROUTES[productTitle] || '/';
}

/**
 * Get URL for an AI solution
 */
export function getAIUrl(aiTitle?: string): string {
  if (!aiTitle) return '/ai';
  return AI_ROUTES[aiTitle] || '/ai';
}

/**
 * Get URL for a Who We Are item
 */
export function getWhoWeAreUrl(item: string): string {
  return WHO_WE_ARE_ROUTES[item] || '/';
}

/**
 * Get home URL
 */
export function getHomeUrl(): string {
  return '/';
}

/**
 * Get case studies URL
 */
export function getCaseStudiesUrl(): string {
  return '/case-studies';
}
