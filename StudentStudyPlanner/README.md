## 📚 Student Study Planner

A simple React Native mobile app that helps students plan, track, and manage their daily study tasks across different subjects. Users can log in, view their tasks, mark them as complete, delete them and add new ones — all synced across the Home and Tasks screens.

## Features
Login / Register flow — simple email-password based authentication screens (mocked, no backend).
Home Screen — displays a welcome message and today's task progress at a glance.
My Tasks Screen — full list of tasks with the ability to:
- Mark a task as Complete
- Delete a task
Add Task Screen — add new tasks with a title and subject.
Shared state — all task data (add/complete/delete) is managed centrally in App.tsx and passed down as props, keeping Home and Tasks screens in sync.
Reusable UI components — custom header, input, button and card components for a consistent look across screens.

## Project Structure
## Project Structure

```text
StudentStudyPlanner/
├── App.tsx                         # Root component, manages navigation & task state
├── screens/
│   ├── LoginScreen.tsx             # Login form
│   ├── RegisterScreen.tsx          # Registration form
│   ├── HomeScreen.tsx              # Dashboard with today's progress
│   ├── TaskScreen.tsx              # Full task list with complete/delete actions
│   └── AddTaskScreen.tsx           # Form to add a new task
├── components/
│   ├── CustomHeader.tsx            # Reusable screen header
│   ├── CustomInput.tsx             # Reusable text input
│   ├── CustomButton.tsx            # Reusable button
│   └── CustomCard.tsx              # Task/progress card with status & actions
└── theme.ts                        # Shared colors, font sizes, and styling constants
```

## App Flow
The app uses simple state-based navigation (no navigation library) managed in App.tsx via a screen state variable:
```text
Login ──► Register
  │
  └──► Home ──► My Tasks ──► Add Task
                    │
                    └──► Back to My Tasks
```


1.login	Screen - Default screen. User logs in or navigates to register.
2.register Screen -	New user registration, then redirects to login.
3.home Screen - Shows welcome message and today's task progress.
4.tasks Screen - 	Full task list with Complete/Delete actions.
5.addTask - 	Form to add a new task, returns to Tasks screen.

## Tech Stack
React Native (with TypeScript)
React Hooks (useState) for state management
No external navigation or state management libraries — kept intentionally simple for learning purposes.

## Getting Started
Prerequisites - 
Node.js installed
React Native development environment set up (official guide)
Android Studio / Xcode (depending on target platform)

## Installation
# Install dependencies
npm install

# Start Metro bundler
npx react-native start

# Run on Android
npx react-native run-android

# Run on iOS
npm run ios


## Future Improvements
- Persist tasks using local storage (e.g., AsyncStorage) so data isn't lost on app restart
- Real authentication with a backend (Firebase / custom API)
- Task editing support
- Due dates and reminders/notifications
- Filter/sort tasks by subject or status
- Dark mode support

## License
This project is for educational purposes. Feel free to fork and modify it for your own learning.
