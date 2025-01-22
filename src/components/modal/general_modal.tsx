import React from "react";
import { Box, Modal } from "@mui/material";
import { CgCloseO } from "react-icons/cg";

type GeneralModalProps = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const GeneralModal = ({ open, onClose, children }: GeneralModalProps) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="general-modal"
      aria-describedby="general-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: { xs: "90%", sm: "80%", md: "80%" },
          maxWidth: 1000,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
          maxHeight: "90vh",
          overflow: "auto",
        }}
      >
        <CgCloseO
          className="text-primary absolute top-3 right-3 cursor-pointer w-6 h-6"
          onClick={onClose}
        />
        {children}
      </Box>
    </Modal>
  );
};

export default GeneralModal;
