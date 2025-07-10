# HonE-Phases
a simple game based on duality and prediction


Heaven on Earth: PHASES

Prototype Description

BLACK / WHITE – Advantage Game
A minimal, high-concept prototype exploring asymmetry, simplicity, and momentum through binary input dynamics. Designed in pure HTML/CSS/JS as a phase test for a larger project.

⸻

📜 Overview

This is a self-contained web-based experimental game engine built as a prototype for Heaven on Earth: PHASES. It showcases:
	•	Binary player choices (🖤 BLACK vs 🤍 WHITE)
	•	AI counterplays
	•	Visualized momentum (“advantage rope”)
	•	Persistent stats & achievements
	•	Hidden systems & feedback (shakes, hotkeys, modals)

⸻

🎮 How to Play

Choose your side:
	•	🖤 BLACK (Left Shift or Button)
	•	🤍 WHITE (Right Shift or Button)

Each choice results in one of four interactions based on AI’s move:

You \ Enemy	BLACK	WHITE
BLACK	Both gain +1	You lose, enemy gains +1
WHITE	You gain, enemy loses	Both lose -1

The goal is to build a +3 advantage before the enemy does. First to hit ±3 wins.

⸻

🧠 Features
	•	Dynamic Advantage Display – A shifting rope to track control of momentum
	•	Local Stats Tracking – Win/Loss/Games played saved in localStorage
	•	Unlockable Achievements – Progress-based rewards with a modal UI
	•	Secret Shake-to-Erase – Triple-X hotkey wipes stats with visual feedback
	•	No Server Required – Fully offline, no dependencies

⸻

🔑 Controls

Action	Key / Button
Play BLACK	Left Shift / 🖤 Button
Play WHITE	Right Shift / 🤍 Button
Restart	R
Show Achievements	S
Erase Stats	Press X 3× quickly
Close Modal	Click outside / Press S again


⸻

🏆 Achievements
	•	✅ First Win
	•	✅ First Loss
	•	✅ 5 Games Played
	•	✅ 10 Wins
	•	✅ Win/Loss Ratio > 2
	•	✅ 20 Games Played
(More can be added easily in the getAchievements() function.)

⸻

📁 File Info
	•	index.html – Single HTML file with embedded CSS & JS
	•	No external libraries or dependencies
	•	All game logic runs in-browser

⸻

🛠️ Notes for Developers

This engine is designed to test micro-decision gameplay using limited input but expressive output. Ideal for:
	•	Turn-based prototypes
	•	Interactive fiction hybrids
	•	Combat metaphors
	•	One-button experimental games

Feel free to fork and modify. Achievements and shake animations are modular and extendable.

⸻

🌌 Conceptual Notes

This prototype represents a duality engine: conflict through simplicity. It gestures toward deeper metaphysical gameplay (as explored in Heaven on Earth) by using binary opposition, rhythm, and entropy.

The minimal aesthetic evokes a sense of ritual combat, chance vs choice, and the illusion of control in an abstract arena.

⸻

🚀 Launch

Just open index.html in any modern browser.
No setup. No build step. Just pure play.
