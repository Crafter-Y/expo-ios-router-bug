# expo ios router bug

1. `npm install`
2. `npx expo start`

## the bug

Only appears on iOS, tested on iPad (8th gen, iOS 18.0.1)

1. Click "Navigate directly"
2. It should now display a scrollable list as you would expect it
3. Go back
4. Click "Open Modal" -> "Push to another page"
5. It should still look normal
6. Go back
7. Click "Open Modal" -> "Push to another page"
8. Now the layout is screwed and the scroll view is only shown on half the screen

## How to solve the bug in this situation:

- Open components/elements/Modal.tsx
- Replace the `ScrollView` with a normal `View` or remove the border radius from the view.
