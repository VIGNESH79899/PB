# Overview

PixelBoost is a full-stack web application for a website enhancement service company. It's a marketing website that showcases services like website redesigns, performance optimization, SEO enhancement, security improvements, and mobile responsiveness. The application includes a contact form system for lead generation and client inquiries.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React with TypeScript using Vite as the build tool
- **Routing**: Wouter for client-side routing (lightweight React router alternative)  
- **UI Components**: shadcn/ui component library built on Radix UI primitives with Tailwind CSS for styling
- **State Management**: TanStack Query (React Query) for server state management
- **Form Handling**: React Hook Form with Zod validation for type-safe form handling
- **Styling**: Tailwind CSS with custom design tokens and CSS variables for theming

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Build System**: ESBuild for production bundling, tsx for development
- **API Design**: RESTful API endpoints following Express patterns
- **Request Logging**: Custom middleware for API request/response logging
- **Error Handling**: Centralized error handling middleware

## Data Storage
- **ORM**: Drizzle ORM with PostgreSQL dialect configured
- **Database**: PostgreSQL (via Neon Database serverless connection)
- **Schema Management**: Type-safe schema definitions with Drizzle and Zod validation
- **Development Storage**: In-memory storage implementation for development/testing
- **Migration System**: Drizzle Kit for database schema migrations

## Development Tools
- **Type Safety**: Full TypeScript implementation across frontend, backend, and shared code
- **Code Organization**: Monorepo structure with shared types and schemas
- **Path Mapping**: TypeScript path aliases for clean imports (@/, @shared/, @assets/)
- **Hot Reloading**: Vite HMR for frontend, tsx watch mode for backend

## External Dependencies

### UI and Styling
- Radix UI primitives for accessible component foundations
- Tailwind CSS for utility-first styling with PostCSS processing
- Lucide React for consistent iconography
- Google Fonts integration (Inter, Architects Daughter, DM Sans, Fira Code, Geist Mono)

### Backend Services
- Neon Database for serverless PostgreSQL hosting
- Express session management with connect-pg-simple for PostgreSQL session store

### Development and Build Tools
- Vite with React plugin for frontend development
- Replit-specific plugins for development environment integration
- ESBuild for optimized production builds
- Drizzle Kit for database operations and migrations

### Form and Validation
- React Hook Form for performant form handling
- Zod for runtime type validation and schema definition
- Hookform resolvers for Zod integration

### Date and Utility Libraries
- date-fns for date manipulation and formatting
- clsx and class-variance-authority for conditional styling
- Various utility packages for enhanced development experience