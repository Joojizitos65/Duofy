import React from 'react';
import { useNavigate } from 'react-router-dom';

import '../../styles/navigation/navbarU.css';
export default function BottomNav(){
  const navigate = useNavigate();
  return (
<div>
<div className="bottom-nav">
        <div className="nav-item" onClick={() => navigate('/Conversa')}>
          <img src="chatnav.png" alt="Chat" className="icon" />
        </div>
        <div className="nav-item home" onClick={() => navigate('/home')}>
          <div className="icon-wrapper">
            <img src="Homenav.png" alt="Home" className="icon" />
          </div>
        </div>
        <div className="nav-item" onClick={() => navigate('/carrinho')}>
          <img src="sacolanav.png" alt="Cart" className="icon" />
        </div>
      </div>
</div>
  );
};
