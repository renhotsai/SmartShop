# SmartShop

A React Native mobile application built with Expo that helps users discover recipes, search for products, and locate stores. The app combines recipe browsing, product search functionality, and community features to create a comprehensive shopping and cooking experience.

## Features

- **Recipe Discovery**: Browse and view detailed recipes with ingredients and preparation steps
- **Product Search**: Search for products with real-time results and price information  
- **Store Locator**: Find nearby stores and locate specific products
- **User Authentication**: Login and signup functionality
- **Community Features**: Donation functionality and community interaction
- **Interactive Maps**: Location-based services with map integration
- **Premium Features**: Unlock nutrition information, ingredient shopping, and cooking tutorials

## Tech Stack

- **Framework**: React Native with Expo
- **Navigation**: React Navigation v6
- **Database**: Firebase Firestore
- **Maps**: React Native Maps with Expo Location
- **Icons**: Expo Vector Icons (FontAwesome6, AntDesign, MaterialIcons, Ionicons)
- **Authentication**: Firebase Auth

## Project Structure

```
SmartShop/
├── App.js                  # Main application entry point
├── Controllers/
│   └── firebaseConfig.js   # Firebase configuration
├── Models/
│   ├── Images.js          # Image assets mapping
│   └── Styles.js          # Application styles
├── Views/
│   ├── DonateView.js      # Donation functionality
│   ├── DrawerView.js      # Navigation drawer
│   ├── HomeStackView.js   # Home stack navigation
│   ├── HomeView.js        # Main home screen
│   ├── ListView.js        # List display components
│   ├── LocatorView.js     # Store locator
│   ├── LoginView.js       # Authentication
│   ├── MainView.js        # Main app container
│   ├── RecipeView.js      # Recipe details
│   └── SignupView.js      # User registration
├── assets/                # Static assets and images
├── app.json              # Expo configuration
└── .gitignore           # Git ignore rules
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- Expo CLI (`npm install -g @expo/cli`)
- iOS Simulator (for iOS development)
- Android Studio/Emulator (for Android development)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd SmartShop
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure Firebase:
   - Create a Firebase project
   - Add your Firebase configuration to `Controllers/firebaseConfig.js`
   - Set up Firestore collections for `recipes` and `products`

4. Start the development server:
   ```bash
   expo start
   ```

5. Run on your preferred platform:
   - Press `i` for iOS simulator
   - Press `a` for Android emulator
   - Scan QR code with Expo Go app on physical device

## Firebase Setup

The app uses Firebase for backend services. You'll need to set up:

1. **Firestore Collections**:
   - `recipes`: Store recipe data with fields like name, ingredients, preparations, time, imageName
   - `products`: Store product data with fields like name, price, tag, imageName

2. **Authentication**: Configure Firebase Auth for user login/signup

3. **Storage** (optional): For storing recipe and product images

## Key Features Implementation

### Recipe System
- Real-time recipe fetching from Firestore
- Image mapping system for recipe photos
- Detailed view with ingredients and step-by-step preparations
- Premium features (nutrition info, ingredient shopping, cooking tutorials)

### Product Search
- Real-time search functionality with Firestore queries
- Tag-based product filtering
- Product locator integration with store mapping

### Location Services
- Expo Location for geocoding and user location
- React Native Maps for interactive store locations
- Address-based store finding

## Configuration

The app configuration is managed through `app.json`:
- App name, version, and metadata
- Platform-specific settings (iOS/Android)
- Expo updates and EAS configuration
- Asset bundle patterns

## Development

### Adding New Features
1. Create new views in the `Views/` directory
2. Add navigation routes in the appropriate stack navigator
3. Update styles in `Models/Styles.js`
4. Add new images to `Models/Images.js`

### Database Schema
Ensure your Firestore collections follow the expected schema:

**Recipes Collection**:
```javascript
{
  name: "Recipe Name",
  ingredients: ["ingredient1", "ingredient2"],
  preparations: {
    "1": "First step",
    "2": "Second step"
  },
  time: 30,
  imageName: "image_key"
}
```

**Products Collection**:
```javascript
{
  name: "Product Name",
  price: "9.99",
  tag: "searchable_tag",
  imageName: "image_key"
}
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Create a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support and questions, please open an issue in the GitHub repository.

---

Built with ❤️ using React Native and Expo
