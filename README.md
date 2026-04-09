# Interactive Wall Calendar

A polished, interactive wall calendar built with **React** and **Tailwind CSS** as part of the TakuForward Frontend Engineering Challenge.

---

<<<<<<< HEAD
## Features

### Core Features

- **Wall Calendar Aesthetic** — Resembles a physical wall calendar with binder holes, a hero image that changes every month, and a clean date grid
- **Day Range Selector** — Click any date to set a start date, click another to set an end date. Clear visual states for start, end, and in-between dates
- **Integrated Notes** — Add notes for any selected date or date range. Notes are saved per date range and persist across sessions using localStorage
- **Fully Responsive** — Side-by-side layout on desktop, stacked vertically on mobile

### Extra Features

- ** Live Clock** — Real-time clock displayed at the top of the calendar
- ** Dark / Light Theme** — Toggle between dark and light mode at any time
- ** Indian Holiday Markers** — Major Indian public holidays are highlighted with an indicator and tooltip (Republic Day, Holi, Independence Day, Diwali, Christmas, and more)
- ** Notes List** — View all saved notes in one place by clicking "All Notes"
- ** Note Dot Indicator** — A pink dot appears below any date that has a saved note
- ** Today Highlight** — Today's date is always highlighted in grey for quick reference
- ** Slide Animation** — Smooth slide-in animation when navigating between months. Slides in from the right when going forward, and from the left when going back

---

## 🛠️ Tech Stack

- **React** (Vite)
- **Tailwind CSS**
- **localStorage** for data persistence

---

## 📁 Project Structure

```
src/
├── components/
│   ├── calendar/
│   │   ├── CalendarDay.jsx       # Individual day cell with all visual states
│   │   ├── CalendarGrid.jsx      # 7-column grid layout
│   │   └── CalendarHeader.jsx    # Month/year display + navigation arrows
│   ├── Notes/
│   │   └── NotesPanel.jsx        # Notes textarea + all notes list
│   ├── HeroImage.jsx             # Monthly hero image with overlay
│   └── WallCalendar.jsx          # Root composer component
├── context/
│   ├── RangeContext.jsx          # Context for date range selection
│   └── ThemeContext.jsx          # Context for dark/light theme
├── hooks/
│   ├── useCalendar.js            # Month/year navigation logic
│   └── useDateRange.js           # Start/end date selection logic
├── utils/
│   ├── dateHelpers.js            # Pure date calculation functions
│   └── holidays.js               # Indian public holidays data
├── styles/
│   └── main.css                  # Global styles + Tailwind imports
├── App.jsx
└── main.jsx
```

---

## Getting Started

### Prerequisites

- Node.js (v18 or above)
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/your-repo-name.git

# Navigate into the project
cd your-repo-name

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## How to Use

1. **Navigate months** using the `‹` and `›` arrows — smooth slide animation plays on each navigation
2. **Select a date range** by clicking a start date then an end date
3. **Add a note** for your selected range in the notes section below
4. **View all notes** by clicking the "All Notes" button
5. **Toggle dark mode** using the 🌙 button in the top right
6. **Holidays** are marked with 🎉 and highlighted in orange

---

## Design Decisions

- **No backend** — All data persistence is handled via localStorage as per the assessment requirements
- **Context over prop drilling** — `RangeContext` and `ThemeContext` are used to avoid passing props through multiple levels
- **Flat array for calendar grid** — Instead of a matrix, a flat array with leading null values is used, and CSS Grid handles the 7-column layout automatically
- **Separate hooks** — `useCalendar` and `useDateRange` keep state logic clean and reusable
- **useRef for animation** — Instead of remounting with `key` prop (which caused layout shifts), `useRef` is used to retrigger CSS animations without affecting the DOM structure

---

## 🔗 Live Demo

> Add your Vercel/Netlify link here

---
=======
##  Features

### Core Features
- **Wall Calendar Aesthetic** — Resembles a physical wall calendar with binder holes, a hero image that changes every month, and a clean date grid
- **Day Range Selector** — Click any date to set a start date, click another to set an end date. Clear visual states for start, end, and in-between dates
- **Integrated Notes** — Add notes for any selected date or date range. Notes are saved per date range and persist across sessions using localStorage
- **Fully Responsive** — Side-by-side layout on desktop, stacked vertically on mobile

### Extra Features
- **Live Clock** — Real-time clock displayed at the top of the calendar
- **Dark / Light Theme** — Toggle between dark and light mode at any time
- **Indian Holiday Markers** — Major Indian public holidays are highlighted with an indicator and tooltip (Republic Day, Holi, Independence Day, Diwali, Christmas, and more)
- **Notes List** — View all saved notes in one place by clicking "All Notes"
- **Note Dot Indicator** — A pink dot appears below any date that has a saved note
- **Today Highlight** — Today's date is always highlighted in grey for quick reference

---

## Tech Stack

- **React** (Vite)
- **Tailwind CSS**
- **localStorage** for data persistence

---

## 📁 Project Structure

```
src/
├── components/
│   ├── calendar/
│   │   ├── CalendarDay.jsx       # Individual day cell with all visual states
│   │   ├── CalendarGrid.jsx      # 7-column grid layout
│   │   └── CalendarHeader.jsx    # Month/year display + navigation arrows
│   ├── Notes/
│   │   └── NotesPanel.jsx        # Notes textarea + all notes list
│   ├── HeroImage.jsx             # Monthly hero image with overlay
│   └── WallCalendar.jsx          # Root composer component
├── context/
│   ├── RangeContext.jsx          # Context for date range selection
│   └── ThemeContext.jsx          # Context for dark/light theme
├── hooks/
│   ├── useCalendar.js            # Month/year navigation logic
│   └── useDateRange.js           # Start/end date selection logic
├── utils/
│   ├── dateHelpers.js            # Pure date calculation functions
│   └── holidays.js               # Indian public holidays data
├── styles/
│   └── main.css                  # Global styles + Tailwind imports
├── App.jsx
└── main.jsx
```

---

##  Getting Started

### Prerequisites
- Node.js (v18 or above)
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/your-repo-name.git

# Navigate into the project
cd your-repo-name

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

##  How to Use

1. **Navigate months** using the `‹` and `›` arrows
2. **Select a date range** by clicking a start date then an end date
3. **Add a note** for your selected range in the notes section below
4. **View all notes** by clicking the "All Notes" button
5. **Toggle dark mode** using the 🌙 button in the top right
6. **Holidays** are highlighted in orange

---

## 📌 Design Decisions

- **No backend** — All data persistence is handled via localStorage as per the assessment requirements
- **Context over prop drilling** — `RangeContext` and `ThemeContext` are used to avoid passing props through multiple levels
- **Flat array for calendar grid** — Instead of a matrix, a flat array with leading null values is used, and CSS Grid handles the 7-column layout automatically
- **Separate hooks** — `useCalendar` and `useDateRange` keep state logic clean and reusable

---



## 🔗 Live Demo

> Add your Vercel/Netlify link here

---

>>>>>>> 19bdb33c04f2db19b64f352b260fc50074b3fff9
