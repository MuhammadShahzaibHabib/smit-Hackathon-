import React from "react";
import { Button } from "@/components/ui/button";

const Modal = ({ open, onClose, children }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
        <div className="flex justify-end">
          <Button onClick={onClose} variant="outline" className="p-2">
            Close
          </Button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export { Modal };
