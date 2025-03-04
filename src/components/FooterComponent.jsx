import React from 'react';

function FooterComponent() {
  return (
    <footer className="footer mt-auto py-3" style={{ backgroundColor: '#1eb3a6', color: 'white' }}>
      <div className="container text-center">
        <span className="text-muted" style={{ color: '#a9e0d5' }}> {/* Color más claro para el texto */}
          Desarrollado por @M3 &copy; {new Date().getFullYear()}
        </span>
      </div>
    </footer>
  );
}

export default FooterComponent;