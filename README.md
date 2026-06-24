Kiddo SDUI Assignment

A production-oriented Server Driven UI (SDUI) homepage renderer built with React Native and TypeScript.

The application dynamically renders homepage sections from a backend-driven JSON payload while supporting runtime theming, campaign overlays, action dispatching, and rendering optimizations.

⸻

Screenshots

Back To School Campaign

Campaign Switching

Cart State Updates

Render Verification

⸻

Features

Dynamic Homepage Rendering

The homepage is rendered entirely from a JSON payload using a Component Registry architecture.

Supported block types:

* BANNER_HERO
* PRODUCT_GRID_2X2
* DYNAMIC_COLLECTION
* FULL_SCREEN_OVERLAY

Unknown block types are safely ignored to prevent application crashes.

⸻

Component Registry Pattern

A registry-driven architecture is used for mapping backend component types to React Native components.

Benefits:

* Extensible
* Scalable
* Easy to maintain
* Runtime configurable

⸻

Universal Action Dispatcher

All user interactions are routed through a centralized dispatcher.

Supported actions:

* ADD_TO_CART
* DEEP_LINK
* APPLY_MYSTERY_GIFT_COUPON

UI components remain completely decoupled from business logic.

⸻

Campaign Engine

Implemented campaign configurations:

Back To School

* Theme Injection
* School Animation Overlay
* Lunchboxes & Bags Collection

Summer Playhouse

* Theme Injection
* Summer Product Collection

Mystery Gift Carnival

* Theme Injection
* Confetti Overlay
* Mystery Gift Actions

Campaigns can be switched at runtime without requiring application updates.

⸻

Runtime Theme Injection

Themes are supplied through the payload and injected into the application through React Context.

Example:

{
  "theme": {
    "primary": "#FF9933",
    "background": "#FFF5E6"
  }
}

This allows the UI to adapt instantly to campaign-specific branding.

⸻

Overlay Architecture

Overlay components are rendered outside the primary FlashList and mounted as a dedicated screen-level layer.

Benefits:

* Full screen campaign effects
* No scroll interruption
* No interaction blocking

pointerEvents="none"

ensures all underlying UI remains interactive.

⸻

State Management

Zustand is used for cart state management.

Cart updates are isolated from the homepage rendering pipeline, preventing unnecessary re-renders of:

* Banner blocks
* Product grids
* Dynamic collections

⸻

Performance Optimizations

* FlashList virtualization
* React.memo boundaries
* Stable keyExtractors
* useMemo
* useCallback
* Overlay separation from feed rendering
* Zustand selector subscriptions
* Render isolation verification

⸻

Payload Validation

Runtime type guards validate incoming payloads before rendering.

Invalid or malformed blocks are filtered out before reaching the rendering layer, ensuring application stability.

⸻

Tech Stack

* React Native
* Expo (Prebuild / Bare Workflow)
* TypeScript (Strict Mode)
* FlashList
* Zustand
* React Context API
* Lottie React Native

⸻

Project Structure

src
├── actions
├── components
├── data
├── engine
├── store
├── theme
└── types

⸻

Assumptions

* Backend payloads are mocked locally.
* Campaign assets are represented using local Lottie files.
* Deep link actions are logged for demonstration purposes.
* Remote configuration can replace local payloads without architectural changes.

⸻

Future Improvements

* Remote payload fetching
* Action Registry pattern
* Media caching layer
* Analytics integration
* Remote campaign management
* A/B testing integration

⸻

Author

Jitanshu Kushwaha

Senior React Native Developer