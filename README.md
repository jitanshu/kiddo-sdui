Kiddo SDUI Assignment

Overview

This project implements a Server-Driven UI (SDUI) homepage renderer for the Kiddo mobile application.

The application consumes a dynamic JSON payload and renders heterogeneous UI blocks using a scalable Component Registry architecture. The implementation focuses on performance, resilience, runtime theming, campaign management, and rendering isolation.

⸻

## Screenshots

### Home Screen

![Home Screen](./assets/screenshots/home.png)

### Campaign Switching

![Campaign](./assets/screenshots/campaign.png)

### Cart Update

![Cart](./assets/screenshots/cart-update.png)

### Logs

![Cart](./assets/screenshots/logs.png)

Tech Stack

* React Native (Expo + Prebuild/Bare Workflow)
* TypeScript (Strict Mode)
* FlashList (@shopify/flash-list)
* Zustand
* React Context API
* Lottie React Native

⸻

Architecture

Server Driven UI

The homepage is entirely driven by a backend payload.

Backend Payload
       ↓
SDUI Renderer
       ↓
Component Registry
       ↓
React Native Components

Supported block types:

* BANNER_HERO
* PRODUCT_GRID_2X2
* DYNAMIC_COLLECTION
* FULL_SCREEN_OVERLAY

Unknown component types are safely ignored to preserve application stability.

⸻

Component Registry Pattern

A registry-based architecture is used instead of large switch statements.

Benefits:

* Easy extensibility
* Better maintainability
* Open for new component types
* Runtime component mapping

⸻

Universal Action Dispatcher

All user interactions are routed through a centralized dispatcher.

Supported actions:

* ADD_TO_CART
* DEEP_LINK
* APPLY_MYSTERY_GIFT_COUPON

UI components remain unaware of business logic and only dispatch actions.

⸻

Runtime Theme Injection

Themes are supplied through the payload and injected into the application using React Context.

{
  "theme": {
    "primary": "#FF9933",
    "background": "#FFF5E6"
  }
}

This enables visual changes without requiring an app release.

⸻

Campaign Engine

Implemented campaign configurations:

1. Back To School
2. Summer Playhouse
3. Mystery Gift Carnival

Campaign switching dynamically updates:

* Theme
* Layout content
* Overlay configuration

without requiring application updates.

⸻

Overlay Architecture

Overlay blocks are extracted from the main feed and rendered above the application layer.

Benefits:

* Full screen campaign effects
* No interference with scrolling
* No interaction blocking

pointerEvents="none"

ensures users can continue interacting with the application while overlays are visible.

⸻

State Management

Zustand is used for cart state management.

Cart updates are isolated from the homepage feed rendering pipeline.

This prevents unnecessary re-renders of:

* Banner blocks
* Product grids
* Dynamic collections

when cart state changes.

⸻

Performance Optimizations

* FlashList virtualization
* React.memo boundaries
* Stable keyExtractors
* useMemo
* useCallback
* Overlay separation from feed rendering
* Zustand selector-based subscriptions

⸻

Payload Validation

Runtime type guards validate incoming payloads before rendering.

Invalid or malformed blocks are discarded safely without impacting the remaining view hierarchy.

⸻

Project Structure

src/
├── actions/
├── components/
├── data/
├── engine/
├── store/
├── theme/
├── types/

⸻

Assumptions

* Backend payloads are mocked locally.
* Remote media URLs are mocked.
* Deep link actions are logged for demonstration purposes.
* Campaign assets are represented using placeholder media URLs.

⸻

Future Improvements

* Remote payload fetching
* Action Registry pattern
* Cached media layer
* Analytics integration
* Dynamic component registration from remote modules

⸻

Author

Jitanshu Kushwaha
Senior React Native Developer