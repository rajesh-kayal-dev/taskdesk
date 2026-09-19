# TaskDesk

TaskDesk is a powerful, distraction-free desktop application designed to streamline daily work, track tasks, and boost overall productivity right from your computer.

---

## What is TaskDesk?

TaskDesk gives you a dedicated workspace on your desktop to plan your workload, focus on current priorities, and keep your tasks organized. Instead of getting lost in open browser tabs, TaskDesk runs as a lightweight native application—ensuring faster access, timely desktop reminders, and full offline accessibility.

---

## Tech Stack

* **Desktop Framework:** Electron
* **User Interface:** React, TypeScript, Tailwind CSS
* **Build System:** Vite, pnpm
* **Backend Integration:** Node.js Express Service
* **Local Storage:** SQLite (Local Caching)

---

## Application Modules & Features

| Module | Core Purpose | What It Does for You |
| --- | --- | --- |
| **Workspace Manager** | Daily Overview | Displays active tasks, priority items, and deadlines in a clear dashboard. |
| **File Import & Export** | Data Backup | Allows you to save task records to your computer or load existing backup files easily. |
| **System Tray & Alerts** | Background Management | Minimizes to your menu bar or system tray and sends desktop notifications for important deadlines. |
| **Quick Action Shortcuts** | Hands-Free Control | Supports custom keyboard shortcuts to instantly add or search tasks without switching windows. |
| **Offline Sync Engine** | Offline Reliability | Saves your work locally when offline and automatically syncs changes when reconnected. |
| **Multi-Window Display** | Focused Work | Lets you pop out specific task boards or notes into separate individual windows. |

---

## How to Install & Launch

### Download & Run

1. Download the setup file for your operating system (Windows, macOS, or Linux).
2. Follow the quick installer wizard.
3. Open **TaskDesk** from your desktop or application list and start organizing your workflow.

### Developer Setup

```bash
# Clone the workspace repository
git clone https://github.com/your-username/taskdesk.git

# Enter the desktop directory
cd taskdesk/desktop

# Install project dependencies
pnpm install

# Start in development mode
pnpm run dev

```