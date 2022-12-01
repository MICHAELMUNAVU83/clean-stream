import React from "react";

function Hello({ user, setStoredToken }) {
  
  return (
    <div>
      Hello {user? user.username : "Guest"}!
    </div>
  );
}

export default Hello;
