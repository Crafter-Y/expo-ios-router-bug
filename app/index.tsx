import { Button, SafeAreaView, Text } from "react-native";
import React, { useRef } from "react";
import Modal, { ModalHandle } from "@/components/elements/Modal";
import { router } from "expo-router";

export default function BoardScreenScreen() {
  const modal = useRef<ModalHandle>(null);

  return (
    <SafeAreaView>
      <Button onPress={() => modal.current?.openModal()} title="Open Modal" />
      <Button
        onPress={() => router.push("/settings/")}
        title="Navigate directly"
      />
      <Modal ref={modal}>
        <Text
          style={{
            height: 256,
          }}
        >
          Text above
        </Text>
        <Button
          title="Push to another page"
          onPress={() => {
            modal.current?.closeModal();
            router.push("/settings/");
          }}
        />
        <Text
          style={{
            height: 128,
          }}
        >
          Text below
        </Text>
      </Modal>
    </SafeAreaView>
  );
}
