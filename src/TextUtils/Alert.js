import React from "react";

export default function Alert() {
     return (
        <div className=" container my-2 alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Holy guacamole!</strong> You should check in on some of those fields
        below.
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        />
      </div>      
     );
}
