# SafeDocs Portal

## Overview

SafeDocs Portal is a secure document exchange platform designed for enterprise businesses to safely share sensitive documents, invoices, and contracts with clients. The application provides a marketing website with landing pages, pricing information, and contact functionality, with plans for authenticated document upload portals.

The project is built as a full-stack TypeScript application with a React frontend and Express backend, designed to run on Replit with PostgreSQL database support.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18+ with TypeScript
- **Routing**: Wouter (lightweight React router)
- **State Management**: TanStack React Query for server state
- **Styling**: Tailwind CSS v4 with custom theme variables defined in `client/src/index.css`
- **UI Components**: shadcn/ui component library (New York style) with Radix UI primitives
- **Animations**: Framer Motion for page transitions and interactions
- **Build Tool**: Vite with custom plugins for Replit integration

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Runtime**: Node.js with tsx for development, esbuild for production builds
- **API Pattern**: RESTful endpoints under `/api/*` prefix
- **Static Serving**: Built client files served from `dist/public` in production

### Data Storage
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Schema Location**: `shared/schema.ts` - contains shared types between frontend and backend
- **Migrations**: Managed via `drizzle-kit push` command
- **Current Schema**: Basic users table with id, username, password fields
- **In-Memory Fallback**: `MemStorage` class in `server/storage.ts` for development without database

### Key Design Patterns
- **Monorepo Structure**: Single repository with `client/`, `server/`, and `shared/` directories
- **Path Aliases**: `@/*` maps to client source, `@shared/*` maps to shared code
- **Build Process**: Custom `script/build.ts` handles both Vite frontend and esbuild backend builds
- **Environment Detection**: Automatic development/production mode switching

### Internationalization
- Built-in language context (`client/src/lib/language-context.tsx`) supporting German (de) and English (en)
- Language preference persisted to localStorage

## External Dependencies

### Email Service
- **Provider**: Brevo (formerly Sendinblue)
- **Configuration**: Requires `BREVO_API_KEY` environment variable
- **Usage**: Transactional emails for contact form submissions

### Database
- **Provider**: PostgreSQL (provisioned via Replit)
- **Configuration**: Requires `DATABASE_URL` environment variable
- **ORM**: Drizzle with `drizzle-zod` for schema validation

### Frontend Libraries
- **UI Primitives**: Full Radix UI component suite (dialogs, dropdowns, forms, etc.)
- **Icons**: Lucide React
- **Forms**: React Hook Form with Zod validation via `@hookform/resolvers`
- **Date Handling**: date-fns
- **Carousel**: Embla Carousel React

### Development Tools
- **Replit Plugins**: Runtime error overlay, cartographer, dev banner (development only)
- **Meta Images Plugin**: Custom Vite plugin for OpenGraph image handling