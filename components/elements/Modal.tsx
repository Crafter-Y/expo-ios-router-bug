import { ScrollView, useWindowDimensions } from "react-native";
import React, { forwardRef, useImperativeHandle, useState } from "react";
import ReactNativeModal from "react-native-modal";
import tw from "@/tailwind";

type Props = {
  children?: React.ReactNode;
};

export type ModalHandle = {
  openModal: () => void;
  closeModal: () => void;
};

const Modal = forwardRef<ModalHandle, Props>(({ children }: Props, ref) => {
  const { width } = useWindowDimensions();

  const [isModalOpen, setModalOpen] = useState(false);

  useImperativeHandle(ref, () => ({
    openModal() {
      setModalOpen(true);
    },
    closeModal() {
      setModalOpen(false);
    },
  }));

  return (
    <ReactNativeModal
      isVisible={isModalOpen}
      style={tw.style("m-0 items-center justify-end")}
    >
      <ScrollView
        style={tw.style(
          {
            flexGrow: 0,
            width,
          },
          "bg-white shadow-lg rounded-t-xl"
        )}
      >
        {children}
      </ScrollView>
    </ReactNativeModal>
  );
});

export default Modal;
