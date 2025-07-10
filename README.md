# HonE-Phases
A simple game of duality, prediction, and momentum.

---

## Heaven on Earth: PHASES  
**BLACK / WHITE – Advantage Game**

A minimal, high-concept prototype exploring asymmetry, simplicity, and momentum through binary input dynamics. Designed in pure HTML/CSS/JS as a phase test for a larger project.

---

## 📜 Overview

This is a self-contained web-based experimental game engine built as a prototype for **Heaven on Earth: PHASES**. It showcases:
- Binary player choices (🖤 BLACK vs 🤍 WHITE, and ⬜ GREY at higher heat)
- AI counterplays and adaptive strategies
- Dynamic momentum (“advantage rope”)
- Persistent stats & achievements
- Hidden systems & feedback (shakes, hotkeys, modals)
- Unlockable mechanics: GREY at heat 4, CHAOS at heat 5

---

## 🎮 How to Play

Choose your side each round:
- **🖤 BLACK** (Left Shift key or button)
- **🤍 WHITE** (Right Shift key or button)
- **⬜ GREY** (Spacebar or button, unlocked at heat 4)

The AI also chooses. Each choice results in one of several interactions:

| You \ Enemy | BLACK    | WHITE    | GREY    |
|-------------|----------|----------|---------|
| **BLACK**   | +1/+1    | 0/+1     | +1/0    |
| **WHITE**   | +1/0     | -1/-1    | 0/-1    |
| **GREY**    | 0/+1     | -1/0     | 0/0     |

The goal: build a +3 advantage before the enemy does. First to hit ±3 wins.

---

## 🔥 Heat & Unlocks

- **Heat** increases as you win games, unlocking new mechanics:
  - **⬜ GREY** unlocks at heat 4 (one-time log message)
  - **⚡ CHAOS** unlocks at heat 5 (one-time log message & UI meter)

**CHAOS** introduces unpredictable move-flipping at higher heat levels. The higher the CHAOS level, the more likely your or the enemy’s move will be flipped at random each round.

- **CHAOS only operates at heat ≥ 5**
- CHAOS is displayed and increases dynamically with player/AI streak changes

---

## 🧠 Features

- **Dynamic Advantage Display** – A shifting rope to track control of momentum
- **Persistent Local Stats** – Wins/losses/games played saved in localStorage
- **Unlockable Achievements** – Progress-based rewards with a modal UI
- **Secret Shake-to-Erase** – Triple-X hotkey wipes all stats (and resets heat/unlocks)
- **No Server Required** – Fully offline, no dependencies
- **Unlockable Mechanics** – GREY & CHAOS add depth as you progress

---

## 🔑 Controls

| Action              | Key / Button               |
|---------------------|---------------------------|
| Play BLACK          | Left Shift / 🖤 Button     |
| Play WHITE          | Right Shift / 🤍 Button    |
| Play GREY           | Spacebar / ⬜ Button (unlocked at heat 4) |
| Restart             | R                         |
| Show Achievements   | S                         |
| Erase Stats         | Press X 3× quickly        |
| Close Modal         | Click outside / Press S again |

---

## 🏆 Achievements

- ✅ First Win
- ✅ First Loss
- ✅ 5 Games Played
- ✅ 10 Wins
- ✅ Win/Loss Ratio > 2
- ✅ 20 Games Played
- ✅ Max Heat ≥ 4

(More can be added easily in `getAchievements()`.)

---

## 📁 File Info

- `index.html` – Single HTML file with embedded CSS & JS
- No external libraries or dependencies
- All game logic runs in-browser

---

## 🛠️ Notes for Developers

This engine is designed to test micro-decision gameplay using limited input but expressive output. Ideal for:
- Turn-based prototypes
- Interactive fiction hybrids
- Combat metaphors
- One-button experimental games

Achievements, shakes, and unlock systems are modular and extendable.

---

## 🌌 Conceptual Notes

This prototype represents a duality engine: conflict through simplicity. It gestures toward deeper metaphysical gameplay (as explored in Heaven on Earth) by using binary opposition, rhythm, and entropy.

The minimal aesthetic evokes a sense of ritual combat, chance vs choice, and the illusion of control in an abstract arena.

---

## 🚀 Launch

Just open `index.html` in any modern browser.  
No setup. No build step. Just pure play.
