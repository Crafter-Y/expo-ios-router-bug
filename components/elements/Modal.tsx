import { ScrollView, useWindowDimensions, View } from "react-native";
import React, { forwardRef, useImperativeHandle, useState } from "react";
import ReactNativeModal from "react-native-modal";

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
      style={{
        margin: 0,
        alignContent: "center",
        justifyContent: "flex-end",
      }}
    >
      {/* Replace this with normal View and it works. Or remove the border radius and it works as well */}
      <ScrollView
        style={{
          flexGrow: 0,
          width,
          backgroundColor: "white",
          borderTopRightRadius: 12,
          borderTopLeftRadius: 12,
        }}
      >
        {children}
      </ScrollView>
    </ReactNativeModal>
  );
});

export default Modal;
