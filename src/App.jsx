import Pizza from "./components/pizza"
import Header from "./components/Header"
import { useState } from "react"
import { NotificationProvider } from "./context/NotificationContext";


function App() {
  const [toast, setToast] = useState(null);
  const showToast = (message) => {
    setToast(message);
    setTimeout(() => {
      setToast(null);
    }, 5000); // The toast will disappear after 5 seconds
  };

  return (
    <div className="grid-container">
      <header className="navbar">
        <Header />

      </header>
      <main className="main-content">
        {toast && (
          <div className="toast-notification">
            {toast}
          </div>
        )}
        <NotificationProvider>
          <Pizza showToast={showToast} />
        </NotificationProvider>
      </main>
      <footer className="footer">Footer</footer>
    </div>

  )
}

export default App
